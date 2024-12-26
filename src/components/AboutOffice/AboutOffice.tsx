import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutOffice.css";

export default function AboutOffice() {

    return (
        <section className="about-office-container">
            <SectionTitle text="TIME ESPECIALIZADO"/>

            <div className="about-office-info-container">

                <div className="left-about">
                    <p>
                        Id consequatur cumque aut aliquam odit ut quod inventore ut ducimus voluptas? Id voluptate error ex sint earum et facere alias aut corporis veritatis 33 corporis commodi vel error dignissimos. Ut nihil impedit id eveniet quia ut maxime explicabo qui voluptatem ipsam qui perspiciatis exercitationem.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet. Et consequatur dolores est voluptatibus laudantium et internos ipsam. Sed sint suscipit ut corrupti consequatur qui deserunt facilis est sunt rerum eum ullam voluptate sed pariatur consequatur. Id voluptate error ex sint earum et facere alias aut corporis veritatis 33 corporis commodi vel error dignissimos. Ut nihil impedit.
                    </p>
                    <a
                        href="https://maps.app.goo.gl/aSBVCkUpyWzCpD6J9"
                        className="localization-button"
                        target="_blank"
                    >
                        VER LOCALIZAÇÃO
                        <img src="src/assets/icons/location2.svg" alt="" />
                    </a>
                </div>

                <div className="image-office-container">
                    <img src="src/assets/images/office.jpg" alt="Office" />
                </div>

            </div>
        </section>
    );
}