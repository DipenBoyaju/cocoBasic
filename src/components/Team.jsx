import team1 from '../assets/images/about_item_01.jpg'
import team2 from '../assets/images/about_item_02.jpg'
import team3 from '../assets/images/about_item_03.jpg'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Team = () => {
  return (
    <div>
      <div className="team  bg-black" id="team">
        <div className="main-title bg-green-600 w-[285px] h-24 flex justify-center items-center mb-8 lg:absolute lg:left-0">
          <h3 className="tracking-widest text-white">TEAM</h3>
        </div>
        <div
          className="member-details px-5 lg:flex lg:flex-row lg:justify-between lg:gap-10 lg:pt-36 lg:py-20 lg:container lg:mx-auto lg:px-4">
          <div className="member lg:text-left py-10">
            <img src={team1} alt="" className="w-full" />
            <div className="info bg-white p-16">
              <p className="text-[#b3b3b3] text-sm">CEO</p>
              <h3 className="font-bold text-4xl py-2">Marty Stone</h3>
              <p className="text-[#b3b3b3] text-[16px] leading-7 font-normal py-8">Code the energy hidden in matter citizens
                of distant epochs sun. Citizens of distant epochs encyclopaedia
                galant ctica the ash of stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim ipsam volupta tem
                quia voluptas sit aspernatur aut odit aut fugit radio telescope quis nostrum exercitatio nem ullam
                corporis suscipit laboriosam quis. </p>
            </div>
            <div className="media bg-green-700 text-white py-6">
              <ul className="flex gap-8 justify-center text-2xl">
                <li>
                  <BsTwitterX className='hover:text-gray-400 cursor-pointer transition-all' />
                </li>
                <li>
                  <FaFacebookF className='hover:text-gray-400 cursor-pointer transition-all' />
                </li>
                <li>
                  <FaBehance className='hover:text-gray-400 cursor-pointer transition-all' />
                </li>
                <li>
                  <FaDribbble className='hover:text-gray-400 cursor-pointer transition-all' />
                </li>
              </ul>
            </div>
          </div>
          <div className="member lg:text-left py-10">
            <img src={team2} alt="" className="w-full" />
            <div className="info bg-white p-16">
              <p className="text-[#b3b3b3] text-sm">DESIGNER</p>
              <h3 className="font-bold text-4xl py-2">John Williams</h3>
              <p className="text-[#b3b3b3] text-[16px] leading-7 font-normal py-8">Code the energy hidden in matter citizens
                of distant epochs sun. Citizens of distant epochs encyclopaedia
                galant ctica the ash of stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim ipsam volupta tem
                quia voluptas sit aspernatur aut odit aut fugit radio telescope quis nostrum exercitatio nem ullam
                corporis suscipit laboriosam quis. </p>
            </div>
            <div className="media bg-green-600 text-white py-6">
              <ul className="flex gap-8 justify-center text-2xl">
                <li>
                  <BsTwitterX className='hover:text-gray-400 cursor-pointer transition-all' />
                </li>
                <li>
                  <FaFacebookF className='hover:text-gray-400 cursor-pointer transition-all' />
                </li>
                <li>
                  <FaBehance className='hover:text-gray-400 cursor-pointer transition-all' />
                </li>
                <li>
                  <FaDribbble className='hover:text-gray-400 cursor-pointer transition-all' />
                </li>
              </ul>
            </div>
          </div>
          <div className="member lg:text-left py-10">
            <img src={team3} alt="" className="w-full" />
            <div className="info bg-white p-16">
              <p className="text-[#b3b3b3] text-sm">DEVELOPER</p>
              <h3 className="font-bold text-4xl py-2">Vanessa Doe</h3>
              <p className="text-[#b3b3b3] text-[16px] leading-7 font-normal py-8">Code the energy hidden in matter citizens
                of distant epochs sun. Citizens of distant epochs encyclopaedia
                galant ctica the ash of stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim ipsam volupta tem
                quia voluptas sit aspernatur aut odit aut fugit radio telescope quis nostrum exercitatio nem ullam
                corporis suscipit laboriosam quis. </p>
            </div>
            <div className="media bg-green-600 text-white py-6">
              <ul className="flex gap-8 justify-center text-2xl">
                <li><BsTwitterX className='hover:text-gray-400 cursor-pointer transition-all' /></li>
                <li>
                  <FaFacebookF className='hover:text-gray-400 cursor-pointer transition-all' />
                </li>
                <li>
                  <FaBehance className='hover:text-gray-400 cursor-pointer transition-all' />
                </li>
                <li>
                  <FaDribbble className='hover:text-gray-400 cursor-pointer transition-all' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Team