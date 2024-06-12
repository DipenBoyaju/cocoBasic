import blog1 from '../assets/images/blog_img_01.jpg'
import blog2 from '../assets/images/blog_img_02.jpg'
import blog3 from '../assets/images/blog_img_03.jpg'

const News = () => {
  return (
    <div>
      <div className="news lg:container lg:mx-auto lg:px-4" id="news">
        <div className="main-title bg-green-600 w-[285px] h-24 flex justify-center items-center mb-8 lg:absolute lg:left-0">
          <h3 className="tracking-widest text-white">NEWS</h3>
        </div>
        <div className="news-list px-5 lg:flex lg:flex-row lg:justify-between gap-10 py-20 flex flex-col lg:py-36">
          <div className="news-item text-center w-2/3 mx-auto">
            <div className="item-img h-[300px] overflow-hidden flex justify-center items-center py-12">
              <img src={blog1} alt=""
                className="max-w-full h-auto hover:opacity-80 hover:scale-110 hover:transition ease-in-out hover:duration-500 duration-500 hover:cursor-pointer" />
            </div>
            <h3 className="text-3xl font-bold pt-10">How to write rogue mote <br />of dust love </h3>
            <p className="text-[#b3b3b3] text-[19px] leading-9 font-normal py-8">
              Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm
              of global death ... </p>
          </div>

          <div className="news-item text-center w-2/3 mx-auto">
            <div className="item-img h-[300px] overflow-hidden flex justify-center items-center py-12">
              <img src={blog2} alt=""
                className="max-w-full h-auto hover:opacity-80 hover:scale-110 hover:transition ease-in-out hover:duration-500 duration-500 hover: cursor-pointer" />
            </div>
            <h3 className="text-3xl font-bold pt-10">How to write rogue mote <br />of dust love </h3>
            <p className="text-[#b3b3b3] text-[19px] leading-9 font-normal py-8">
              Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm
              of global death ... </p>
          </div>

          <div className="news-item text-center w-2/3 mx-auto">
            <div className="item-img h-[300px] overflow-hidden flex justify-center items-center py-12">
              <img src={blog3} alt=""
                className="max-w-full h-auto hover:opacity-80 hover:scale-110 hover:transition ease-in-out hover:duration-500 duration-500 hover: cursor-pointer" />
            </div>
            <h3 className="text-3xl font-bold pt-10">How to write rogue mote <br />of dust love </h3>
            <p className="text-[#b3b3b3] text-[19px] leading-9 font-normal py-8">
              Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm
              of global death ... </p>
          </div>
        </div>
        <div className="btn text-center mb-20">
          <a href="#"
            className="bg-green-600 text-white p-5 px-12 text-sm tracking-wider rounded-full hover:cursor my-6 hover:bg-transparent transition-all hover:border-2 hover: border-green-600 hover:text-green-600 duration-300">GO
            TO BLOG</a>
        </div>
      </div>
    </div>
  )
}
export default News