import markupHbs from '../templates/menu-items.hbs';
import menu from '../data/menu.json';

const ref = {
  menuList: document.querySelector('.js-menu'),
  checkbox: document.querySelector('.theme-switch__toggle'),
  body: document.body,
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

ref.menuList.insertAdjacentHTML('beforeend', markupHbs(menu));
const localTheme = localStorage.getItem('theme');
const currentTheme = localTheme === null ? Theme.LIGHT : localTheme;

ref.body.classList.add(currentTheme);
ref.checkbox.addEventListener('change', changeTheme);

ref.checkbox.checked = localStorage.getItem('theme') === Theme.DARK;

function changeTheme({ target: { checked } }) {
  if (checked) {
    toggleTheme(Theme.DARK, Theme.LIGHT);
  } else {
    toggleTheme(Theme.LIGHT, Theme.DARK);
  }
}

function toggleTheme(add, rem) {
  ref.body.classList.replace(rem, add);
  localStorage.setItem('theme', add);
}
