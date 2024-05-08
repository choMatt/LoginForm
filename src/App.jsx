import { useState } from 'react'
import './styles/global.css'
import Navigation  from "./components/Navigation"
import LoginPanel from "./components/LoginPanel"

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div>
      <Navigation/>
      <main>
        <LoginPanel/>
      </main>
    </div>
  )
}

export default App
