import black from '../assets/images/on_black_left.png'

const Milestone = () => {
  return (
    <div>
      <div className="milestones bg-black text-white text-center lg:text-left lg:relative lg:z-0" id="milestone">
        <div className="container lg:mx-auto lg:px-4">
          <div className="main-title bg-green-600 w-[285px] h-24 flex justify-center items-center mb-8 lg:absolute lg:left-0">
            <h3 className="tracking-widest text-white">MILESTONES</h3>
          </div>
          <div
            className="miles py-32 lg:container lg:mx-auto lg:px-4 lg:flex lg:flex-row lg:flex-wrap lg:pt-12 lg:text-left lg:py-32">
            <div className="cardt py-6 lg:w-1/2 lg:flex lg:justify-between lg:gap-6 lg:align-text-top lg:pl-10">
              <span className="text-7xl font-bold text-black"
                style={{ textShadow: '-1px 0 #b3b3b3, 0 1px #b3b3b3, 1px 0 #b3b3b3, 0 -1px #b3b3b3' }}>135</span>
              <div className="mil-info">
                <h4 className="text-3xl font-bold py-6">Terabytes of files <br /> uploaded</h4>
                <p className="leading-9 text-lg font-normal px-36 text-[#b3b3b3] lg:pl-0 lg:pr-16">Nulla ac laoreet est, a
                  mollis
                  nibh. Aenean eget
                  auctor velit quis pharetra. </p>
              </div>
            </div>
            <div className="cardt py-6 lg:w-1/2 lg:flex lg:justify-between lg:gap-6 lg:align-text-top lg:pl-8">
              <span className="text-7xl font-bold text-black"
                style={{ textShadow: '-1px 0 #b3b3b3, 0 1px #b3b3b3, 1px 0 #b3b3b3, 0 -1px #b3b3b3' }}>67K</span>
              <div className="mil-info">
                <h4 className="text-3xl font-bold py-6">Lines of CSS code wrote</h4>
                <p className="leading-9 text-lg font-normal px-36 text-[#b3b3b3] lg:pl-0 lg:pr-16">Nulla ac laoreet est, a
                  mollis
                  nibh. Aenean eget
                  auctor velit quis pharetra. </p>
              </div>
            </div>
            <div className="cardt py-6 lg:w-1/2 lg:flex lg:justify-between lg:gap-6 lg:align-text-top lg:pl-20">
              <span className="text-7xl font-bold text-black"
                style={{ textShadow: '-1px 0 #b3b3b3, 0 1px #b3b3b3, 1px 0 #b3b3b3, 0 -1px #b3b3b3' }}>74</span>
              <div className="mil-info">
                <h4 className="text-3xl font-bold py-6">Cups of coffee drinked <br /> per week</h4>
                <p className="leading-9 text-lg font-normal px-36 text-[#b3b3b3] lg:pl-0 lg:pr-16">Nulla ac laoreet est, a
                  mollis
                  nibh. Aenean eget
                  auctor velit quis pharetra.</p>
              </div>
            </div>
            <div className="cardt py-6 lg:w-1/2 lg:flex lg:justify-between lg:gap-6 lg:align-text-top lg:pl-8">
              <span className="text-7xl font-bold text-black"
                style={{ textShadow: '-1px 0 #b3b3b3, 0 1px #b3b3b3, 1px 0 #b3b3b3, 0 -1px #b3b3b3' }}>389</span>
              <div className="mil-info">
                <h4 className="text-3xl font-bold py-6">Happy clients served <br /> this year</h4>
                <p className="leading-9 text-lg font-normal px-36 text-[#b3b3b3] lg:pl-0 lg:pr-16">Nulla ac laoreet est, a
                  mollis
                  nibh. Aenean eget
                  auctor velit quis pharetra.</p>
              </div>
            </div>
          </div>
        </div>
        <img src={black} alt="" className="lg:absolute lg:z-10 lg:bottom-0 lg:left-0 sm:hidden" />
      </div>
    </div>
  )
}
export default Milestone