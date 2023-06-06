import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} =snippet;
  return (
    <div className='p-2 m-2 w-64 shadow-lg'>
      <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>
      <ul>
        <li className='font-bold py-2' >{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export const AdVideocard = ({info})=>{
  return(
    <div className='p-1 m-1 border border-red-700'>
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;
