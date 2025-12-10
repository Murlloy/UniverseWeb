import "./styles.css"

import NavDashboard from "../../components/NavDashboard/NavDashboard"

import GuaranaImage from "../../assets/ad-icon.png"
import MarIAImage from "../../assets/logo-maria.png"
import BigCardImage from "../../assets/big-card-img.png"
import CardProgressImage from "../../assets/card-progress.png"

export default function AppPage() {

    const usuario = "Murillo"
    const total = 50

    return (

        <section className="app-page">
            <NavDashboard />
            <article className="app-main">
                <h2>Seja Bem Vindo {usuario}!</h2>
                <section className="cards">
                    <article className="card big-card">
                        <div>
                            <h4>Mapa de Vagas</h4>
                            <p>Total de Vagas: {total}</p>
                        </div>
                            <img src={BigCardImage} alt="" />
                    </article>
                    <section className="cards-empe">
                        <article className="card">
                                <img src={CardProgressImage} alt="" />
                                <h3>25 Minutos Restantes</h3>
                        </article>
                        <article className="card pagar">
                            <p>Minha Vaga:</p>
                            <section className="preco">
                                <p>Duas Horas e meia</p>
                                <div>
                                    <p>SubTotal:</p>
                                    <h3>R$38,00</h3>
                                </div>
                            </section>
                        </article>
                    </section>
                </section>
                    <section className="patrocinadores">
                        <article>
                            <h2>Patrocinadores</h2>
                            <div></div>
                        </article>
                        <section className="patrocinadores-links">
                            <a href=""><img src={GuaranaImage} alt="" /></a>
                            <a href=""><img src={MarIAImage} alt="" /></a>
                        </section>
                    </section>
            </article>
        </section>

    )

}