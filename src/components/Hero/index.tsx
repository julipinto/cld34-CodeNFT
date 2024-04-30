import Button from "../Button";
import HeroNFTCard from "../HeroNFTCard";
import './styles.css'

function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>
          Descubra e colete <span> obras de arte </span> digitais super raras
        </h1>
        <p>
          O maior mercado NFT. Criação digital autêntica e verdadeiramente única. Assinado e emitido pelo criador, possibilitado pela tecnologia blockchain
        </p>

        <Button size="medium" text="explorar"/> 
      </div>

      <div>
        <HeroNFTCard />
      </div>
    </section>
  )
}

export default Hero;