import brandLogo from '../assets/logo.png'

function Brand () {
  return(
    <>
      <div className="flex items-center justify-left  hover:opacity-85 cursor-pointer rounded-md p-2 ease-in-out duration-300 active:scale-95 ml-0 shadow-lg">
        <img src={brandLogo} className='w-25 sm:w-30 transition-' />
        <h1 className='text-center outfit text-3xl text-white  -ml-1 sm:text-4xl'>Estate</h1>
      </div>
    </>
  )
}

export default Brand