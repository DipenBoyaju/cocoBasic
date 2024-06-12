import logo from '../assets/images/footer_logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#111111] text-white text-center py-8">
        <div className="footer-logo">
          <img src={logo} alt="" className="mb-10 h-12 w-20 m-auto" />
        </div>
        <div className="h-14 w-0.5 bg-white block m-auto mb-8"></div>
        <span className="text-3xl font-bold hover:text-green-600 cursor-pointer transition-all">hello@cocobasic.com</span>
        <div className="shape">
          <div className="ver-shape h-14 w-0.5 bg-white block m-auto mt-8"></div>
          <div className="hor-shape h-0.5 w-[280px] block bg-white m-auto"></div>
        </div>
        <div className="media-icons py-8">
          <ul className="flex gap-8 justify-center text-2xl">
            <li><i className="fa-brands fa-x-twitter hover:text-green-600 cursor-pointer transition-all"></i></li>
            <li><i className="fa-brands fa-facebook-f hover:text-green-600 cursor-pointer transition-all"></i></li>
            <li><i className="fa-brands fa-behance hover:text-green-600 cursor-pointer transition-all"></i></li>
            <li><i className="fa-solid fa-basketball hover:text-green-600 cursor-pointer transition-all"></i></li>
          </ul>
        </div>
        <div className="rights">
          <p className="leading-9 pb-8 font-[600]">© 2023 Seppo HTML Template by CocoBasic</p>
        </div>
      </footer>
    </div>
  )
}
export default Footer