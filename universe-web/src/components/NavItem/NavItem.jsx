
import "./styles.css"


export default function NavItem({label, linkImage}) {

    return (

        <a className="nav-a">
                <img src={linkImage} alt="" />
                <p>{label}</p>
        </a>

    )

}