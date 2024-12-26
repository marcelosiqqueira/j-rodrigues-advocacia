import ClientReviewCard from "../ClientReviewCard/ClientReviewCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./ClientReviewsSection.css"
import { clientReviewsData } from "./clientReviewsData";

export default function ClientReviewsSection(){

    return (
        <section className="client-reviews-section-container">
            <SectionTitle text="DEPOIMENTO DOS CLIENTES" />

            <p className="client-reviews-section-text">
            Reunimos alguns depoimentos de clientes que já utilizaram os serviços do nosso escritório e nos recomendam a todos, destacando a qualidade e a competência do trabalho realizado.
            </p>

            <div className="reviews-container">

                {clientReviewsData.map((clientReview) => (
                    <ClientReviewCard
                        key={clientReview.id}
                        name={clientReview.name}
                        image={clientReview.image}
                        description={clientReview.description}
                    />
                ))}

            </div>

        </section>
    );

}