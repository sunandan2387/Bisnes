import './Service.scss'

export default function Service() {
  return (
    <div className='service'>
      <div className="first">
        <h1>Our Services</h1>
      </div>
      <div className="second">
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit Rem dolorem laudantium debitis quia.<br></br> neque voluptatem ab sed odio voluptatibus molestiae.
        </h3>
      </div>
      <div className="third">
        <div><div id='div'>
        <div id='wrap'>
          <img src={require("./home.png")} alt="home" />
          </div>
          <h3>Financial Consulting</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum a, pariatur laudantium perferendis!</p>
          </div></div>
        
        <div><div id='div'>
          <div id='wrap'>
          <img src={require("./mega.png")} alt="mega" />
          </div>
        <h3>Content Marketing</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit illum, sequi tempora facilis excepturi!</p>
        </div></div>

        <div><div id='div'>
        <div id='wrap'>
          <img src={require("./flower.png")} alt="flower" />
          </div>
        <h3>Finance Advice</h3>
        <p>Lorem ipsum dolor sit amet, consectetur. Qui laudantium omnis cum doloremque nostrum animi.</p>
        </div></div>
      </div>
      <div className="forth">
        <button id='btn'>All Services</button>
      </div>
    </div>
  )
}
