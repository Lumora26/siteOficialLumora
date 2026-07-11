export function initForm() {
    const form = document.getElementById('partner-form');
    const formFeedback = document.getElementById('form-feedback');
    const btnSubmit = document.getElementById('btn-submit');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento de página padrão

        // Feedback visual de carregamento no botão
        if (btnSubmit) {
            btnSubmit.innerHTML = 'Enviando... <i class="fa-solid fa-spinner fa-spin" style="margin-left: 6px;"></i>';
            btnSubmit.disabled = true;
        }

        // Prepara os dados para o envio
        const formData = new FormData(form);
        
        
        formData.append("access_key", "9bd89430-095f-48c9-a60a-9a38a691c433"); 

        // Envia os dados para a API do Web3Forms de forma assíncrona
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(async (response) => {
            const result = await response.json();
            
            if (response.status === 200) {
                // Exibe o banner verde de sucesso programado no CSS
                if (formFeedback) formFeedback.style.display = 'block';
                form.reset(); // Limpa os campos do formulário
            } else {
                console.error(result);
                alert("Ocorreu um erro no servidor. Por favor, tente enviar novamente mais tarde.");
            }
        })
        .catch(error => {
            console.error(error);
            alert("Não foi possível conectar ao servidor de envio. Verifique sua conexão.");
        })
        .finally(() => {
            // Restaura o estado original do botão
            if (btnSubmit) {
                btnSubmit.innerHTML = 'Quero ser parceiro <i class="fa-solid fa-arrow-right" style="margin-left: 6px;"></i>';
                btnSubmit.disabled = false;
            }

            // Oculta o banner de sucesso após 6 segundos
            setTimeout(() => {
                if (formFeedback) formFeedback.style.display = 'none';
            }, 6000);
        });
    });
}