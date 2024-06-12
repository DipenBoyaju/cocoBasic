import quote1 from '../assets/images/quote_image_01.jpg'
import quote2 from '../assets/images/quote_image_02.jpg'
import quote3 from '../assets/images/quote_image_03.jpg'
import quote4 from '../assets/images/quote_image_04.jpg'
import quote from '../assets/images/quotes_image.png'

const Review = () => {
  return (
    <div>
      <div className="review bg-no-repeat bg-cover" style={{ backgroundImage: `url(${quote1})` }}
        id="review">
        <div id="carouselExampleCrossfade" className="relative py-16 px-4 lg:px-16" data-te-carousel-init
          data-te-ride="carousel">
          {/* <!--Carousel items--> */}
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] bg-black">
            <div
              className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none bg-black"
              data-te-carousel-fade data-te-carousel-item data-te-carousel-active>
              <div className="review-item w-full bg-black block review-item p-16 lg:p-32">
                <img src={quote1} alt="" className="w-24 pb-16" />
                <p className="text-[#b3b3b3] text-xl h-44 lg:text-3xl lg:h-56">
                  Vivamus quis ante varius, pretium lectus ut, tempor eros maecenas vitae purus lobortis, pulvinar lorem
                  eu,
                  porta elit suspendisse blandit porta magna, nec scelerisque urna viverra lorem gravida.
                </p>
                <div className="reviewer lg:flex lg:justify-start lg:gap-10 lg:items-center text-white">
                  <div className="re-img py-2">
                    <img src={quote2} alt="" className="rounded-full" />
                  </div>
                  <h4 className="align-middle text-xl font-normal">Peter Hall</h4>
                  <p className="tracking-widest font-semibold">CEO</p>
                </div>
              </div>
            </div>
            <div
              className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none bg-black"
              data-te-carousel-fade data-te-carousel-item>
              <div className="review-item w-full bg-black block review-item p-16 lg:p-32">
                <img src={quote} alt="" className="w-24 pb-16" />
                <p className="text-[#b3b3b3] text-xl h-44 lg:text-3xl lg:h-56">
                  Curabitur cursus mattis ligula a maximus pellentesque in purus malesuada, pharetra eros id, malesuada
                  diam vivamus eu gravida lacus nulla at consectetur quam vestibulum ac arcu sed.
                </p>
                <div className="reviewer lg:flex lg:justify-start lg:gap-10 lg:items-center text-white">
                  <div className="re-img py-2">
                    <img src={quote3} alt="" className="rounded-full" />
                  </div>
                  <h4 className="align-middle text-xl font-normal">Jane Williams</h4>
                  <p className="tracking-widest font-semibold">DESIGNER</p>
                </div>
              </div>
            </div>
            <div
              className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none bg-black"
              data-te-carousel-fade data-te-carousel-item>
              <div className="review-item w-full bg-black block review-item p-16 lg:p-32">
                <img src={quote} alt="" className="w-24 pb-16" />
                <p className="text-[#b3b3b3] text-xl h-44 lg:text-3xl lg:h-56">
                  Vivamus quis ante varius, pretium lectus ut, tempor eros maecenas vitae purus lobortis, pulvinar lorem
                  eu, porta elit suspendisse blandit porta magna, nec scelerisque urna viverra lorem gravida.
                </p>
                <div className="reviewer lg:flex lg:justify-start lg:gap-10 lg:items-center text-white">
                  <div className="re-img py-2">
                    <img src={quote4} alt="" className="rounded-full" />
                  </div>
                  <h4 className="align-middle text-xl font-normal">John Smith</h4>
                  <p className="tracking-widest font-semibold">GURU</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Carousel controls - prev item--> */}
          <button
            className="absolute bottom-32 lg:bottom-56 lg:right-44 right-12 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none text-3xl"
            type="button" data-te-target="#carouselExampleCrossfade" data-te-slide="prev">
            <span className="inline-block">
              <i className="fa-solid fa-arrow-left"></i>
            </span>
          </button>
          {/* <!--Carousel controls - next item--> */}
          <button
            className="absolute bottom-32 lg:bottom-56 lg:right-32 right-2 z-[1] flex w-[15%] justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none text-3xl "
            type="button" data-te-target="#carouselExampleCrossfade" data-te-slide="next">
            <span className="inline-block">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Review