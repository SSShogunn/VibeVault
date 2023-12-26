"use client"

import AuthModal from "@/components/AuthModel"
import Modal from "@/components/Modal"
import SubscribeModal from "@/components/SubscribeModal"
import UploadModal from "@/components/UploadModal"
import { ProductWithPrice } from "@/types"

import React, { use, useState, useEffect } from "react"

interface ModalProviderProps {
    products: ProductWithPrice[]
}


const ModalProivder: React.FC<ModalProviderProps> = ({products}) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
           <AuthModal/>
           <UploadModal/>
           <SubscribeModal products={products}/>
        </>
    )
}

export default ModalProivder;
