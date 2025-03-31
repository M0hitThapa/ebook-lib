'use client'
import React from 'react'

const DownloadButton = ({fileLink}: {fileLink: string}) => {
    const handleDownload = () => {
        window.open(fileLink, '_blank');
    }
  return (
     <button onClick={handleDownload} className='mt-10 h-10 rounded-md bg-gradient-to-r from-white/90 to-white/70 px-1.5 py-1.5 text-sm font-semibold text-black transition-all hover:bg-white  cursor-pointer'>
    Download the book
</button>
  )
}

export default DownloadButton