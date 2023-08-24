import "./style.css"

export default function CardServ(props: any) {

    function parseListaTechs() {

        if( typeof props.techs === "string" ) {
            return JSON.parse(props.techs)
        } else {
            return props.techs
        }
    }

    return (
        <>
            <div className="servico">
                <div className="topo_servico">
                    <h3>{props.titulo}</h3>
                    <span>{props.valor}</span>
                </div>
                <p>{props.descricao}</p>
                <div className="techs">
                    {
                        parseListaTechs().map((tech: string, index: number) => {
                            return <span key={index}>{tech}</span>
                        })
                    }
                </div>
            </div>
        </>
    )
}