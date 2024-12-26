import "./ClientReviewCard.css";
import { ClientReviewCardProps } from "./ClientReviewCard.types";



const ClientReviewCard = ({ name, image, description }: ClientReviewCardProps) => {

    return (
        <div className="client-review-card-container">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className="line-review"></div>
            <p>{description}</p>
            <div className="stars-container">
                <img src="src/assets/icons/star.svg" alt="Star" />
                <img src="src/assets/icons/star.svg" alt="Star" />
                <img src="src/assets/icons/star.svg" alt="Star" />
                <img src="src/assets/icons/star.svg" alt="Star" />
                <img src="src/assets/icons/star.svg" alt="Star" />
            </div>
        </div>
    );
};

export default ClientReviewCard;