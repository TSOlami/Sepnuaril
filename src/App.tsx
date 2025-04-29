import './App.css';
import { Route, Routes } from 'react-router-dom';

//Components
import Homepage from './components/Pages/Home'

function App() {

  return (
   <Routes>
    <Route path='/' element={<Homepage/>} />
   </Routes>
  )
}

export default App
