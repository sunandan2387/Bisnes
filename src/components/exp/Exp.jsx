import './Exp.scss'

export default function Exp() {
  return (
    <div className='exp'>
      <div className="up">
        <div className="left">
          <h2>We have many years experience in<br></br>consultant business</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat aspernatur labore similique provident sint aliquam odit nam aliquid. Odio quo doloremque officiis similique expedita, explicabo nisi beatae laboriosam assumenda ex voluptatibus ducimus aliquam quia, obcaecati itaque a? Nostrum eveniet, nulla sequi laborum quod cumque nihil repellat impedit sit veniam.</p>
           <button id='btn'>Read More</button>
        </div>
        <div className="right">
          <img src={require("./laptop.jpg")} alt="laptop" />
        </div>
      </div>
      <div className="down">
        <div>
          <img src={require("./gear.png")} alt="gear" />
          <h3><span id='span'>Construct</span>ion</h3>
        </div>
        <div>
          <img src={require("./cloud.png")} alt="cloud" />
          <h3><span id='span'>DUMMY</span>-LOGO</h3>
        </div>
        <div>
          <img src={require("./glasses.png")} alt="glasses" />
          <h3>Random<span id='span'>Logo</span></h3>
        </div>
        <div>
          <img src={require("./screw.png")} alt="screw" />
          <h3>Random <span id='span'>Brand</span></h3>
        </div>
      </div>
    </div>
  )
}
