import Button from '../Shared/Button';

const ProductCard = ({ productsData }) => {
  return (
    <div className='mb-10'>
      <div className='grid grid-cols-1sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
        {
          productsData.map((product) => (
            <div
              data-aos="fade-down"
              className='group' key={product.id}>
              <div className='relative'>
                <img
                  className='h-[180px] w-[260px] object-cover rounded-md'
                  src={product.image}
                  alt=""
                />
                <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200'>
                  <Button
                    text='Orde Now'
                    bgColor='bg-primary'
                    colorText='text-white'
                  />
                </div>
              </div>
              <div className='leading-7'>
                <h1 className='font-semibold'>{ product.title }</h1>
                <p className='font-bold'>${ product.price }</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductCard