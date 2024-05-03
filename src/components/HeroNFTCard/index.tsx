import Button from '../Button';
import './styles.css'

function HeroNFTCard() {
  return (
    <div className="hero_nft_card gradient_border g1 glassy_bg">
      <div className='nft_glow'/>
      <div className='nft_glow'/>
      <div className="img_container">
        <div className='top1_card gradient_border g2 glassy_bg'>
          Top 1
        </div>
        <img src='/assets/top1.png' />
      </div>
      <footer>
        <section>
          <h4 className='footer_eth_title'>Apple Muu</h4>
          <span className='footer_eth_costumer'>By Steeve Jobs</span>

          <div className='footer_eth_value'>
            <img src='/assets/ETH.svg' />
           <span>18 ETH</span> 
          </div>
        </section>
        <section>
          <Button size='medium' text='Comprar' />
        </section>
      </footer>
    </div>
  )
}

export default HeroNFTCard;