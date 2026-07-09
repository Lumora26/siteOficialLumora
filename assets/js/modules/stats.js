export function initStats() {
    const statNumbers = document.querySelectorAll('.bar-stat-number');
    const statsBar = document.querySelector('.stats-bar');

    if (statNumbers.length === 0 || !statsBar) return;

    let animatedStats = false;

    const animateCounters = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            let current = 0;
            const duration = 1500;
            const increment = target / (duration / 16);

            const updateCount = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = stat.getAttribute('data-target').includes('99') || stat.getAttribute('data-target').includes('100')
                        ? Math.floor(current) + '%'
                        : '+' + Math.floor(current);
                    requestAnimationFrame(updateCount);
                } else {
                    stat.textContent = stat.getAttribute('data-target').includes('99') || stat.getAttribute('data-target').includes('100')
                        ? target + '%'
                        : '+' + target;
                }
            };
            updateCount();
        });
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animatedStats) {
                animateCounters();
                animatedStats = true;
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    statsObserver.observe(statsBar);
}