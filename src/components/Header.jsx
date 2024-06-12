import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div className='bg-black fixed z-50 w-full'>
      <div className=" mx-auto p-4 max-w-screen-xl flex flex-wrap items-center justify-between">
        <div className="">
          <img src={logo} alt="" className='w-[88px]' />
        </div>
        <div className="text-white">
          <nav className='font-normal flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black text-white text-center text-sm active:text-green-600'>
            <a href="" className='py-2 px-3 text-white hover:text-green-600 md:p-0'>Home</a>
            <a href="#service" className="block py-2 px-3 text-white hover:text-green-600 md:p-0">Services</a>
            <a href="#about" className="block py-2 px-3 text-white hover:text-green-600 md:p-0">About</a>
            <a href="#review" className="block py-2 px-3 text-white hover:text-green-600 md:p-0">Clients</a>
            <a href="#news" className="block py-2 px-3 text-white hover:text-green-600 md:p-0">News</a>
            <a href="#portfolio" className="block py-2 px-3 text-white hover:text-green-600 md:p-0">Portfolio</a>
            <a href="#pricing" className="block py-2 px-3 text-white hover:text-green-600 md:p-0">Pricing</a>
            <a href="#team" className="block py-2 px-3 text-white hover:text-green-600 md:p-0">Team</a>
            <a href="#skill" className="block py-2 px-3 text-white hover:text-green-600 md:p-0">Skills</a>
            <a href="#milestone" className="block py-2 px-3 text-white hover:text-green-600 md:p-0">Milestone</a>
            <a href="#contact" className="block py-2 px-3 text-white hover:text-green-600 md:p-0">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  )
}
export default Header