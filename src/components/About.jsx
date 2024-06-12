import aboutimg from '../assets/images/about_01.jpg'

const About = () => {
  return (
    <div>
      <div className="about lg:container lg:mx-auto lg:px-4" id="about">
        <div className="main-title bg-green-600 w-[285px] h-24 flex justify-center items-center mb-8 lg:absolute lg:left-0">
          <h3 className="tracking-widest text-white">ABOUT</h3>
        </div>
        <div className="about-details text-center px-5 lg:flex lg:flex-row lg:justify-between lg:gap-10 lg:pt-36 lg:py-20">
          <div className="about-info lg:text-left lg:w-1/2">
            <div className="title">
              <span className="text-[#b3b3b3] text-[16px] tracking-widest ">WHO WE ARE </span>
              <h2 className="text-[44px] font-bold pt-2 leading-10 lg:text-6xl lg:leading-tight lg:mt-6">Live up to <br />
                your creative potential.
              </h2>
            </div>
            <p className="text-[#b3b3b3] text-[19px] leading-9 font-normal py-8">Code the energy hidden in
              matter
              citizens of
              distant epochs from which we spring drake equation perga inconspicuous motespatch clean designed code and
              energy matter. </p>
            <a href="#portfolio"
              className="bg-green-600 text-white p-5 px-12 text-sm tracking-wider rounded-full hover:cursor my-6 hover:bg-transparent transition-all hover:border-2 hover: border-green-600 hover:text-green-600 duration-300">LEARN
              MORE</a>
          </div>
          <div className="about-img mx-auto py-16 lg:w-1/2">
            <img src={aboutimg} alt="" className='mx-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default About