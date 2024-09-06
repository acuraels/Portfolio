// Функция для показа/скрытия меню
function toggleMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Закрытие меню при клике вне его области
window.onclick = function (event) {
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (!event.target.closest('.burger-menu') && !event.target.closest('.dropdown-menu'))
        dropdownMenu.style.display = 'none';
}
