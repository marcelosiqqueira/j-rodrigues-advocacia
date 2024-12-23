import './PracticeAreasSection.css'; 
import CardArea from '../CardArea/CardArea';

export default function PracticeAreasSection() {
    
    return (
        <section className='practice-areas-section'>
            <div className="practice-areas-container">
                <div className="section-title">
                    <span className='top-line-title'></span>
                    <h2>Áreas de atuação</h2>        
                    <span className='bottom-line-title'></span>
                </div>
                
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