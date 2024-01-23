import { IoMdSearch } from 'react-icons/io';
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode';

const Menulinks = [
  {
    id: 1,
    name: 'Home',
    link: '/#'
  },
  {
    id: 2,
    name: 'Shop',
    link: '/#shop'
  },
  {
    id: 3,
    name: 'About',
    link: '/#about'
  },
  {
    id: 4,
    name: 'Blogs',
    link: '/#blog'
  }
]

const Droplinks = [
  {
    id: 1,
    name: 'Trending Products',
    link: '/#trending-products'
  },
  {
    id: 2,
    name: 'Best Sellings',
    link: '/#best-sellings'
  },
  {
    id: 3,
    name: 'Top Rated',
    link: '/#top-rated'
  }
]

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className='py-4'>
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="#"
              className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
              Eshop
            </a>

            <div className="hidden lg:block">
              <ul className='flex items-center gap-4'>
                {
                  Menulinks.map((data) => (
                    <li key={data.id}>
                      <a href={data.link}
                        className="
                          inline-block
                          px-4
                          font-semibold
                          text-gray-500
                          hover:text-black
                          dark:hover:text-white
                          duration-200"
                      >{data.name}</a>
                    </li>
                  ))
                }
                <li className='relative cursor-pointer group'>
                  <a href="" className='flex items-center gap-2 font-semibold text-gray-500 dark:hover:text-white py-2'>
                    Quick Links
                    <span>
                      <FaCaretDown className='group-hover:rotate-180 duratino-200'/>
                    </span>
                  </a>
                  <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 text-black dark:text-white'>
                    <ul className='space-y-2'>
                      {
                        Droplinks.map((data) => (
                          <li key={data.id}>
                            <a
                              className='text-gray-500 hover:text-black inline-block w-full p-2 hover:bg-primary/20 dark:hover:text-white duration-200'
                              href={data.link}>{data.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input type="text" placeholder='Search'
                className='search-bar' />
              <IoMdSearch
                className='
                  text-xl
                  text-gray-600
                  group-hover:text-primary
                  dark:text-gray-400
                  absolute
                  top-1/2
                  -translate-y-1/2
                  right-3
                  duration-200'
              />
            </div>
            <button className='relative p-3'>
              <FaCartShopping
                className='
                text-xl
                text-gray-600
                dark:text-gray-400'
              />
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
