
import Button from '../Button';
import {collectors} from './infos'
import './styles.css'

function Collectors() {
  return (
    <section id='collectors'>
      <div className='collectors_title'>
        <h2>Colecionadores</h2>
        <Button size='small' text='ver todos'/>
      </div>
      <table>
        <tr>
          <th className='left'>Colecionadores</th>
          <th className='right' >Volume</th>
          <th className='right only_g' >Piso</th>
          <th className='right only_g' >Items</th>
        </tr>

        {collectors.map(
          ({imgPath, items, name, percentage, root, volume}, index) => {
            const imgUrl = new URL(imgPath, import.meta.url).href
          return <tr key={`collector_item_${index}`}>
            <td className='left'>
              <img src={imgUrl} />
              {name}
            </td>
            <td className='right percent'>
              <span>{volume} ETH</span>
              <p>{percentage}</p>
            </td>
            <td className='right percent only_g'>
              <span>{root} ETH</span>
              <p>{percentage}</p>
            </td>
            <td className='right only_g'>
              <span>{items}</span>
            </td>
          </tr>
        })}
      </table>
      <Button size='full' text='ver todos'/>
    </section>
  )
}

export default Collectors;