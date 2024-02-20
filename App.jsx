import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="loginBox">

          <div>
            <div className="welcome">Welcome to Personal Develpoment Advisor </div>
            <div><button className="loginBtn">Log in</button></div>
            <div className="or"><div>OR</div></div>
            <div><button className="signupBtn">Sign Up</button></div>
          

          </div>

        </div>
      </div>
    </>
  )
}

export default App
