import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Milestone from "../components/Milestone"
import News from "../components/News"
import Portfolio from "../components/Portfolio"
import Pricing from "../components/Pricing"
import Review from "../components/Review"
import Services from "../components/Services"
import Skills from "../components/Skills"
import Team from "../components/Team"

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Review />
      <News />
      <Portfolio />
      <Pricing />
      <Team />
      <Skills />
      <Milestone />
      <Contact />
      <Footer />
    </div>
  )
}
export default Home