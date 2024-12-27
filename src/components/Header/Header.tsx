import "./Header.css";

export default function Header() 
{

    const whatsappLink = "https://wa.me/5534991610712?text=Olá%2C%20entrei%20em%20contato%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20seu%20escritório%20de%20advocacia.";

    return (
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <a href="https://google.com">
                        <img src="src\assets\images\logo.png" alt=""/>
                    </a>
                    <p>J Rodrigues Advocacia</p>
                </div>

                <div className="right-header-container">

                    <div className="informations-container">

                        <a href="https://maps.app.goo.gl/aSBVCkUpyWzCpD6J9" target="_blank">
                            <span>
                                <img src="src\assets\icons\location.svg"/>
                                Uberaba - MG | João Aquino Silva e Oliveira, 405
                            </span>
                        </a>
                        
                        <a href={whatsappLink} target="_blank">
                            <span>
                                <img src="src\assets\icons\phone.svg"/>
                                (34) 99161-0712
                            </span>
                        </a>
                        
                    </div>

                    <nav className="links-nav-container">
                        <a href="#practice-cards-containerabout-us-container"><span></span>Áreas de atuação</a>
                        <a href="#about-us-container"><span></span>Nossa equipe</a>
                        <a href="#client-reviews"><span></span>Avaliações</a>
                        <a href="#footer-container"><span></span>Contato</a>
                    </nav>

                </div>
            </div>
        </header>
    );
}
