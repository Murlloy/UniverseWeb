
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import Logo from "../../assets/logo-img.png"

import LogoGoogle from "../../assets/google-icon.png"
import LogoX from "../../assets/x-icon.png"

import "../LoginPage/styles.css"

export default function LoginPage() {

    return (
            <article className="login-container">
            
                <section className="login">
                    <img src={Logo} alt="logo" />
                    <div className="inputsWrapper">
                        <Input label="Nome de Usuario" />
                        <Input label="Senha" />
                    </div>
                    <article className="footerLogin">
                        <Button label="Entrar" color={"#8A51FC"}/>
                        <p>Caso não tenha cadastro <a>Cadastre-se</a></p>
                        <p>Ou</p>
                        <Button label="Entrar com Google" img={true} linkImage={LogoGoogle}/>
                        <Button label="Entrar com X" img={true} linkImage={LogoX}/>
                        <p>Ou</p>
                        <a href="">Continuar como convidado</a>
                    </article>
                </section>
                <section className="banner">
                </section>

            </article>

    )

}