describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');// Зашли на сайт

         cy.get('#mail').type('german@dolnikov.ru');// Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1');// Ввели верный пароль
         cy.get('#loginButton').click();// Нажал войти 

         cy.get('#messageHeader').contains('Авторизация прошла успешно');// Проверяю что просле авторизации виден текст
         cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
         
 
     })
    })
    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');// Зашли на сайт
        
        cy.get('#mail').type('german@dolnikov.ru');// Ввели верный логин
        cy.get('#pass').type('iLoveqastudiow');// Ввели неверный пароль
        cy.get('#loginButton').click();// Нажал войти 

        cy.get('#messageHeader').contains('Такого логина или пароля нет');// Проверяю что видна ошибка авторизации
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
        

    })
    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/');// Зашли на сайт
    
        cy.get('#mail').type('german@dolnikop.ru');// Ввели верный логин
        cy.get('#pass').type('iLoveqastudiow');// Ввели неверный пароль
        cy.get('#loginButton').click();// Нажал войти 

        cy.get('#messageHeader').contains('Такого логина или пароля нет');// Проверяю что видна ошибка авторизации
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
})

it('Неправильная валидация без @ ', function () {
    cy.visit('https://login.qa.studio/');// Зашли на сайт

    cy.get('#mail').type('germandolnikop.ru');// Ввели почту без @
    cy.get('#pass').type('iLoveqastudio1');// Ввели верный пароль
    cy.get('#loginButton').click();// Нажал войти 

    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// Проверяю что видна ошибка валидации
    cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
})
it(' Буквы разного регистра в логине ', function () {
    cy.visit('https://login.qa.studio/');// Зашли на сайт

    cy.get('#mail').type('GerMan@Dolnikov.ru');// Ввели почту буквами разного регистра
    cy.get('#pass').type('iLoveqastudio1');// Ввели верный пароль
    cy.get('#loginButton').click();// Нажал войти 

    cy.get('#messageHeader').contains('Авторизация прошла успешно');// Проверяю что просле авторизации виден текст
    cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
})
it(' Проверка востановления пароля ', function () {
    cy.visit('https://login.qa.studio/');// Зашли на сайт

    
    cy.get('#forgotEmailButton').click();// На забыли пароль
    cy.get('#mailForgot').type('german@dolnikop.ru'); // Ввел почту для востановления
    cy.get('#restoreEmailButton').click();// Нажал отправить код

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// Проверяю на совпадения текст
    cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
})
describe('Проверка покупки нового аватара', function () {                 // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[id="k_email"]').type('roman.semnov.1994@gmail.com');                   // вводим логин
         cy.get('input[id="k_password"]').type('Gokersmeh1994');               // вводим пароль
         cy.get('button[type="submit"]').click();                // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header_card_trainer').click();            // Клик в шапке на аву тренера
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаем кнопку Смена аватара
         cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
         cy.get('.card_number').type('4620869113632996');                     // вводим номер карты
         cy.get('.card_csv').type('125');                             // вводим CVV карты
         cy.get('.card_date').type('1226');                           // вводим срок действия карты
         cy.get('.card_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаем кнопку Оплатить
         cy.get('.threeds_number').type('56456');                            // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения об успешной покупке
     });
 });




   
