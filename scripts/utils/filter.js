const btnDropdown = document.querySelectorAll('.filter-dropdown button');

btnDropdown.forEach((btn) => {
    const up = btn.querySelector('.fa-chevron-up');
    const down = btn.querySelector('.fa-chevron-down');
    const optionsList = btn.parentElement.querySelector('.options');
    btn.addEventListener('click', () => {
        optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
        up.classList.toggle('active');
        down.classList.toggle('active');
    });
});
