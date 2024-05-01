import { ReactLenis } from '@studio-freight/react-lenis'
import './app.css'
import Collectors from './components/Collectors'
import Footer from './components/Footer'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Stats from './components/Stats'
import TopNFTCards from './components/TopNFTCards'

function App() {

  return (
    <ReactLenis root>
      <main>
        <Header />
        <Hero />
        <Stats />
        <TopNFTCards />
        <Collectors />
        <Footer />
      </main>
    </ReactLenis>
  )
}

export default App
