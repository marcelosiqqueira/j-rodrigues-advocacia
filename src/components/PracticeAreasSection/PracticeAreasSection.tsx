import './PracticeAreasSection.css'; 
import CardArea from '../CardArea/CardArea';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function PracticeAreasSection() {
    
    return (
        <section className='practice-areas-section'>
            <div className="practice-areas-container">
                <SectionTitle text="ÁREAS DE ATUAÇÃO" />
                
                <div className="practice-cards-container">

                    <ul>
                        <CardArea title="VARA DA FAMÍLIA" image="src\assets\images\vara_da_familia.jpg"></CardArea>
                        <CardArea title="VARA DA FAMÍLIA" image="src\assets\images\vara_da_familia.jpg"></CardArea>
                        <CardArea title="VARA DA FAMÍLIA" image="src\assets\images\vara_da_familia.jpg"></CardArea>
                        <CardArea title="VARA DA FAMÍLIA" image="src\assets\images\vara_da_familia.jpg"></CardArea>
                        <CardArea title="VARA DA FAMÍLIA" image="src\assets\images\vara_da_familia.jpg"></CardArea>
                        <CardArea title="VARA DA FAMÍLIA" image="src\assets\images\vara_da_familia.jpg"></CardArea>
                        <CardArea title="VARA DA FAMÍLIA" image="src\assets\images\vara_da_familia.jpg"></CardArea>
                        <CardArea title="VARA DA FAMÍLIA" image="src\assets\images\vara_da_familia.jpg"></CardArea>        
                    </ul>

                </div>
            </div>
        </section>
    );
}