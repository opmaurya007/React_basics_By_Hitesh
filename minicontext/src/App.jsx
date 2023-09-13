
import './App.css'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
  <h1>React Context Api</h1>
  <Login></Login>
  <Profile></Profile>
    </UserContextProvider>
  )
}

export default App