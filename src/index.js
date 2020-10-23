import './styles.css';
import menu from './menu.json';
import sourceTemplate from "./templates/menuTemplate.hbs"

// Тема
// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.
// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое перечисление.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const toolbar = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
// ________________ПЕРВЫЙ ВАРИАНТ
// if (!localStorage.getItem('theme')) {
//   localStorage.setItem('theme', Theme.LIGHT);
//   body.classList.add('light-theme');
// } else {
//   if (localStorage.getItem('theme') === 'dark-theme') {
//     body.classList.add('dark-theme');
//     toolbar.checked = true;
//   } else {
//     body.classList.add('light-theme');
//   }
// }
// toolbar.addEventListener('click', () => {
//   if (toolbar.checked) {
//     localStorage.setItem('theme', Theme.DARK);
//     body.classList.replace('light-theme', 'dark-theme');
//   } else {
//     localStorage.setItem('theme', Theme.LIGHT);
//     body.classList.replace('dark-theme', 'light-theme');
//   }
// });

// ________________КОРОТКИЙ ВАРИАНТ
const currentTheme = localStorage.getItem('theme') || Theme.LIGHT;
body.classList.add(currentTheme);
currentTheme === Theme.DARK ? (toolbar.checked = true) : '';

toolbar.addEventListener('click', () => {
  if (toolbar.checked) {
    localStorage.setItem('theme', Theme.DARK);
    body.classList.replace('light-theme', 'dark-theme');
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.replace('dark-theme', 'light-theme');
  }
});

// Шаблонизация
// Используя шаблонизатор Handlebars создай шаблон одного элемента меню. После чего, используя шаблон, создай разметку всего меню по данным из menu.json и добавь в DOM в ul.js-menu.
// Для иконок используется библиотека Material Icons, линк на веб-фонт уже есть в исходном HTML.
// Ниже указана разметка элемента меню которая должна получаться по шаблону (данные будут разные для каждого объекта).

const menuList = document.querySelector(".js-menu") 
menu.forEach(el => {
  menuList.innerHTML += sourceTemplate(el)
})