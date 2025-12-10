
import Card from "../../components/Card/Card"
import NavDashboard from "../../components/NavDashboard/NavDashboard"

import MapImage from "../../assets/info-vagas-icon.png"

import "./styles.css"

export default function MapPage() {

    return (

                <section className="app-page">
                    <NavDashboard />
                    <article className="app-main">
                        <section className="map-container">
                            <div className="map-header">
                                <h3>Vagas</h3>
                                <img src={MapImage} alt="" />
                            </div>
                            <article className="vagas-container">
                                <Card vaga={12} liberado={true} />
                                <Card vaga={12} liberado={true} />
                                <Card vaga={12} liberado={true} />
                                <Card vaga={12} liberado={true} />
                                <Card vaga={12} liberado={true} />
                                <Card vaga={12} liberado={true} />
                                <Card vaga={12} liberado={true} />
                                <Card vaga={12} liberado={true} />
                                <Card vaga={12} liberado={true} />
                                <Card vaga={12} liberado={true} />
                                <Card vaga={12} liberado={true} />
                                <Card vaga={12} liberado={true} />
                            </article>
                        </section>
                    </article>
                </section>

    )

}