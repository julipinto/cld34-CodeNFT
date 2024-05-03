import Button from "../Button";
import HeroNFTCard from "../HeroNFTCard";
import './styles.css'
import { useRef } from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)

function Hero() {
  const container = useRef(null)
  const textRef = useRef<HTMLDivElement>(null)
  const carfRef = useRef<HTMLDivElement>(null)
  const duration = 1
  
  useGSAP(() => {
    if(!textRef.current && !carfRef.current) return

    gsap.fromTo(
      textRef.current, 
      { xPercent: -50, opacity: 0, duration}, 
      {xPercent: 0, opacity: 1,  duration}
    )

    gsap.fromTo(
      carfRef.current, 
      { xPercent: 50, opacity: 0, duration}, 
      {xPercent: 0, opacity: 1,  duration}
    )
  
  }, { scope: container });

  return (
    <section ref={container} className="hero">
      <div ref={textRef} className="hero_text">
        <h1>
          Descubra e colete <span> obras de arte </span> digitais super raras
        </h1>
        <p>
          O maior mercado NFT. Criação digital autêntica e verdadeiramente única. Assinado e emitido pelo criador, possibilitado pela tecnologia blockchain
        </p>

        <Button size="medium" text="explorar"/> 
      </div>

      <div ref={carfRef} className="hero_nft_card">
        <HeroNFTCard />
      </div>
    </section>
  )
}

export default Hero;