import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { About, Home, Profile, Signin, Signup } from './pages'
import { Header } from './components'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App
