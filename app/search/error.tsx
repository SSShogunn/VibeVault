"use client"

import React from "react";
import Box from "@/components/Box";

const Error = () => {
    return (
        <Box className="h-full flex items-center justify-center">
            <div className="text-neutral-400">
                <h1 className="text-5xl font-bold">404</h1>
                <p className="text-2xl">Page not found</p>
            </div>
        </Box>
    )
}

export default Error