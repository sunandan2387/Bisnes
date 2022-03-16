import './Intro.scss'

export default function Intro() {
  return (
    <div className='intro'>
      {/* <img src={require("./office.jpg")} alt="office" /> */}
      <div className="container">
      <div className="text1">Lorem ipsum dolor sit amet.</div>
      <div className="text2">We are consulting for your<br></br>Business Finances</div>
      <div className="text3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia cupiditate,<br></br> a iusto magni accusantium voluptate exercitationem architecto minima omnis voluptates?</div>
      <button id='btn'>Start Now</button>
      </div>
    </div>
  )
}
