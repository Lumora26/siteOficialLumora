export function initMockup() {
    const tabItems = document.querySelectorAll('.mockup-nav-item');
    const tabContents = document.querySelectorAll('.mockup-tab-content');
    const tabletName = document.getElementById('tablet-name');
    const phoneName = document.getElementById('phone-name');

    if (tabItems.length === 0) return;

    const tabTexts = {
        'tab-historia': { tab: 'História', tablet: 'Maria Aparecida', phone: 'Maria A.' },
        'tab-galeria': { tab: 'Galeria', tablet: 'Álbum de Fotos', phone: 'Fotos' },
        'tab-homenagens': { tab: 'Homenagens', tablet: 'Mensagens de Apoio', phone: 'Recados' },
        'tab-cronologia': { tab: 'Linha do Tempo', tablet: 'Cronologia de Vida', phone: 'Linha T.' }
    };

    tabItems.forEach(item => {
        item.addEventListener('click', () => {
            tabItems.forEach(i => i.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            item.classList.add('active');
            const targetTabId = item.getAttribute('data-tab');
            const targetContent = document.getElementById(targetTabId);
            
            if (targetContent) {
                targetContent.classList.add('active');
            }

            if (tabTexts[targetTabId]) {
                if (tabletName) tabletName.textContent = tabTexts[targetTabId].tablet;
                if (phoneName) phoneName.textContent = tabTexts[targetTabId].phone;
            }
        });
    });
}