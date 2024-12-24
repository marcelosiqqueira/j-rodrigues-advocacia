import ProfileCard from '../ProfileCard/ProfileCard';
import { profileData } from '../ProfileCard/profileData';
import './ProfileSection.css'

export default function ProfileSection() {

    return (
        <section className='profile-section-container'>
        {profileData.map((profile) => (
            <ProfileCard
            key={profile.id}
            name={profile.name}
            image={profile.image}
            description={profile.description}
            oab={profile.oab}
            whatsappLink={profile.whatsappLink}
            />  
        ))}
        </section>
    );
}