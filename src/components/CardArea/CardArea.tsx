
import './CardArea.css';
import { CardAreaProps } from './CardArea.types';


export default function CardArea({title, image}: CardAreaProps) {

    const whatsappLink = "https://wa.me/5534991610712?text=Olá%2C%20entrei%20em%20contato%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20seu%20escritório%20de%20advocacia.";

    return (
        <li className='card-area'>

            <img src={image} alt={title} className='card-image' />

            <h3 className='card-title'>{title}</h3>

            <a href={whatsappLink} target="_blank" className="card-button">CHAME AGORA</a>
        </li>
    );
}