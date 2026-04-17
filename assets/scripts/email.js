// Email Copy Functionality
document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-email');
    const feedback = document.getElementById('copy-feedback');
    const email = 'udorburu@gmail.com';

    if (copyBtn && feedback) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(email).then(() => {
                feedback.classList.remove('opacity-0');
                setTimeout(() => {
                    feedback.classList.add('opacity-0');
                }, 2000);
            });
        });
    }
});
