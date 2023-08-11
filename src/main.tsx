import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import Home from './pages/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CadastroDev from './pages/CadastroDev'
import Servicos from './pages/Servicos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='cadastroDev' element={ <CadastroDev /> }></Route>
        <Route path='listaServicos' element={ <Servicos /> }></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
