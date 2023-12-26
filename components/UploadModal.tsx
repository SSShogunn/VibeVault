"use client";

import React, { use, useState } from 'react'

import Modal from './Modal'
import Input from './Input'
import Button from './Button'


import { useUser } from '@/hooks/useUser'
import useUploadModal from '@/hooks/useUploadModal'


import { FieldValues, FormSubmitHandler, SubmitHandler, set, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import uniqid from 'uniqid'
import { useRouter } from 'next/navigation'


const UploadModal = () => {
    const uploadModal = useUploadModal()
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useUser()
    const supabaseClient = useSupabaseClient()
    const router = useRouter()

    const { register, handleSubmit, reset } = useForm<FieldValues>(
        {
            defaultValues: {
                author: '',
                title: '',
                song: null,
                image: null
            }
        }
    )

    const onChange = (open: boolean) => {
        if (!open) {
            reset()
            uploadModal.onClose()
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        try {
            setIsLoading(true)

            const imageFile = values.image?.[0]
            const songFile = values.song?.[0]

            if (!imageFile || !songFile || !user) {
                toast.error("Missing fields")
            }

            const uniqueId = uniqid()


            
//SONG_UPLOAD
            const { data: songData, error: songError } = await supabaseClient 
                .storage
                .from("songs")
                .upload(`song-${values.title}-${uniqueId}`, songFile, { cacheControl: '3600', upsert: false })

            if (songError) {
                setIsLoading(false)
                return toast.error("Failed to upload song")
            }



//IMAGE_UPLOAD
            const { data: imageData, error: imageError } = await supabaseClient 
                .storage
                .from("images")
                .upload(`image-${values.title}-${uniqueId}`, imageFile, { cacheControl: '3600', upsert: false })

            if (imageError) {
                setIsLoading(false)
                return toast.error("Failed image upload")
            }

            const { error: supabaseError } =
                await supabaseClient
                    .from("songs")
                    .insert({
                        user_id: user?.id,
                        title: values.title,
                        author: values.author,
                        image_path: imageData.path,
                        song_path: songData.path,
                    });

            if (supabaseError) {
                return toast.error(supabaseError.message);
            }

            router.refresh()
            setIsLoading(false)
            reset()
            uploadModal.onClose()

        } catch (error) {
            toast.error("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Modal
            title="Add a song"
            description="Upload a MP3 file"
            isOpen={uploadModal.isOpen}
            onChange={onChange}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4'>
                <Input id="title" disabled={isLoading} {...register("title", { required: true })} placeholder="Song Title" />
                <Input id="author" disabled={isLoading} {...register("author", { required: true })} placeholder="Song Author" />
                <div>
                    <div className='pb-1'>
                        Select a song
                    </div>
                    <Input id="song" type='file' accept='.mp3' disabled={isLoading} {...register("song", { required: true })} />
                </div>
                <div>
                    <div className='pb-1'>
                        Select a Image
                    </div>
                    <Input id="image" type='file' accept='image/*' disabled={isLoading} {...register("image", { required: true })} />
                </div>
                <Button disabled={isLoading} type='submit'>
                    Upload
                </Button>
            </form>
        </Modal>
    )
}

export default UploadModal;
