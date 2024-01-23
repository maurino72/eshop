import {FaLocationArrow, FaMobileAlt, FaGithub, FaLinkedin} from 'react-icons/fa';

const footerLinks = [
  {
    id: 1,
    name: 'Home',
    link: '#'
  },
  {
    id: 2,
    name: 'About',
    link: '#about'
  },
  {
    id: 3,
    name: 'Contact',
    link: '#contact'
  },
  {
    id: 4,
    name: 'Blog',
    link: '#blog'
  }
]

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className='container'>
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          <div className='py-8 px-4'>
            <a
              href="#"
              className='text-primary font-bold tracking-widest text-2xl sm:text-3xl uppercase'>
              Eshop
            </a>
            <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className='text-gray-600 mt-4'>
              Project copied from 
              <a
                className='text-white dark:text-white/70 bg-primary p-2 rounded-full'
                href='https://youtu.be/4sc6BhgS_Co?si=ksgMIFDmZjMyvSTL' target='_blank' rel='noopener'>here</a>
            </p>
          </div>
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-semibold sm:text-left mb-3'>Important Links</h1>
              <ul className='space-y-3'>
                {
                  footerLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'
                        href={link.link}>{link.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Links</h1>
              <ul className='space-y-3'>
                {
                  footerLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'
                        href={link.link}>{link.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className='py-8 px-4 col-span-2 sm:col-auto'>
              <h1 className='text-xl font-semibold sm:text-left mb-3'>Address</h1>
              <div className='space-y-3'>
                <div className="flex items-center gap-3">
                  <FaLocationArrow className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-xl' />
                  <p className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm'>Córdoba, Argentina</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-xl' />
                  <p className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm'>+54 9 3463406211</p>
                </div>

                <div className='flex items-center gap-2 mt-2'>
                  <a href="https://github.com/maurino72">
                    <FaGithub className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-xl'/>
                  </a>
                  <a href="https://www.linkedin.com/in/bruno-maurino-40129b5a/">
                    <FaLinkedin className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-xl'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer