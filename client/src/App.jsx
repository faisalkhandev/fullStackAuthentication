import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { About, Home, PageNotFound, Profile, Signin, Signup } from './pages'
import { Header } from './components'
import PrivateRoute from './components/PrivateRoute'



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
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/*' element={<PageNotFound />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App
