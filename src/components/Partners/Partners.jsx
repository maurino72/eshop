import Img1 from '../../assets/brand/br-1.png';
import Img2 from '../../assets/brand/br-2.png';
import Img3 from '../../assets/brand/br-3.png';
import Img4 from '../../assets/brand/br-4.png';
import Img5 from '../../assets/brand/br-5.png';

const partnersData = [
  {
    id: 1,
    image: Img1
  },
  {
    id: 2,
    image: Img2
  },
  {
    id: 3,
    image: Img3
  },
  {
    id: 4,
    image: Img4
  },
  {
    id: 5,
    image: Img5
  }
]

const Partners = () => {
  return (
    <div className='my-12 hidden md:block bg-gray-200 dark:bg-white/10'>
      <div className="container py-2">
        <div className='flex justify-between items-center'>
          {
            partnersData.map((partner) => (
              <div key={partner.id}>
                <img
                  className='w-[80px] dark:invert'
                  src={partner.image}
                  alt="brand" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Partners