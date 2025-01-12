document.querySelectorAll('.button2').forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Toggle visibility of the content
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});