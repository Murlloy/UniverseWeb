import "./styles.css"

import LogoImage from "../../assets/logo-img.png"

import NavItem from "../../components/NavItem/NavItem"

export default function AppPage() {

    return (

        <section className="app-page">
            <article className="app-nav">
                <img src={LogoImage} alt="" />
                <div>
                    <p>Navegação</p>
                    <ul>
                        <NavItem label="" linkImage="" className="item-nav"/>
                    </ul>
                </div>
            </article>
            <article className="app-main">

            </article>
        </section>

    )

}