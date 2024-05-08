import { useState } from 'react'
import './styles/global.css'
import Navigation  from "./components/Navigation"
import LoginPanel from "./components/LoginPanel"
import BackDrop from "./components/BackDrop"

function App() {
  const [isLoginExpanded, setIsLoginExpanded] = useState(false);

  function toggleLogin(){
    setIsLoginExpanded((prevValue) => !prevValue)
  }

  return (
    <div>
      <Navigation
        toggleLogin={toggleLogin}
      />
      <main>
        <BackDrop 
          toggleLogin={toggleLogin}
          isLoginExpanded={isLoginExpanded}
        />
        <LoginPanel
          isLoginExpanded={isLoginExpanded}
        />
      </main>
    </div>
  )
}

export default App
