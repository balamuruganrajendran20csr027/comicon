import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Comics from './pages/Comics'
import Eachcomic from './pages/Eachcomic'
import Eachmovie from './pages/Eachmovie'
import Eachseries from './pages/Eachseries'
import Home from './pages/Home'
import Login from './pages/Login'
import Movies from './pages/Movies'
import Notfound from './pages/Notfound'
import Series from './pages/Series'
import Signup from './pages/Signup'

import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'

const App = () => {
  return (
    <> 
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login /> } />
          <Route path='/signup' element={<Signup /> } />
          <Route path='/comics' element={<Comics /> } />
          <Route path='/comics/:id' element={<Eachcomic /> } />
          <Route path='/movies' element={<Movies /> } />
          <Route path='/movies/:id' element={<Eachmovie /> } />
          <Route path='/series' element={<Series /> } />
          <Route path='/series/:id' element={<Eachseries /> } />
          <Route path='/about' element={<About /> } />
          <Route path='*' element={<Notfound /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
