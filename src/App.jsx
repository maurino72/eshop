import Banner from './components/Banner/Banner'
import Category from './components/Category/Category'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import headphone from './assets/hero/headphone.png'
import smartwatch from './assets/category/smartwatch.png'
import Products from './components/Products/Products'
import Posts from './components/Posts/Posts'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const BannerData = {
  discount: '30% OFF',
  title: 'Fine Smile',
  date: '22 Jan to 28 Jan',
  image: headphone,
  title2: 'Air Solo Bass',
  title3: 'Winter Sale',
  title4: 'Lorem ipsum, consectetur adipiscing elit sed diam nonumy',
  bgColor: 'bg-primary',
  textColor: 'text-primary'
}

const BannerData2 = {
  discount: '30% OFF',
  title: 'Happy Hours',
  date: '22 Jan to 28 Jan',
  image: smartwatch,
  title2: 'Smart Solo',
  title3: 'Winter Sale',
  title4: 'Lorem ipsum, consectetur adipiscing elit sed diam nonumy',
  bgColor: 'bg-brandGreen',
  textColor: 'text-brandGreen'
}

const App = () => {
  useEffect(() => { 
    AOS.init(
      {
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  },[]);
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-300 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Posts />
      <Partners />
      <Footer />
    </div>
  )
}

export default App