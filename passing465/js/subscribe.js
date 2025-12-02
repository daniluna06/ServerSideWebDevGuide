document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[name="subscribe"]');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let body = document.body;
        let originalColor = getComputedStyle(body).backgroundColor;

        let colors = [
            '#ffeaf7',
            '#e3f5ff',
            '#e6ffe3',
            '#fff5e6',
            originalColor
        ];

        let i = 0;

        function flashNext() {
            if (i < colors.length) {
                body.style.backgroundColor = colors[i];
                i++;
                setTimeout(flashNext, 120);
            } else {
                body.style.backgroundColor = originalColor;

                let params = new URLSearchParams(new FormData(form));
                let action = 'subscribe.html';
                window.location.href = action + '?' + params.toString();
            }
        }

        flashNext();
    });
});
