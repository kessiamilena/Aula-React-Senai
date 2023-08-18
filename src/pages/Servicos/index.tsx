import "./style.css"

import Logo from "../../assets/img/logo.svg"
import Facebook from "../../assets/img/facebook.svg"
import Instagram from "../../assets/img/instagram.svg"
import Linkedin from "../../assets/img/linkedin.svg"
import { useEffect, useState } from 'react'

import CardServ from "../../components/CardServ"

import api from "../../utils/api";

function Servicos() {

    const [servs, setServ] = useState<any[]>([

    ]);

    const [skillDigitada, setSkillDigitada] = useState<string>("");
    const [servicos, setServicos] = useState<any[]>(servs)

    useEffect(() => {
        document.title = "Lista de Serviços - VSConnect"

        listarServicos()
    }, [])

    function buscarPorSkill(event: any) {
        event.preventDefault();

        const servFiltrados = servs.filter((serv: any) => serv.techs.includes(skillDigitada.toLocaleUpperCase()));

        if (servFiltrados.length === 0) {
            alert("Não existem serviços com a skill informada.")
        } else {
            setServicos(servFiltrados);
        }
    }

    function retornoServicos(event: any) {

        if (event.target.value === "") {
            listarServicos()
        }

        setSkillDigitada(event.target.value);
    }

    function listarServicos() {

        api.get("servicos").then((response: any) => {
            console.log(response.data)
            setServicos(response.data)
        }).catch((error: any) => console.log(error))
    }


    return (
        <>
            <div id="sombra"></div>
            <main id="lista-servicos">
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr />
                        <form method="post" onSubmit={buscarPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." onChange={retornoServicos} />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {servicos.map((serv: any, index: number) => {
                                    return <li key={index}>
                                        <CardServ
                                            titulo={serv.nome}
                                            valor={serv.valor}
                                            descricao={serv.descricao}
                                            techs={serv.techs}
                                        />

                                    </li>
                                })}
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
                        <img src={Logo} alt="" />
                        <div className="rodape_conteudo_contatos">
                            <h2>Contatos</h2>
                            <div>
                                <a href="#"><img src={Facebook} alt="" /></a>
                                <a href="#"><img src={Instagram} alt="" /></a>
                                <a href="#"><img src={Linkedin} alt="" /></a>
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