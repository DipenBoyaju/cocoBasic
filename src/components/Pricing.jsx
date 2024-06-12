import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <div>
      <div className="pricing lg:container lg:mx-auto lg:px-4" id="pricing">
        <div className="main-title bg-green-600 w-[285px] h-24 flex justify-center items-center mb-8 lg:absolute lg:left-0">
          <h3 className="tracking-widest text-white">PRICING</h3>
        </div>
        <div className="pricing-list px-5 lg:flex lg:flex-row lg:justify-between gap-10 py-20">
          <div className="pricing-item border-2 border-black w-3/5 p-8 mx-auto my-24">
            <span
              className="text-[200px] font-bold text-white absolute right-32 -mt-24 bg-white leading-none pl-12 w-[162px] text-center lg:left-[22%]"
              style={{ textShadow: '-1px 0 #b3b3b3, 0 1px #b3b3b3, 1px 0 #b3b3b3, 0 -1px #b3b3b3' }}>1</span>
            <p className="text-xl py-2">BASIC</p>
            <h2 className="text-8xl font-bold text-green-600 pt-20">$25</h2>
            <p className="text-[#b3b3b3] pt-4">PER MONTH</p>
            <ul className="py-8">
              <li className="text-lg py-3 flex items-center gap-4"><TiTick className="text-green-600" />Unlimited Support</li>
              <li className="text-lg py-3 flex items-center gap-4"><TiTick className="text-green-600" />5GB Server Space </li>
              <li className="text-lg py-3 flex items-center gap-4"><TiTick className="text-green-600" /> Users per Project</li>
              <li className="text-lg py-3 text-gray-500 flex items-center gap-4"><RxCross1 className=" text-zinc-600" />Email Integration
              </li>
              <li className="text-lg py-3 text-gray-500 flex items-center gap-4"><RxCross1 className=" text-zinc-600" />Unlimited Download
              </li>
            </ul>
            <div className="text-center py-4">
              <a href="#"
                className="bg-green-600 text-white p-5 px-12 text-sm tracking-wider rounded-full hover:cursor my-6 hover:bg-transparent transition-all hover:border-2 hover: border-green-600 hover:text-green-600 duration-300">CHOOSE
                PLAN</a>
            </div>
          </div>
          <div className="pricing-item border-2 border-black p-8 w-3/5 mx-auto my-24">
            <span
              className="text-[200px] font-bold text-white absolute right-32 -mt-24 bg-white leading-none pl-12 w-[162px] text-center lg:left-[52%]"
              style={{ textShadow: '-1px 0 #b3b3b3, 0 1px #b3b3b3, 1px 0 #b3b3b3, 0 -1px #b3b3b3' }}>2</span>
            <p className="text-xl py-2">ADVANCED</p>
            <h2 className="text-8xl font-bold text-green-600 pt-20">$50</h2>
            <p className="text-[#b3b3b3] pt-4">PER MONTH</p>
            <ul className="py-8">
              <li className="text-lg py-3 flex items-center gap-4"><TiTick className="text-green-600" />Unlimited Support</li>
              <li className="text-lg py-3 flex items-center gap-4"><TiTick className="text-green-600" />5GB Server Space </li>
              <li className="text-lg py-3 flex items-center gap-4"><TiTick className="text-green-600" />2 Users per Project</li>
              <li className="text-lg py-3 flex items-center gap-4"><TiTick className="text-green-600" />Email Integration
              </li>
              <li className="text-lg py-3 flex items-center gap-4 text-gray-500"><RxCross1 className=" text-zinc-600" />Unlimited Download
              </li>
            </ul>
            <div className="text-center py-4">
              <a href="#"
                className="bg-green-600 text-white p-5 px-12 text-sm tracking-wider rounded-full hover:cursor my-6 hover:bg-transparent transition-all hover:border-2 hover: border-green-600 hover:text-green-600 duration-300">CHOOSE
                PLAN</a>
            </div>
          </div>
          <div className="pricing-item border-2 border-black p-8 w-3/5 mx-auto my-24">
            <span
              className="text-[200px] font-bold text-white absolute right-32 -mt-24 bg-white leading-none pl-12 w-[162px] text-center lg:pl-0 lg:-mr-20"
              style={{ textShadow: '-1px 0 #b3b3b3, 0 1px #b3b3b3, 1px 0 #b3b3b3, 0 -1px #b3b3b3' }}>3</span>
            <p className="text-xl py-2">EXPERT</p>
            <h2 className="text-8xl font-bold text-green-600 pt-20">$75</h2>
            <p className="text-[#b3b3b3] pt-4">PER MONTH</p>
            <ul className="py-8">
              <li className="text-lg py-3 flex items-center gap-4"><TiTick className="text-green-600" />Unlimited Support</li>
              <li className="text-lg py-3 flex items-center gap-4"><TiTick className="text-green-600" />5GB Server Space </li>
              <li className="text-lg py-3 flex items-center gap-4"><TiTick className="text-green-600" />2 Users per Project</li>
              <li className="text-lg py-3 flex items-center gap-4"><TiTick className="text-green-600" />Email Integration
              </li>
              <li className="text-lg py-3 flex items-center gap-4"><TiTick className="text-green-600" />Unlimited Download
              </li>
            </ul>
            <div className="text-center py-4">
              <a href="#"
                className="bg-green-600 text-white p-5 px-12 text-sm tracking-wider rounded-full hover:cursor my-6 hover:bg-transparent transition-all hover:border-2 hover: border-green-600 hover:text-green-600 duration-300">CHOOSE
                PLAN</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Pricing