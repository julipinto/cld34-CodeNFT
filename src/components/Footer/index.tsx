import { social } from "./infos";
import './styles.css'


function Footer() {
  return (
    <footer className="page_footer">
      {social.map(({ Icon, href }, i) => {
        return <a href={href} key={`page_footer_${i}`} className="glassy_bg g1 gradient_border">
          <Icon/>
        </a>
      })}
    </footer>
  )
}

export default Footer;