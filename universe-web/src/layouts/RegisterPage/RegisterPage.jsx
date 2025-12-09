
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import Logo from "../../assets/logo-img.png"


import "./styles.css"

export default function RegisterPage() {

    return (
            <article className="login-container">
            
                <section className="login">
                    <article className="headerLogin">
                        <img src={Logo} alt="logo" />
                        <div className="inputsWrapper">
                            <Input label="Primeiro Nome" />
                            <Input label="Sobrenome" />
                            <Input label="Email" />
                            <Input label="Telefone" />
                            <Input label="Nome de Usuario" />
                            <Input label="Senha" />
                        </div>
                    </article>
                    <article className="footerLogin">
                        <Button label="Cadastrar" color={"#8A51FC"}/>
                        <p>Já tem uma conta? <a href="">Entrar</a></p>
                    </article>
                </section>
                <section className="banner">
                </section>

            </article>

    )

}