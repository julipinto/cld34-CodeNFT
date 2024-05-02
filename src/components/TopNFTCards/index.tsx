
import { useGSAP } from '@gsap/react'
import './styles.css'

const topNFTs = [
  '/src/assets/image 1.png',
  '/src/assets/image 5.png',
  '/src/assets/image 6.png'
]

function TopNFTCards() {
  useGSAP((), )
  return (
    <section id='topNFTs' className='top_nfts'>
      <div>
        <h2>Top NFTs</h2>
      </div>
      <div>
        {topNFTs.map((path, i) => {
          return <img key={`top-nft-${i}`} src={path} />
        })}
      </div>
    </section>
  )
}

export default TopNFTCards