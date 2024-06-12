const Contact = () => {
  return (
    <div>
      <div className="contact lg:container lg:mx-auto lg:px-4" id="contact">
        <div className="main-title bg-green-600 w-[285px] h-24 flex justify-center items-center mb-8 lg:absolute lg:left-0">
          <h3 className="tracking-widest text-white">CONTACT</h3>
        </div>
        <div className="contact-details text-center px-5 lg:flex lg:gap-10 lg:pt-36">
          <div className="contact-info lg:text-left">
            <div className="title">
              <span className="text-[#b3b3b3] text-[16px] tracking-widest ">CONTACT US</span>
              <h2 className="text-[44px] font-bold pt-2 leading-10 lg:text-6xl lg:leading-tight lg:mt-6">Lets start <br />
                Working
              </h2>
            </div>
            <p className="text-[#b3b3b3] text-[19px] leading-9 font-normal py-7">
              Because they are hard, because that goal will serve to
              organize and measure the best of our energies and skills, because that challenge is one that we are willing
              to
              accept one we are. </p>
            <div className="media">
              <ul className="flex gap-5 justify-center text-2xl py-6 lg:justify-start">
                <li><i className="fa-brands fa-facebook-f hover:text-gray-400 cursor-pointer transition-all"></i></li>
                <li><i className="fa-brands fa-x-twitter hover:text-gray-400  cursor-pointer transition-all"></i></li>
                <li><i className="fa-brands fa-instagram hover:text-gray-400  cursor-pointer transition-all"></i></li>
                <li><i className="fa-brands fa-vimeo-v hover:text-gray-400 cursor-pointer transition-all"></i></li>
                <li><i className="fa-brands fa-behance hover:text-gray-400  cursor-pointer transition-all"></i></li>
              </ul>
            </div>
          </div>
          <div className="contact-form">
            <form action="">
              <input type="text" placeholder="Name"
                className="border-b-2 border-black w-full text-black p-2 mb-7 custom-placeholder focus:outline-none" />
              <input type="email" placeholder="Email"
                className="border-b-2 border-black w-full text-black p-2 mb-7 custom-placeholder focus:outline-none" />
              <input type="text" placeholder="Subject"
                className="border-b-2 border-black w-full text-black p-2 mb-7 custom-placeholder focus:outline-none" />
              <textarea name="" id="" cols="30" rows="6" placeholder="Message"
                className="border-b-2 border-black w-full text-black p-2 mb-7 custom-placeholder focus:outline-none"></textarea>
              <button
                className="w-full bg-green-600 text-white py-4 rounded-full my-4 hover:bg-transparent transition-all border-2 hover:border-green-600 hover:text-green-600 duration-500">SEND</button>
            </form>
          </div>
        </div>
        <div className="map  px-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.46658581902!2d85.41786107461127!3d27.671970527052427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aa31702455b%3A0xb8e81bbe523146c6!2sSiddha%20Pokhari!5e0!3m2!1sen!2snp!4v1708497698512!5m2!1sen!2snp"
            width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" className="w-full py-6"></iframe>
        </div>
      </div>
    </div>
  )
}
export default Contact