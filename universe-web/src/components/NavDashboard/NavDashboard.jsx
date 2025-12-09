
import "./styles.css"

import DashBoardIcon from "../../assets/dashboard-icon.png"
import LogoImage from "../../assets/logo-img.png"
import MapImage from "../../assets/map-icon.png"
import InfoImage from "../../assets/info-vagas-icon.png"
import AdIcon from "../../assets/ad-icon.png"
import LogoutIcon from "../../assets/logout-icon.png"


export default function NavDashboard() {

    return (

        <article className="app-nav">
                <div>
                    <img src={LogoImage} alt="" className="app-logo" />
                    <p>Navegação</p>
                    <ul>
                        <a>
                            <img src={DashBoardIcon} alt="" />
                            <p>Dashboard</p>
                        </a>
                                        <a>
                                <img src={InfoImage} alt="" />
                                <p>Informações da Vaga</p>
                        </a>
                        <a>
                                <img src={MapImage} alt="" />
                                <p>Mapa de Veiculos</p>
                        </a>
                    </ul>
                </div>
                <section className="footer-nav">
                    <img src={AdIcon} alt="" />
                    <a>
                            <img src={LogoutIcon} alt="" />
                            <p>Logout</p>
                    </a>
                </section>

        </article>

    )


}
