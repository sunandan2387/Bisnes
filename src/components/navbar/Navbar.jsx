import './Navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="left">
        <img src={require('./logo.png')} alt="logo"/>
        <h2>Bisnes</h2>
        </div>
        <div className="right">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Blog</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
        </div>
    </div>
  )
}
