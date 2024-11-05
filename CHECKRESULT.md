# Результат проверки

## Задача 1.
- `footer` должен располагаться внизу страницы - **принято**
- `header` всегда видно при скролле - **принято**
- Верстка `header`, `footer` в соответствии с макетом - **доработать**
- Выдвигающаяся панель в планшетной и мобильной версиях - **доработать**

### Описания недочетов
1. В `header` поле поиска не соответствует макету, отсуствует кнопка поиска с иконкой.
2. В `header`, где кнопка "Каталог" выпадающий список несоответвуют отступы. При клике на кнопку отсутствует "крестик". Ссылки списка не реагируют на наведение (хотя бы просто подчеркивать, когда наводится на них курсор). Иконки корзины и "сердца" тоже не имеют реакции наведения.
3. В `footer` опечатка в "Разработано" и "LOBUT DIGITAL" по макету подчеркнуто. Ссылки  в не реагируют на наведение. Элементы "Каталог", "Категории", "Информация" и "Контакты" являются заголовками колонок (h3/h4), а не ссылками. Адрес не должен являться ссылкой.

### Общие комментарии
В `styles.scss` необходимо поработать с оформлением. Между блоками необходимо разделяющую строку, вложенности должно быть не более 3-х.
Пример оформления:
```
/* === bad === */
.left-menu-top {
    margin: 12px 20px auto 20px;
    color: $text-darker;
    height: 100%;
    &__header{
        padding-bottom: 20px;
    }

    &__main {
    
        li {
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        &__btn {
            padding: 0;
        }
        &__list {
            li {
                margin-bottom: 12px;
                &:first-child {
                    margin-top: 12px;
                }
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
}
.mob-bot {
    width: 240px;
    justify-content: center;
    padding-bottom: 10px;
    gap: 20px;
    &__loc {
        gap: 4px;
    }
}

/* === best === */
.left-menu-top {
    margin: 12px 20px auto 20px;
    color: $text-darker;
    height: 100%;

    &__header{
        padding-bottom: 20px;
    }
}

&__main {
    li {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    &__btn {
        padding: 0;
    }

    &__list {
        li {
            margin-bottom: 12px;

            &:first-child {
                margin-top: 12px;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}

.mob-bot {
    width: 240px;
    justify-content: center;
    padding-bottom: 10px;
    gap: 20px;

    &__loc {
        gap: 4px;
    }
}
```

Однако в данном примере лучше вообще пересмотреть классы и продумать структуру лучше, но это не критично. **Необходимо** код делать **ЧИТАЕМЫМ**.