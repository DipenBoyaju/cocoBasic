import portfolio1 from '../assets/images/portfolio_item_01.jpg'
import portfolio2 from '../assets/images/portfolio_item_02.jpg'
import portfolio3 from '../assets/images/portfolio_item_03.jpg'
import portfolio4 from '../assets/images/portfolio_item_04.jpg'

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio" id="portfolio">
        <div
          className="main-title bg-green-600 w-[285px] h-24 flex justify-center items-center mb-8 lg:absolute lg:left-0 absolute z-20">
          <h3 className="tracking-widest text-white">PORTFOLIO</h3>
        </div>
        <div className="portfolio-list lg:grid lg:grid-cols-4">
          <div
            className="group protfolioitem hover:cursor-pointer hover:text-white hover:transition-all ease-in-out duration-500 hover:duration-500 lg:col-span-1 lg:row-span-2 ">
            <img src={portfolio1}
              className="w-full relative group-hover:brightness-0 ease-in-out duration-500 lg:grid-cols-1" alt="" />
            <div className="po-info absolute pl-12 -mt-32">
              <p>INTERIOR</p>
              <h3 className="text-3xl font-bold py-2">Living Room</h3>
            </div>
          </div>
          <div
            className="group protfolioitem hover:cursor-pointer hover:text-white hover:transition-all ease-in-out duration-500 hover:duration-500 lg:col-span-2 lg:row-span-2">
            <img src={portfolio2}
              className="w-full relative group-hover:brightness-0 ease-in-out duration-500" alt="" />
            <div className="po-info absolute pl-12 -mt-32">
              <p>FASHION</p>
              <h3 className="text-3xl font-bold py-2">Modeling</h3>
            </div>
          </div>
          <div
            className="group protfolioitem hover:cursor-pointer hover:text-white hover:transition-all ease-in-out duration-500 hover:duration-500 lg:col-span-1">
            <img src={portfolio3}
              className="w-full relative group-hover:brightness-0 ease-in-out duration-500" alt="" />
            <div className="po-info absolute pl-12 -mt-32">
              <p>CREATIVE</p>
              <h3 className="text-3xl font-bold py-2">Psd Mockup</h3>
            </div>
          </div>
          <div
            className="group protfolioitem hover:cursor-pointer hover:text-white hover:transition-all ease-in-out duration-500 hover:duration-500">
            <img src={portfolio4}
              className="w-full relative group-hover:brightness-0 ease-in-out duration-500" alt="" />
            <div className="po-info absolute pl-12 -mt-32">
              <p>ARCHITECTURE</p>
              <h3 className="text-3xl font-bold py-2">Pillars</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Portfolio