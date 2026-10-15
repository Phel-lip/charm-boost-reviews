import { ArrowUpRight, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GOOGLE_REVIEWS } from "@/lib/reviews";

export function ReviewsSection() {
  return (
    <section id="avaliacoes" className="reviews-section scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reviews-heading">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">Avaliações</p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">Quem vem, <em>se sente especial.</em></h2>
          </div>
          <a className="reviews-source-link" href={GOOGLE_REVIEWS.mapsUrl} target="_blank" rel="noopener noreferrer">Ver no Google<ArrowUpRight aria-hidden="true" /></a>
        </div>

        <div className="reviews-grid">
          {GOOGLE_REVIEWS.excerpts.map((review) => (
            <figure key={review.text} className="salon-review">
              <MessageSquareQuote className="review-quote-icon" aria-hidden="true" />
              <blockquote><p>“{review.text}”</p></blockquote>
              <figcaption>
                <span className="review-category">{review.category}</span>
                <span className="review-origin">Avaliação pública · <time dateTime={review.date}>fev. 2025</time></span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="reviews-attribution">Trechos de avaliações públicas do Google, reproduzidos de um <a href={GOOGLE_REVIEWS.source} target="_blank" rel="noopener noreferrer">registro público</a>.</p>

        <div className="reviews-invitation">
          <div>
            <h3 className="font-display text-2xl">Foi atendida na Doce Charme?</h3>
            <p>Sua avaliação no Google ajuda outras mulheres a nos encontrarem.</p>
          </div>
          <Button variant="review" size="review" asChild>
            <a href={GOOGLE_REVIEWS.mapsUrl} target="_blank" rel="noopener noreferrer">Avaliar no Google<ArrowUpRight aria-hidden="true" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}