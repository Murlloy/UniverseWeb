
import './styles.css'

import CarImage from "../../assets/CarImage.png"


export default function Card({vaga, liberado}) {

    const livre = liberado ? ('Liberado') : ('Ocupado')

    return (

        <article className='card-map'>
            <img src={CarImage} alt="" />
            <section>
                <h4>Vaga {vaga}</h4>
                <h3>{livre}</h3>
            </section>
        </article>

    )

}