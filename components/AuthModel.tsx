"use client"


import Modal from "./Modal"

import { useEffect } from "react"
import { ThemeSupa, supabase } from "@supabase/auth-ui-shared"
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { Auth } from "@supabase/auth-ui-react"

import useAuthModal from "@/hooks/useAuthModal"
import { on } from "events"

const AuthModal = () => {

    const supabaseClient = useSupabaseClient()
    const router = useRouter()
    const { session } = useSessionContext()
    const { onClose, isOpen } = useAuthModal()

    useEffect(() => {
        if (session) {
            router.refresh()
            onClose()
        };

    }, [session, router, onClose])


    const onChange = (open: boolean) => {
        if (!open) onClose()
    }


    return (
        <Modal title="Welcome Back" description="Login into your Account" isOpen={isOpen} onChange={onChange}>
            <Auth
                theme="dark"
                magicLink
                providers={['github', 'google']}
                supabaseClient={supabaseClient}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: "#404040",
                                brandAccent: "#404040",
                            }
                        }
                    }
                }} />
        </Modal>
    )
}

export default AuthModal;