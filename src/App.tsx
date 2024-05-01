import './app.css'
import Collectors from './components/Collectors'
import Footer from './components/Footer'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Stats from './components/Stats'
import TopNFTCards from './components/TopNFTCards'

function App() {

  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <TopNFTCards />
      <Collectors />
      <Footer />
    </main>
  )
}

export default App
