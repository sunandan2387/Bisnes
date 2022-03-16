import './Contact.scss'

export default function Contact() {
  return (
    <div className='contact'>
      <div className="left">
        <h1>Subscribe Our Newsletter<br></br> For More Update</h1>
        <h3>Lorem ipsum dolor sit, amet elit. Soluta cum odit nihil error sit praesentium consequatur optio harum. Officia, eum.</h3>
      </div>
      <div className="right">
        <input id='input' type="mail" placeholder='Enter Your Mail' />
        <button id='btn'>Subscribe</button>
      </div>
    </div>
  )
}
