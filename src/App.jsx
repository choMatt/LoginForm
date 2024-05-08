import { useState } from 'react'
import './styles/global.css'
import Navigation  from "./components/Navigation"
import LoginPanel from "./components/LoginPanel"

function App() {
  const [isLoginPanelOpen, setIsLoginPanelOpen] = useState(false);

  function handleClick(){
    setIsLoginPanelOpen((prevValue) => !prevValue)
  }

  return (
    <div>
      <Navigation
        handleClick={handleClick}
      />
      <main>
        <LoginPanel
          isLoginPanelOpen={isLoginPanelOpen}
        />
      </main>
    </div>
  )
}

export default App
