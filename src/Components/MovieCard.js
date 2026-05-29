import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = () => {
  return (
    <div>
        <img alt="poster"
        src = { IMG_CDN_URL + "" }
        />
    </div>
  )
}

export default MovieCard