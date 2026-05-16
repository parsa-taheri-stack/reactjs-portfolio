import Home from './components/Home/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import SideLinks from './components/SideLinks/SideLinks.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <div id={'content'}>
        <Home />
      </div>
    </div>
  )
}

export default App
