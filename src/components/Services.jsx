const Services = () => {
  return (
    <div>
      <div className="services bg-black" id="service">
        <div
          className="main-title bg-green-600 w-[285px] h-24 flex justify-center items-center mb-8 lg:absolute lg:left-0 z-10">
          <h3 className="tracking-widest text-white">SERVICES</h3>
        </div>
        <div className="lg:container lg:mx-auto lg:px-4">
          <div
            className="service-list text-center lg:px-5 lg:flex lg:flex-row lg:justify-between lg:gap-10 lg:text-left lg:py-20">
            <div className="service-item">
              <p className="text-[264px] font-bold text-black h-[230px] overflow-hidden -mb-3"
                style={{ textShadow: '-1px 0 #b3b3b3, 0 1px #b3b3b3, 1px 0 #b3b3b3, 0 -1px #b3b3b3' }}>1</p>
              <h2 className="text-5xl font-bold mt-6 text-white">
                Preciese</h2>
              <p className="text-[#b3b3b3] text-[19px] leading-9 font-normal py-8 w-2/4 m-auto lg:w-auto">Curabitur cursus
                mattis
                ligula a
                maximus
                pellentesque in purus malesuada pharetra eros. </p>
              <div className="btn">
                <a href="#portfolio" className="justify-start inline-block content-start relative"><span
                  className="h-8 w-8 border-2 border-white bg-transparent block align-middle rounded-full transition-all ease-in-out duration-500 hover:h-12 hover:w-36 after:content-['MORE'] after:text-white after:pl-10 absolute -top-12 hover:after:pl-0 hover:after:transition-all hover:after:duration-500 after:-mb-10 -ml-10 mt-12 lg:ml-0 lg:hover:after:pl-14 after:absolute hover:after:pt-2"></span></a>
              </div>
            </div>
            <div className="service-item">
              <p className="text-[264px] font-bold text-black h-[230px] overflow-hidden -mb-3"
                style={{ textShadow: '-1px 0 #b3b3b3, 0 1px #b3b3b3, 1px 0 #b3b3b3, 0 -1px #b3b3b3' }}>2</p>
              <h2 className="text-5xl font-bold mt-6 text-white">Support</h2>
              <p className="text-[#b3b3b3] text-[19px] leading-9 font-normal py-8 w-2/4 m-auto lg:w-auto">Est sem integer
                suscipit enim
                quis dictum feugiat etiam pellentesque curabitur donec porttitor. </p>
              <div className="btn">
                <a href="#news" className="justify-start inline-block content-start relative"><span
                  className="h-8 w-8 border-2 border-white bg-transparent block align-middle rounded-full transition-all ease-in-out duration-500 hover:h-12 hover:w-36 after:content-['MORE'] after:text-white after:pl-10 absolute -top-12 hover:after:pl-2 hover:after:transition-all hover:after:duration-500 after:-mb-10 -ml-10 mt-12 lg:ml-0 lg:hover:after:pl-14 after:absolute hover:after:pt-2"></span></a>
              </div>
            </div>
            <div className="service-item">
              <p className="text-[264px] font-bold text-black h-[230px] overflow-hidden -mb-3"
                style={{ textShadow: '-1px 0 #b3b3b3, 0 1px #b3b3b3, 1px 0 #b3b3b3, 0 -1px #b3b3b3' }}>3</p>
              <h2 className="text-5xl font-bold mt-6 text-white">Responsive</h2>
              <p className="text-[#b3b3b3] text-[19px] leading-9 font-normal py-8 w-2/4 m-auto lg:w-auto">Donec vel est sem
                integer
                suscipit enim quis lorem posuere vestibulum metus tempor vitae. </p>
              <div className="btn pb-24">
                <a href="#contact" className="justify-start inline-block align-middle relative"><span
                  className="h-8 w-8 border-2 border-white bg-transparent block rounded-full transition-all ease-in-out duration-500 hover:h-12 hover:w-36 after:content-['MORE'] after:text-white after:pl-10 absolute -top-12 hover:after:pl-0 hover:after:transition-all hover:after:duration-500 -ml-10 mt-12 lg:ml-0 lg:hover:after:pl-14 after:absolute hover:after:pt-2"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services