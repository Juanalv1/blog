import Image from 'next/image'
import Navbar from './components/Navbar'
import BlogCard from './components/BlogCard'

export default function Home() {
  const posts = [
    { postimg: 'https://i.ibb.co/r6wJdB8/primerpost.png',
      title: 'Understanding color theory: the color wheel and finding complementary colors',
      text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
      authorImg: 'https://i.ibb.co/whv3jyh/Ellipse-1.png',
      authorName: 'Leslie Alexander',
      category: 'UI Designer',
      date: 'february 8, 2024',
  },
    { postimg: 'https://i.ibb.co/R9ykwqt/thumbnail-2.png',
      title: 'Understanding color theory: the color wheel and finding complementary colors',
      text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
      authorImg: 'https://i.ibb.co/whv3jyh/Ellipse-1.png',
      authorName: 'Leslie Alexander',
      category: 'UI Designer',
      date: 'february 8, 2024',
  },
    { postimg: 'https://i.ibb.co/G3sgjbz/thumbnail-3.png',
      title: 'Understanding color theory: the color wheel and finding complementary colors',
      text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
      authorImg: 'https://i.ibb.co/whv3jyh/Ellipse-1.png',
      authorName: 'Leslie Alexander',
      category: 'UI Designer',
      date: 'february 8, 2024',
  },
    { postimg: 'https://i.ibb.co/xzHN5XN/thumbnail-4.png',
      title: 'Understanding color theory: the color wheel and finding complementary colors',
      text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
      authorImg: 'https://i.ibb.co/whv3jyh/Ellipse-1.png',
      authorName: 'Leslie Alexander',
      category: 'UI Designer',
      date: 'february 8, 2024',
  },
    { postimg: 'https://i.ibb.co/2nyMD8k/thumbnail-5.png',
      title: 'Understanding color theory: the color wheel and finding complementary colors',
      text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
      authorImg: 'https://i.ibb.co/whv3jyh/Ellipse-1.png',
      authorName: 'Leslie Alexander',
      category: 'UI Designer',
      date: 'february 8, 2024',
  },
    { postimg: 'https://i.ibb.co/zrPJTNy/thumbnail-6.png',
      title: 'Understanding color theory: the color wheel and finding complementary colors',
      text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
      authorImg: 'https://i.ibb.co/whv3jyh/Ellipse-1.png',
      authorName: 'Leslie Alexander',
      category: 'UI Designer',
      date: 'february 8, 2024',
  },
    { postimg: 'https://i.ibb.co/h8cXbBZ/thumbnail-7.png',
      title: 'Understanding color theory: the color wheel and finding complementary colors',
      text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
      authorImg: 'https://i.ibb.co/whv3jyh/Ellipse-1.png',
      authorName: 'Leslie Alexander',
      category: 'UI Designer',
      date: 'february 8, 2024',
  }
  ];
  
  return (
    <main className= "flex flex-col min-h-screen bg-gradient-to-bl from-[#374151] to-[#111827] text-white font-Patrick-Hand ">
      <Navbar />
      <div className=' hidden lg:flex  px-12 justify-center items-center mb-8 mt-8 w-full lg:px-28 xl:px-52 cursor-pointer'>
      <div className='w-[60%] flex justify-center items-center '>
        <img src={posts[0].postimg} className='w-full'/>
      </div>
      <div className='flex flex-col ml-6 w-[40%]'>
      <div className='opacity-50 mb-2 mt-2'>
        <span> {posts[0].category} </span> - <span> {posts[0].date} </span>
      </div>
      <div>
        <h2 className='text-2xl'>
          {posts[0].title}
        </h2>
      </div>
      <div>
        <p className='opacity-50 my-2'>
          {posts[0].text}
        </p>
      </div>
      <div className='flex mt-4'>
        <div>
          <img src={posts[0].authorImg} className='w-12 h-12'/>
        </div>
        <div className='flex flex-col ml-2'>
          <span>{posts[0].authorName}</span>
          <span className='opacity-50'>{posts[0].category}</span>
        </div>
        </div>
      </div>
    </div>
      <div className='w-full px-6 py-4 flex flex-col gap-y-10 mt-4 lg:hidden'>
        {posts.map((post, index) => (
          <BlogCard authorImg={post.authorImg} authorName={post.authorName} category={post.category} postimg={post.postimg} key={index} date={post.date} title={post.title} name={post.name} text={post.text}/>
        ))}
      </div>
      <div className='w-full px-6 py-4 gap-y-10 mt-4 lg:grid grid-cols-3 hidden gap-x-7 lg:px-28 xl:px-52 lg:gap-x-16'>
        {posts.slice(1).map((post, index) => (
          <BlogCard authorImg={post.authorImg} authorName={post.authorName} category={post.category} postimg={post.postimg} key={index} date={post.date} title={post.title} name={post.name} text={post.text}/>
        ))}
      </div>

      <p className='flex w-full items-center justify-center text-gray-400 mb-2'>Copyright (c) 2021 - Design By Nauval</p>
    </main>
  )
}
