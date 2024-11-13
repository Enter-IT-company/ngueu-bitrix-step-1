# НГУЭУ-Битрикс. Этап I. Верстка сайта «Гурман Маркет»

### Макет
Будут проводиться работы с макетами "Главная", "Каталог", "Карточка товара".

<a href="https://www.figma.com/design/wYG1R9fK7T5MLz9LEwKQc5/%D0%93%D1%83%D1%80%D0%BC%D0%B0%D0%BD?node-id=47-88&node-type=canvas&t=lu9OjzmTosDCfDtN-0" target="_blank">Ссылка на Figma</a>

### Подключенные библиотеки
- **Bootstrap 5.3** - UI-фреймворк (кнопки, карточки, сетки, модальные окна и др. элементы) - <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">Документация</a>
- **SwiperJS 11.1.14** - библиотека для формирования адаптивных слайдеров - <a href="https://swiperjs.com/swiper-api" target="_blank">Документация</a>

### Алгоритм работы
- Перед выполнением задачи ознакомиться с предоставленными документациями, поиск готового решения
- Соблюдать методологию <a href="https://ru.bem.info/methodology/naming-convention/" target="_blank">БЭМ</a>
- После завершения задачи **формировать коммит** с названием задачи
- **НЕ** приступать к следующей задаче, пока не принята текущая

### Задача 1. Формирование каркаса сайта.
- В файле `index.html` блок `footer` должен располагаться **всегда** внизу страницы, блок `header` при скролле должен быть всегда **виден** на экране.
- В соответствии с макетом сверстать блоки `header`, `footer`. Блоки должны отображаться корректно во всех экранах.
- Начиная с планшетной версии (см. документацию `Bootstrap`). Реализовать выдвигающуюся панель поверх страницы (готовая реализация в документации `Bootstrap`).
- Создать файлы `catalog.html`, `product.html` в той же директории, где расположен `index.html`. Продублировать весь код из файла `index.html`. Подписать в блоке `main` "Страница каталога", "Страница товара" соотвественно.

### Задача 2. Главная страница.
- Сформировать первый блок в виде слайдера на основе библиотеки `SwiperJS`.
- Сформировать "бегущую строку".
- Сформировать блок "Популярные категории" на основе сетки от `Bootstrap`.
- Сформировать блок "Новинки" в виде слайдера на основе библиотеки `SwiperJS`.
- Сформировать блок "О нас".
- Сформировать блок "Популярные товары" в виде слайдера на основе библиотеки `SwiperJS`.
- Сформировать блок "Интересное" на основе grid-сетки от `Bootstrap`. **ВАЖНО**: классическая сетка формируются с помощь `flexbox`, а grid-сетка с помощью `CSS Grid` - это разные технологии.
- Сформировать блок "Остались вопросы?". Кнопка должна вызывать модальное окно с формой (готовое решение есть в документации `Bootstrap`).
- Сформировать блок "Рецепты" в виде слайдера на основе библиотеки `SwiperJS`.
- Сформировать блок "FAQ" в виде аккордеона (готовое решение есть в документации `Bootstrap`).
- Если не сделано, сформировать блок "Контакты", карту взять с сервиса `Яндекс.Карты`. Телефоны должны быть в виде ссылки с пометкой `tel:` в атрибуте `href`.
- Страница должна корректно отображаться во **всех** экранах.

#### Лайфхак по верстке
На странице присутствуют несколько блоков с карточками: новинки, популярные товары, популярные категории и т.д., в которых находятся изображения. Браузер устроен таким образом, что пока не загрузится изображение, место для картинки "схлопывается" и сайт по мере загрузки начинает "прыгать". Чтобы этого избежать существует "лайфхак" от Netflix:
```
<!-- HTML -->
<div class="img-box">
    <img class="img" src="..." alt="..." />
</div>
```

```
/* CSS */
.img-box {
    position: relative;
    max-width: 100%;
    overflow: hidden;
    padding-top: 100%; /* высота картинки. Процент высчитывается пропорционально от ее ширины. */
}

.img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* или contain */
}
```

Таким образом, сайт перестанет "прыгать" при загрузке. При изменении размера экрана изображение будет автоматически масштабироваться сохраняя свои пропорции.