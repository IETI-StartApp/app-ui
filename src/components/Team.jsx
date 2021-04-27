export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Conoce el equipo</h2>
        </div>
        <div id='row' style={{display:"flex"}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
