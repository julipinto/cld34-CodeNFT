import { useGSAP } from "@gsap/react";
import { useWindowSize } from "@uidotdev/usehooks";
import clsx from 'clsx';
import gsap from "gsap";
import { useRef } from 'react';
import { Fragment } from 'react/jsx-runtime';
import './styles.css';


const limit = 768

const sliderData = [
  {num: '300', stat: 'coleções'},
  {num: '+100k', stat: 'usuários'},
  {num: '+30k', stat: 'negociações'},
  {num: '+1M', stat: 'visualizações'},
]

const stat_mobile_gap = 30

function Stats() {
  const { width } = useWindowSize();
  const slider = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    if(!width) return;
    const slides = slider?.current?.children;
    if(!slides) return
  
    const tl = gsap.timeline({
      repeat: -1,
      paused: true
    });
  
    const move = (elem: HTMLCollection) =>{
      const half_screen = width / 2
      // @ts-ignore
      const half_elem_width = elem.offsetWidth / 2
      const sign = '+'
      const size_move = half_screen - half_elem_width - stat_mobile_gap
      return `${sign}=${Math.abs(size_move)}`
    }

    if (width <= limit) {
      tl.set(slides, { opacity: 0 });

      for(const stat of slides) {
        tl.to(stat, {
          x: `-=${stat.getBoundingClientRect().left - stat_mobile_gap}`
        })
        .to(stat, {
          duration: 2,
          // @ts-ignore
          x: move(stat),
          opacity: 1,
          ease: "power1.inOut",
        })
        .to(stat, {
          duration: 5
        })
        .to(stat, {
          opacity: 0,
          duration: 0.5, 
        })
      }

      for(const stat of slides) {
        tl.to(stat, {
          x: `-=${stat.getBoundingClientRect().left - stat_mobile_gap}`
        })
        .to(stat, {
          duration: 2,
          // @ts-ignore 
          x: move(stat),
          opacity: 1,
          ease: "power1.inOut",
        })
        .to(stat, {
          duration: 5
        })
        .to(stat, {
          opacity: 0,
          duration: 0.5, 
        })
      }
    } else {
      gsap.set(slides, { opacity: 1, x: 0 }); 
    }

    tl.play();
    
  
    return () => tl.kill(); // Limpar a animação quando o componente for desmontado
  }, [width])

  return (
    <section className='stats glassy_bg g1 gradient_border'>
      <div ref={slider}>
        {sliderData.map((s, i) => {
          return (
            <Fragment key={`stats-${i}`}>
              <div className={clsx(`stats-${i}`)}>
                <strong>
                  <span className="number-text">
                    {s.num}
                  </span>
                </strong>
                <span>{s.stat}</span>

              </div>
              {i < sliderData.length-1 && width && width > limit && <div className='divider'/>}
            </Fragment>
          )
        })}
      </div>
    </section>
  )
}

export default Stats;