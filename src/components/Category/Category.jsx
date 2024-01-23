import Image1 from '../../assets/category/earphone.png';
import Image2 from '../../assets/category/watch.png';
import Image3 from '../../assets/category/macbook.png';
import Image4 from '../../assets/category/gaming.png';
import Image5 from '../../assets/category/vr.png';
import Image6 from '../../assets/category/speaker.png';
import Button from '../Shared/Button';

const Category = () => {
  return (
    <>
      {/* First Row */}
      <div className='py-8'>
        <div className='container'>
          <div className="grid grd-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* First Col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>
                  Enjoy
                </p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                <Button
                  text='Browse'
                  bgColor={'bg-primary'}
                  textColor={'text-white'}
                />
              </div>
              <img
                className='w-[320px] absolute bottom-0'
                src={Image1}
                alt=""
              />
            </div>
            {/* Second Col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end'>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>
                  Enjoy
                </p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Gadget</p>
                <Button
                  text='Browse'
                  bgColor={'bg-white'}
                  textColor={'text-brandYellow'}
                />
              </div>
              <img
                className='w-[320px] absolute -right-4 lg:top-[40px]'
                src={Image2}
                alt=""
              />
            </div>
            {/* Thrid Col */}
            <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/70 text-white rounded-3xl relative h-[320px] flex items-end'>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>
                  Enjoy
                </p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Laptops</p>
                <Button
                  text='Browse'
                  bgColor={'bg-white'}
                  textColor={'text-primary'}
                />
              </div>
              <img
                className='w-[300px] absolute top-1/2 -translate-y-1/2 -right-0'
                src={Image3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Second Row */}
      <div className='py-8'>
        <div className='container'>
          <div className="grid grd-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* First Col */}
            <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>
                  Enjoy
                </p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Gaming</p>
                <Button
                  text='Browse'
                  bgColor={'bg-primary'}
                  textColor={'text-white'}
                />
              </div>
              <img
                className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0'
                src={Image4}
                alt=""
              />
            </div>
            {/* Second Col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-start'>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>
                  Enjoy
                </p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Gadget</p>
                <Button
                  text='Browse'
                  bgColor={'bg-white'}
                  textColor={'text-brandYellow'}
                />
              </div>
              <img
                className='w-[320px] absolute bottom-0'
                src={Image5}
                alt=""
              />
            </div>
            {/* Thrid Col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-start'>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>
                  Enjoy
                </p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Music</p>
                <Button
                  text='Browse'
                  bgColor={'bg-primary'}
                  textColor={'text-white'}
                />
              </div>
              <img
                className='w-[320px] absolute bottom-0 right-0'
                src={Image6}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category