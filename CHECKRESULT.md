# Результат проверки

## Задача 1.
- `footer` должен располагаться внизу страницы - **принято**
- `header` всегда видно при скролле - **принято**
- Верстка `header`, `footer` в соответствии с макетом - **принято**
- Выдвигающаяся панель в планшетной и мобильной версиях - **принято**

### Описания недочетов
1. В `header` длина поля поиска должна быть больше
2. В `header`, где кнопка "Каталог" происходит небольшой баг при смене иконки - надпись "Каталог" "прыгает". 
При клике надпись должна оставаться на месте. Подумай, как это можно решить.
3. В выдвигающийся панели нижняя кнопка по высоте не соответствует макету. Перепроверь padding.

### Памятка #1
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