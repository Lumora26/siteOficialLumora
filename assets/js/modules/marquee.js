export function initMarquee() {
    const track = document.getElementById('testimonials-track');
    
    if (!track) return;

    const originalCards = Array.from(track.children);

    // Duplica dinamicamente todos os cards existentes para permitir o letreiro infinito
    originalCards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });
}