import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/main'
import Error from './components/common/404'
import Footer from './components/common/Footer'
import Navar from './components/common/nav'


function App() {
  
  return (
      <BrowserRouter>
      <Navar></Navar>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer ></Footer>
      </BrowserRouter>
  )
}

export default App