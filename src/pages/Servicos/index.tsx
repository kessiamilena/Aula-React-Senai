import "./style.css"

import Logo from "../../assets/img/logo.svg"
import Facebook from "../../assets/img/facebook.svg"
import Instagram from "../../assets/img/instagram.svg"
import Linkedin from "../../assets/img/linkedin.svg"

function Servicos() {


    return(
        <>
            <div id="sombra"></div>
            <main id="lista-servicos">
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr/>
                        <form method="post">
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..."/>
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>                   
                                <li>
                                    <div className="servico">
                                        <div className="topo_servico">
                                            <h3>Desenvolvimento de site institucional - Gateway de Pagamento / Fintech</h3>
                                            <span>R$ 1300,00</span>
                                        </div>
                                        <p>Desenvolver um site responsivo que seja utilizado como uma plataforma de apresentação do nosso gateway de pagamento. O objetivo principal deste projeto é criar um site atraente e informativo, que demonstre as funcionalidades e benefícios do nosso gateway de pagamento para potenciais clientes.</p>
                                        <div className="techs">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>React</span>
                                        </div>
                                    </div>
                                </li>  
                                <li>
                                    <div className="servico">
                                        <div className="topo_servico">
                                            <h3>Bot telegram Pagamento</h3>
                                            <span>R$ 2400,00</span>
                                        </div>
                                        <p>Preciso fazer um código em python para um bot do telegram. O bot será para solicitação de pagamento.</p>
                                        <div className="techs">
                                            <span>Python</span>
                                        </div>
                                    </div>
                                </li>                 
                                <li>
                                    <div className="servico">
                                        <div className="topo_servico">
                                            <h3>Caixa Rápido</h3>
                                            <span>R$ 1200,00</span>
                                        </div>
                                        <p>Preciso fazer um  software que permita ao usuário fazer o upload de seu extrato bancário em formato( ofx). Dentro do software o mesmo poderá categorizar todas as suas receitas e despesas, tendo categorias sugeridas pelo software e permitindo também personalizações. Após o lançamento de vários extratos o software irá entender que são lançamentos parecidos e fará a categorização de maneira automática, cabendo ao usuário somente categorizar as receitas e despesas que não se repetem. Após a categorização o software irá emitir gráficos e relatórios baseados na categorização das contas.</p>
                                        <div className="techs">
                                            <span>Python</span>
                                        </div>
                                    </div>
                                </li>                 
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="container rodape">
                    <div className="rodape_conteudo">
                        <div className="rodape_conteudo_paginas">
                            <h2>Páginas</h2>
                            <ul>
                                <li>Login</li>
                                <li>Home</li>
                                <li>Listar Serviços</li>
                                <li>Cadastrar Cliente</li>
                                <li>Cadastrar Desenvolvedor</li>
                            </ul>
                        </div>
                        <img src= { Logo } alt=""/>
                        <div className="rodape_conteudo_contatos">
                            <h2>Contatos</h2>
                            <div>
                                <a href="#"><img src= { Facebook } alt=""/></a>
                                <a href="#"><img src= { Instagram } alt=""/></a>
                                <a href="#"><img src= { Linkedin } alt=""/></a>
                            </div>
                            <a href="mailto:">contato@vsconnect.com</a>
                        </div>
                    </div>
                    <p>todos os direitos reservados ©.</p>
                </div>
            </footer>
        </>
    )
}

export default Servicos