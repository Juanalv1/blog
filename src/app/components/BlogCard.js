import React from 'react'

const BlogCard = ({postimg, category, date, title, text, authorImg, authorName}) => {
  return (
    <div className='pb-8 border-b-2 border-b-gray-600 cursor-pointer'>
      <div>
        <img src={postimg}/>
      </div>
      <div className='opacity-50 mb-2 mt-2'>
        <span> {category} </span> - <span> {date} </span>
      </div>
      <div>
        <h2 className='text-2xl'>
          {title}
        </h2>
      </div>
      <div>
        <p className='opacity-50 my-2'>
          {text}
        </p>
      </div>
      <div className='flex mt-4'>
        <div>
          <img src={authorImg} className='w-12 h-12'/>
        </div>
        <div className='flex flex-col ml-2'>
          <span>{authorName}</span>
          <span className='opacity-50'>{category}</span>
        </div>
      </div>

    </div>
  )
}

export default BlogCard
