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
import ListaDevs from './pages/ListaDevs'
import PerfilUsuario from './pages/PerfilUsuario'
import CadastroUsuario from './pages/CadastroUsuario'
import CadastroServico from './pages/CadastroServicos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='cadastrodev' element={ <CadastroDev /> }></Route>
        <Route path='listaservicos' element={ <Servicos /> }></Route>
        <Route path='listadevs' element={ <ListaDevs /> }></Route>
        <Route path='perfil/:idUsuario' element={ <PerfilUsuario />} />  {/* queryParams */}
        <Route path='servico/:idServico' element={ <PerfilUsuario />} />  {/* queryParams */}
        <Route path='cadastrousuario' element={ <CadastroUsuario />} />
        <Route path='cadastroservico' element={ <CadastroServico />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
