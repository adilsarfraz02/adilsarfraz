'use client'

import { Button } from '@nextui-org/button'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='flex flex-col h-[80vh] overflow-hidden justify-center items-center gap-3'>
      <h1 className='text-6xl'>Something went wrong!😢</h1>
      <Button
      className='text-2xl !h-12 rounded-full mt-6'
      variant='ghost'
      color='danger'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}