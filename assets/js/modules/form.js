export function initForm() {
    const form = document.getElementById('partner-form');
    const formFeedback = document.getElementById('form-feedback');
    const btnSubmit = document.getElementById('btn-submit');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (btnSubmit) {
            btnSubmit.innerHTML = 'Enviando... <i class="fa-solid fa-spinner fa-spin" style="margin-left: 6px;"></i>';
            btnSubmit.disabled = true;
        }

        setTimeout(() => {
            if (formFeedback) formFeedback.style.display = 'block';
            form.reset();
            
            if (btnSubmit) {
                btnSubmit.innerHTML = 'Quero ser parceiro <i class="fa-solid fa-arrow-right" style="margin-left: 6px;"></i>';
                btnSubmit.disabled = false;
            }

            setTimeout(() => {
                if (formFeedback) formFeedback.style.display = 'none';
            }, 6000);
        }, 1200);
    });
}