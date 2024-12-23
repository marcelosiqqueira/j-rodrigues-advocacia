
import './CardArea.css';
import { CardAreaProps } from './CardArea.types';


export default function CardArea({title, image}: CardAreaProps) {

    return (
        <li className='card-area'>

            <img src={image} alt={title} className='card-image' />

            <h3 className='card-title'>{title}</h3>

            <a href="#" target="_blank" className="card-button">CHAME AGORA</a>
        </li>
    );
}