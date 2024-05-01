import './styles.css'

const stats = [
  {num: '300', stat: 'coleções'},
  {num: '+100k', stat: 'usuários'},
  {num: '+30k', stat: 'negociações'},
  {num: '+1M', stat: 'visualizações'},
]

function Stats() {
  return (
    <section className='stats glassy_bg g1 gradient_border'>
      <div>
        {stats.map((s, i) => {
          return (
            <div key={`stats-${i}`} className={`stats-${i}`}>
              <strong>{s.num}</strong>
              <span>{s.stat}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Stats;