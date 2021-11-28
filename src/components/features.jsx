export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Features</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-md-3 col-sm-6 team'>
				<div className='thumbnail'>
                  {' '}
				   <img src={d.img} alt='...' className='features-img' />
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
				</div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
