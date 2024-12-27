import './Footer.css';

export default function Footer() {

    return (
        <footer className="footer" id="footer-container">

            <div className="footer-container">
                <div className="footer-logo-container">
                    <img src="src\assets\images\logo.png" alt="Logo" />
                    <p>J Rodrigues Advocacia</p>
                </div>

                <div className="practice-areas-footer">

                    <h4>ÁREAS DE ATUAÇÃO</h4>

                    <ul>
                        <a href="#practice-cards-container">
                            <span className='bottom-line-footer'></span>
                            Vara Da Família
                        </a>

                        <a href="#practice-cards-container">
                            <span className='bottom-line-footer'></span>
                            Direito Trabalhista
                        </a>

                        <a href="#practice-cards-container">
                            <span className='bottom-line-footer'></span>
                            Vara Da Família
                        </a>

                        <a href="#practice-cards-container">
                            <span className='bottom-line-footer'></span>
                            Direito Trabalhista
                        </a>

                        <a href="#practice-cards-container">
                            <span className='bottom-line-footer'></span>
                            Vara Da Família
                        </a>

                        <a href="#practice-cards-container">
                            <span className='bottom-line-footer'></span>
                            Direito Trabalhista
                        </a>
                    </ul>
                </div>

                <div className="contact-container">

                    <h4>CONTATO</h4>

                    <div className="contacts-footer">

                        <a
                            href='https://www.instagram.com/jrodriguesadvocacia.adv'
                            target='_blank'
                        >
                            <img src="src\assets\icons\instagram.svg" alt="Location" />
                            <span>@jrodriguesadvocacia.adv</span>
                        </a>

                        <a
                            href='https://www.facebook.com/jrodriguesadvocacia.adv/'
                            target='_blank'
                        >
                            <img src="src\assets\icons\fb.svg" alt="Location" />
                            <span>@jrodriguesadvocacia.adv</span>
                        </a>

                        <a
                            href='https://mail.google.com'
                            target='_blank'
                        >
                            <img src="src\assets\icons\email.svg" alt="Location" />
                            <span>@jrodriguesadvocacia.adv</span>
                        </a>

                    </div>
                    
                    
                </div>
            </div>

            

            <div className="bottom-footer">
                    <img src="src\assets\icons\wpp.svg" alt="Wpp" />
                    <p>(34) 99161-0712 | Atendimento Personalizado no WhatsApp</p>
            </div>            
        </footer>
    );

}
