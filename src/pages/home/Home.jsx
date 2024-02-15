import './Home.css'
import Name from './Name'

export default function Home() {
  return (
    <div id="home" className='homeContainer'>
      <div className="homeWrapper">
          {/* <h1>Geno Ureta</h1> */}
          <Name />
          <h3>Web Developer</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has 
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
      </div>

    </div>
  )
}
