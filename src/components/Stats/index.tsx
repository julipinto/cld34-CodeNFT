import { useWindowSize } from "@uidotdev/usehooks";
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { Fragment } from 'react/jsx-runtime';
import './styles.css';
import gsap from "gsap";


const limit = 768

const sliderData = [
  {num: '300', stat: 'coleções'},
  {num: '+100k', stat: 'usuários'},
  {num: '+30k', stat: 'negociações'},
  {num: '+1M', stat: 'visualizações'},
]

function Stats() {
  const size = useWindowSize();
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slides = slider?.current?.children;
    if(!slides) return
  
    const tl = gsap.timeline({
      repeat: -1, // Repetir a animação indefinidamente
      paused: true, // Iniciar a animação pausada
    });
  
    tl.set(slides, { opacity: 0 });
  
    const move = (index: number) =>{
      const half_screen = size.width / 2
      const elem = slides[index]
      const left = elem.getBoundingClientRect().left
      const half_elem_width = elem.offsetWidth / 2
  
      const sign = half_screen <  (left + half_elem_width) ? '-' : '+' 
      const size_move = half_screen - (left + half_elem_width)
      return `${sign}=${Math.abs(size_move)}`
    }
  
    for (let i = 0; i < slides.length; i++) {
      tl.to(slides[i], {
        duration: 5, // Duração da animação de cada slide
        x: move(i),
        opacity: 1, // Define a opacidade do slide atual para 1
        ease: "power1.inOut",
      })
      .to(slides[i], {
        opacity: 0, // Define a opacidade do slide anterior para 0
        duration: 0.5, // Duração da animação de opacidade
      });
    }
  
    if (size.width <= limit) {
      tl.play(); // Iniciar a animação se a largura da janela for menor ou igual a 768
    } else {
      tl.pause(); // Pausar a animação se a largura da janela for maior que 768
      gsap.set(slides, { opacity: 1, x: 0 }); // Resetar a opacidade e a posição dos slides
    }
  
    return () => tl.kill(); // Limpar a animação quando o componente for desmontado
  }, [size.width]);



  return (
    <section className='stats glassy_bg g1 gradient_border'>
      <div ref={slider}>
        {sliderData.map((s, i) => {
          return (
            <Fragment key={`stats-${i}`}>
              <div className={clsx(`stats-${i}`)}>
                <strong>{s.num}</strong>
                <span>{s.stat}</span>

              </div>
              {i < sliderData.length-1 && size.width && size?.width > limit && <div className='divider'/>}
            </Fragment>
          )
        })}
      </div>
    </section>
  )
}

export default Stats;