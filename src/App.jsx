import './App.scss';
import Navbar from './components/navbar/Navbar.jsx'
import Intro from './components/intro/Intro.jsx'
import Exp from './components/exp/Exp.jsx'
import Service from './components/service/Service.jsx'
import Contact from './components/contact/Contact.jsx'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <Exp/>
        <Service/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
