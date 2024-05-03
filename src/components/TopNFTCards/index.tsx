
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

import { useGSAP } from "@gsap/react";
import { useRef } from 'react';

const topNFTs = [
  '/assets/image 1.png',
  '/assets/image 5.png',
  '/assets/image 6.png'
]

const id = 'topNFTs'

function TopNFTCards() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  
  const scope = useRef<HTMLDivElement>(null)
  const refs = [
      useRef<HTMLImageElement>(null),
      useRef<HTMLImageElement>(null),
      useRef<HTMLImageElement>(null)
    ]

  const first = refs[0]
  const second = refs[1]
  const third = refs[2]
  
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scope.current,
        scrub: true, 
        start: 'top bottom',
        end: 'bottom 70%',
      },
    });

    timeline.fromTo(first.current, { xPercent: -50 }, {xPercent: 0 })
    timeline.fromTo(third.current, { xPercent: 50 }, {xPercent: 0 }, '<')
    timeline.fromTo(second.current, { yPercent: 50 }, {yPercent: 0 }, '<')
  }, { scope });

  return (
    <section id={id} className='top_nfts'>
      <div>
        <h2>Top NFTs</h2>
      </div>
      <div ref={scope}>
        {topNFTs.map((path, i) => {
          return <img id={`top-nft-${i}`} ref={refs[i]} key={`top-nft-${i}`} src={path} />
        })}
      </div>
    </section>
  )
}

export default TopNFTCards