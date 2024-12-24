import React from 'react';

import "./ProfileCard.css";
import { ProfileCardProps } from './ProfileCard.types';


const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    image,
    description,
    oab,
    whatsappLink
}) => {

    return (
        
        <div className="profile-container">

            <div className="profile-name">
                <span className='top-line-title'></span>
                <h1> {name} </h1>      
                <span className='bottom-line-title'></span>
            </div> 
            
            <div className="profile-info-container">

                <div className="profile-info">
                    <p>{description[0]}</p>
                    <p>{description[1]}</p>
                    <br />
                    <span>
                        <img src="src/assets/icons/balance2.svg" alt="Balance" />
                        OAB/{oab}
                    </span>
                    <a 
                        href={whatsappLink}
                        target='_blank'
                    >
                    CHAMAR NO WHATSAPP
                    </a>
                </div>

                <div className="image-container">
                    <img src={image} alt="aa" />
                </div>

            </div>            
        </div>
    );
};

export default ProfileCard;