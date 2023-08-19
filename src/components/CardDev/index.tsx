import "./style.css"

import { Link } from "react-router-dom"

export default function CardDev(props: any) {

    return (
        <div className="dev">
            <div className="grupo_contato">
                <img src={ "http://localhost:3000/static/" + props.foto } alt="" />
                {/* "https://github.com/Thiago-Nascimento.png" */}
                <div className="contato_dev">
                    <Link to={"/perfil/" + props.id }>{ props.nome }</Link>
                    {/* <h3>{ props.nome }</h3> */}
                    {/* Thiago Nascimento */}
                    <p>{ props.email }</p>
                    {/* thiago@email.com */}
                </div>
            </div>
            <div className="techs">
                {
                    props.techs.map((tech: string, index: number) => {
                        return <span key={index}>{tech}</span>
                    })
                }
                {/* <span>HTML</span>
                <span>CSS</span>
                <span>React</span> */}
            </div>
        </div>
    )
}