
import "./styles.css"


export default function NavItem({label, linkImage}) {

    return (

        <a>
                <img src={linkImage} alt="" />
                <p>{label}</p>
        </a>

    )

}