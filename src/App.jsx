import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './components/common/404'
import Footer from './components/common/Footer'
import Navar from './components/common/nav'
import Principal from './components/Principal'


function App() {
  
  return (
      <BrowserRouter>
      <Navar></Navar>
      <Routes>
        <Route path="/" element={<Principal></Principal>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer ></Footer>
      </BrowserRouter>
  )
}

export default App