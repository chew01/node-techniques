const setDropdown = () => {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => {
    const button = tab.querySelector('a');
    const menu = tab.querySelector('.drop-menu');
    button.addEventListener('mouseover', () => menu.classList.add('visible'));
    button.addEventListener('mouseout', () => menu.classList.remove('visible'));
    menu.addEventListener('mouseover', () => menu.classList.add('visible'));
    menu.addEventListener('mouseout', () => menu.classList.remove('visible'));
  });
};

export default setDropdown;
