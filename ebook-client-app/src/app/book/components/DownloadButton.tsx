'use client'
import React from 'react'

const DownloadButton = ({fileLink}: {fileLink: string}) => {
    const handleDownload = () => {
        window.open(fileLink, '_blank');
    }
  return (
     <button onClick={handleDownload} className='mt-10 h-10 rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-purple-500  cursor-pointer'>
    Download the book
</button>
  )
}

export default DownloadButton