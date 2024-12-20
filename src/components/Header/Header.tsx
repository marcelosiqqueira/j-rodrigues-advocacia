import "./Header.css";

export default function Header() 
{
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
                        <span>
                            <img src="src\assets\icons\location.svg"/>
                            Uberaba - MG | João Aquino Silva e Oliveira, 405
                        </span>

                        <span>
                            <img src="src\assets\icons\phone.svg"/>
                            (34) 99161-0712
                        </span>
                    </div>

                    <nav className="links-nav-container">
                        <a href="#areas"><span></span>Áreas de atuação</a>
                        <a href="#equipe"><span></span>Nossa equipe</a>
                        <a href="#avaliacoes"><span></span>Avaliações</a>
                        <a href="#contato"><span></span>Contato</a>
                    </nav>

                </div>
            </div>
        </header>
    );
}
