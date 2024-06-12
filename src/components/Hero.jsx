import heroimg from '../assets/images/hero_image_01.jpg'

const Hero = () => {
  return (
    <div>
      <div
        className="banner bg-no-repeat bg-cover h-dvh w-full text-center justify-between items-center bg-center lg:text-left lg:py-40"
        style={{ backgroundImage: `url(${heroimg})` }} id="home">
        <div
          className="banner-info lg:container lg:mx-auto lg:px-6 flex flex-col justify-center items-center gap-4 lg:items-start ">
          <h1
            className="text-6xl text-center mx-auto leading-[4.5rem] lg:text-7xl font-bold lg:leading-[5.5rem] text-white pb-20 lg:pb-10 py-56 lg:py-20">
            Technology<br />
            & Visual Agency</h1>
          <div className="mx-auto">
            <a href="#portfolio"
              className="bg-green-700 text-white p-5 px-12 text-sm tracking-wider rounded-full hover:cursor my-6 hover:bg-transparent transition-all hover:border-2 hover: border-green-600 hover:text-green-600 duration-300">LEARN
              MORE</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero