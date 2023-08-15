import "./style.css"

export default function CardDev(props: any) {

    return (
        <div className="dev">
            <div className="grupo_contato">
                <img src={ props.foto } alt="" />
                {/* "https://github.com/Thiago-Nascimento.png" */}
                <div className="contato_dev">
                    <h3>{ props.nome }</h3>
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