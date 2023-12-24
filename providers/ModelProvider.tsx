"use client"

import AuthModal from "@/components/AuthModel"
import Modal from "@/components/Modal"
import UploadModal from "@/components/UploadModal"

import React, { use, useState, useEffect } from "react"


const ModalProivder = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
           <AuthModal/>
           <UploadModal/>
        </>
    )
}

export default ModalProivder;
