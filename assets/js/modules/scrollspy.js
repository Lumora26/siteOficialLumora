export function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#navbar a');

    if (sections.length === 0 || navLinks.length === 0) return;

    // Configurações do observador: ativa o link quando a seção ocupa a parte central da tela
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    // Compara o link do menu (ex: #sobre) com o ID da seção atual
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Caso especial: ao voltar totalmente para o topo da página, força "Home" a ficar ativo
    window.addEventListener('scroll', () => {
        if (window.scrollY < 200) {
            navLinks.forEach(link => link.classList.remove('active'));
            const homeLink = document.querySelector('#navbar a[href="#"]');
            if (homeLink) homeLink.classList.add('active');
        }
    });
}