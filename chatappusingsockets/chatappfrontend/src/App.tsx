import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Component from './pages/connection';
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Component/>}></Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
