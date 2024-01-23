import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'
import Heading from '../Shared/Heading'

const postsData = [
  {
    id: 1,
    title: 'Lorem ipsum, consectetur',
    date: '22 May 2024',
    description: 'Lorem ipsum, consectetur adipiscing elit sed diam nonumy',
    image: Img1
  },
  {
    id: 2,
    title: 'Lorem ipsum, consectetur',
    date: '22 May 2024',
    description: 'Lorem ipsum, consectetur adipiscing elit sed diam nonumy',
    image: Img2
  },
  {
    id: 3,
    title: 'Lorem ipsum, consectetur',
    date: '22 May 2024',
    description: 'Lorem ipsum, consectetur adipiscing elit sed diam nonumy',
    image: Img3
  }
]

const Posts = () => {
  return (
    <div className='my-12'>
      <div className="container">
        <Heading
          title='Recent News'
          subtitle='Explore Our Blog'
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
          {
            postsData.map((post) => (
              <div
                data-aos="zoom-in"
                className='bg-white dark:bg-gray-900'
                key={post.id}
              >
                <div className='overflow-hidden rounded-2xl mb-2'>
                  <img
                    className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
                    src={post.image}
                    alt=""
                  />
                </div>
                <div className='space-y-2'>
                  <p className='text-xs text-gray-500'>{post.date}</p>
                  <h1 className='font-bold line-clamp-1'>{post.title}</h1>
                  <p className='line-clamp-3 text-sm text-gray-600 dark:text-gray-400'>{post.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Posts