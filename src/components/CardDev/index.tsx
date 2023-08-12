import "./style.css"

export default function CardDev(props: any) {

    return (
        <div className="dev">
            <div className="grupo_contato">
                <img src="https://github.com/Thiago-Nascimento.png" alt="" />
                <div className="contato_dev">
                    <h3>{ props.nome }</h3>
                    {/* Thiago Nascimento */}
                    <p>{ props.email }</p>
                    {/* thiago@email.com */}
                </div>
            </div>
            <div className="techs">
                <span>HTML</span>
                <span>CSS</span>
                <span>React</span>
            </div>
        </div>
    )
}