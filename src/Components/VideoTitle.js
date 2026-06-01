import React from 'react'

export const VideoTitle = ({title, overview}) => {

  return (
‹div className="w-scregn aspect-video pt-36 px-12 absolute •text-white bg-gradient-to-r Of">
<h1 className="text-6xl font-bold">{title}</h1>
<p className="py-6 text-lg w-1/4">{overview}</p>
        <div>
            <button className=' bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>Play</button>
            <button className='my-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}
