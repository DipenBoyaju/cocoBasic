const Skills = () => {
  return (
    <div>
      <div className="skill lg:container lg:mx-auto lg:px-4" id="skill">
        <div className="main-title bg-green-600 w-[285px] h-24 flex justify-center items-center mb-8 lg:absolute lg:left-0">
          <h3 className="tracking-widest text-white">SKILLS</h3>
        </div>
        <div className="contact-details text-center px-5 lg:flex lg:flex-row lg:justify-between lg:gap-10 lg:pt-36 lg:py-20">
          <div className="skill-info lg:text-left lg:w-1/2">
            <div className="title">
              <span className="text-[#b3b3b3] text-[16px] tracking-widest ">OUR NUMBERS</span>
              <h2 className="text-[44px] font-bold pt-2 leading-10 lg:text-6xl lg:leading-tight lg:mt-6">Check our <br />
                Skills
              </h2>
            </div>
            <p className="text-[#b3b3b3] text-[19px] leading-9 font-normal py-8">
              Code the energy hidden in matter citizens of distant epochs from which we spring drake equation perga
              inconspicuous motespatch clean designed code and energy matter. </p>
            <a href="#portfolio"
              className="bg-green-600 text-white p-5 px-12 text-sm tracking-wider rounded-full hover:cursor my-6 hover:bg-transparent transition-all hover:border-2 hover: border-green-600 hover:text-green-600 duration-300">LEARN
              MORE</a>
          </div>
          <div className="skill-case py-16 lg:w-1/2">
            <div
              className="skillset text-[#b3b3b3] text-center pt-8 lg:flex lg:flex-row lg:justify-start lg:gap-10 lg:text-left">
              <h4 className="text-5xl lg:w-[20%]">75%</h4>
              <div className="skill-sets lg:w-full ">
                <span className="text-xl">Creativity</span>
                <div className="line bg-black h-3 w-[75%] mt-3 lg:mt-1 lg:h-2"></div>
              </div>
            </div>
            <div
              className="skillset text-[#b3b3b3] text-center pt-8 lg:flex lg:flex-row lg:justify-start lg:gap-10 lg:text-left">
              <h4 className="text-5xl lg:w-[20%]">45%</h4>
              <div className="skill-sets lg:w-full">
                <span className="text-xl">Cooking</span>
                <div className="line bg-black h-3 w-[45%] mt-3 lg:mt-1 lg:h-2"></div>
              </div>
            </div>
            <div
              className="skillset text-[#b3b3b3] text-center pt-8 lg:flex lg:flex-row lg:justify-start lg:gap-10 lg:text-left">
              <h4 className="text-5xl lg:w-[20%]">90%</h4>
              <div className="skill-sets lg:w-full">
                <span className="text-xl">PhP</span>
                <div className="line bg-black h-3 w-[90%] mt-3 lg:mt-1 lg:h-2"></div>
              </div>
            </div>
            <div
              className="skillset text-[#b3b3b3] text-center pt-8 lg:flex lg:flex-row lg:justify-start lg:gap-10 lg:text-left">
              <h4 className="text-5xl lg:w-[20%]">65%</h4>
              <div className="skill-sets lg:w-full">
                <span className="text-xl">Marketing</span>
                <div className="line bg-black h-3 w-[65%] mt-3 lg:mt-1 lg:h-2"></div>
              </div>
            </div>
            <div
              className="skillset text-[#b3b3b3] text-center pt-8 lg:flex lg:flex-row lg:justify-start lg:gap-10 lg:text-left">
              <h4 className="text-5xl lg:w-[20%]">85%</h4>
              <div className="skill-sets lg:w-full">
                <span className="text-xl">Design</span>
                <div className="line bg-black h-3 w-[85%] mt-3 lg:mt-1 lg:h-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills