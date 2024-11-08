import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import LandingPage from './pages/Landing';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/landing" replace/>}/>
        <Route path='/landing' element={<LandingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
