document.addEventListener('DOMContentLoaded', function () {
    const pageToggle = document.getElementById('pageToggle');
    const BbPage = document.getElementById('BbPage');
    const LbPage = document.getElementById('LbPage');
    const toggleText = document.getElementById('toggleText');

    // Initially show your page
    BbPage.classList.add('active');

    pageToggle.addEventListener('change', function () {
        if (pageToggle.checked) {
            BbPage.classList.remove('active');
            BbPage.classList.add('hidden');
            LbPage.classList.remove('hidden');
            LbPage.classList.add('active');
            toggleText.textContent = "Liam Brandon ✍️";
        } else {
            LbPage.classList.remove('active');
            LbPage.classList.add('hidden');
            BbPage.classList.remove('hidden');
            BbPage.classList.add('active');
            toggleText.textContent = "Brandon Brazeau ✍️";
        }
    });
});

//ALSO USING THIS FILE FOR PDF VIEWING
document.addEventListener('DOMContentLoaded', () => {
    const fullscreenButtons = document.querySelectorAll('.fullscreen-btn');

    fullscreenButtons.forEach(button => {
        button.addEventListener('click', () => {
            const containerId = button.getAttribute('data-container');
            const container = document.querySelector(`.pdf-container[data-container="${containerId}"]`);

            if (!document.fullscreenElement) {
                container.requestFullscreen();
                container.classList.add('fullscreen');
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    container.classList.remove('fullscreen');
                }
            }
        });
    });
});
