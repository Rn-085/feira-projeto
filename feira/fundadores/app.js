// Menu dropdown logic for mobile
const menuBtn = document.getElementById('menuBtn');
const menuDropdown = document.getElementById('menuDropdown');

menuBtn.addEventListener('click', () => {
  const isOpen = menuDropdown.style.display === 'flex';
  menuDropdown.style.display = isOpen ? 'none' : 'flex';
});

window.addEventListener('click', function(e) {
  if (!menuBtn.contains(e.target) && !menuDropdown.contains(e.target)) {
    menuDropdown.style.display = 'none';
  }
});