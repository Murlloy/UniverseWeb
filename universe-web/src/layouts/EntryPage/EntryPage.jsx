
import NavDashboard from "../../components/NavDashboard/NavDashboard"

import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

import CarImage from "../../assets/CarImage.png"

import "./styles.css"

export default function EntryPage() {

    const Vaga = "A1"

    return (

        <section className="app-page">
                    <NavDashboard />
                    <article className="app-main">
                        <section className="entry-header">
                            <h2>Vaga {Vaga}</h2>
                            <img src={CarImage} alt="" />
                        </section>
                        <section className="inputs-entry">
                            <Input label="Nome de Usuario" />
                            <Input label="Placa do Veiculo" />
                            <Input label="Tipo do Veiculo" />
                            <Input label="Modelo do Veiculo" />
                            <Input label="Estado" />
                            <Button label="Criar" color={"#8A51FC"}/>
                        </section>
                    </article>
                </section>

    )

}