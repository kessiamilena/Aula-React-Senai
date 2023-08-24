//estilização
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import "./style.css";


function VisualizarServico() {

    const idServico = useParams();

    const [ nome, setNome ] = useState<string>("");
    const [ valor, setValor ] = useState<string>("");
    const [ descricao, setDescricao ] = useState<string>("");
    const [ listaSkills, setListaSkills ] = useState<string[]>([])

    useEffect(() => {
        document.title = "Lista de Serviços - VSConnect"

        buscarServicoPorId()
    }, [])

    function buscarServicoPorId() {
        
        api.get("servicos/" + idServico).then((response: any) => {
            setNome(response.data.nome)
            setValor(response.data.valor)
            setDescricao(response.data.descricao)
            setListaSkills(response.data.parseListaTechs()) //  hardSkills
        }).catch((error) => console.log(error))
    }

    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{ nome }</h2>
                        <span>R${ valor }</span>
                    </div>
                    <p>{ descricao }</p>
                    <div className="techs">
                    {
                                listaSkills.map( (skill: any, index: number) => {
                                    return <span key={ index }>{ skill }</span>
                                })
                            }
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;