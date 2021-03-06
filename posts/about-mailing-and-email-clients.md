---
title: Про электронные письма, рассылки и клиенты для почты
description: Бомблю с email-маркетологов, рассказываю, почему вёрстка рассылок - это не так-то и просто, плюс сокрушаюсь о почтовых клиентах
date: 2020-12-21
layout: layouts/post-layout.njk
tags: 
  - 'post'
  - 'work'
---
<!-- Excerpt Start -->
Большинству пользователей не нужен почтовый клиент.
<!-- Excerpt End -->

Согласитесь, что у вас, скорее всего, один личный почтовый ящик, которым вы регистрируетесь в социальных сетях, на сайтах и ведёте с него переписку.

Зачем вам в этом случае специальная программа, если в современных операционных системах на рабочий стол можно поставить даже ссылку на веб-сайт?

Тем не менее, в современных Windows и большинстве Linux-дистрибутивов, в macOS, iOS и на Android-устройствах есть свой почтовый клиент по умолчанию, есть он и в пакете Microsoft Office или Microsoft Office 365.

Проблема не в том, что эти программы занимают место. Дело в том, что они тянут за собой многолетние зависимости, из-за которых почтовые рассылки не могут развиваться и застряли в вёрстке образца 2013 года.

Возьмём, к примеру, головную боль большинства email-маркетологов: Outlook.

Я не говорю о том, что вёрстка писем, в принципе, застряла на уровне таблиц и очень тяжело реагирует на современные CSS-свойства. Большинству верстальщиков, чтобы реализовать что-то современное и интересное для потенциальных клиентов, нужно брать табличный каркас, помещать внутрь обычные блоковые элементы, затем добавлять внутрь ещё таблицы при необходимости.

Не говорю про то, что для корректного отображения на большинстве устройств вам будет нужно использовать повышающие приоритет правила стиля, и дублировать эти правила не только в разделе стилей, но и дублировать их «в инлайне».
Не упоминаю то, что большинство тех, кто получит письмо, откроют его с мобильного, а это усложнит вёрстку, если вы писали что-то «в инлайне».

Так дополнительно есть свойства, которые просто не сработают в Internet Explorer 9, на котором базируется Oultook, а потому нужно добавлять свойства, которые хоть ограниченно, но продублируют функционал при помощи верстки из 2013 года.

И совсем забыл сказать, что внешний вид письма может определяться ещё и стилями той платформы, на которой зарегистрирован почтовый ящик клиента. Например Яндекс.Почта вмешивается в CSS писем. И это тоже стоит учитывать.

Ну и, наконец, любимая многими тёмная тема, которая уже на системном уровне нещадно перекрашивает письма.

В большинстве современных компаниях вёрсткой электронных писем занимается email-маркетолог, который мог до этого не иметь никакого отношения к веб-разработке. Чаще всего эти компании пользуются услугами верстальщиков партнёров, которые предоставляют сервисы рассылки как платформу и сервис. Случаются ситуации, когда сроки и планирование рассылок сдвигаются, а потому письмо нужно сделать в более срочном порядке. Тогда начинается вёрстка в стиле: «копировать-вставить». При этом из-за за непонимания основ веб-разработки код зачастую может копироваться произвольно, иногда без закрывающих тегов, которые подставит «поумневший» браузер или клиент. Из-за такой «разработки» ошибки накапливаются со временем, переходя из одного письма в каждое следующее.

Чаще всего вёрстка подобных писем подходит для стандартных рассылок по обычному графику. Там нет ничего сложного: баннер, товары, какой-то текст, пара кнопок. Клиентам это надоедает, а потом снижается количество открытий писем, а значит и переходов на сайт. Падает статистика и прибыль. Зато приближается какой-нибудь большой праздник, ради которого стоит сделать что-то выдающееся. А значит в лучшем случае верстальщик из платформы, в худшем сам маркетолог без знаний, будет вносить изменения в код «методом тыка». Код станет ещё более нечитаемым, а ошибка станет транслироваться дальше до тех пор, пока «умный» браузер не перестанет обрабатывать этот код, а представитель платформы попросит больше времени (и, возможно, денег) на полное переписывание кода. Тогда приглашается штатный веб-разработчик, привыкший к «гридам», «флексам» и прочим крутым современным штукам.

Итак, мы имеем классический «технический долг», который тянет назад за собой не только конкретные письма, но и всю разработку.

Я очень долго искал для себя качественный почтовый клиент. Я пользуюсь несколькими почтовыми ящиками, которые удобнее собирать именно там, а не настраивать сложную переадресацию, которая однажды приведёт к тому, что она сломается, а вы забудете пароль и потеряете переписку или доступы к сервисам. Кроме того, что клиент позволяет просматривать почту оффлайн, он собирает почту с нескольких ящиков в один лист для чтения.

И тут выясняется, что из современных клиентов умеет всё это делает только Apple Mail и [Geary](https://wiki.gnome.org/Apps/Geary). Первый невозможно получить, не пользуясь яблочной техникой, второй же включают в стартовый пакет программ для Linux-дистрибутивнов настолько редко, что о нём очень мало кто слышал. На Windows всё настолько плохо, что я даже не вспомню хороший почтовый клиент, который решал бы мою задачу.

И я всё равно уверен, что вам не стоит ими пользоваться, если можно пользоваться веб-версией вашего почтового ящика. А компаниям жизненно необходимо нанимать не просто какого-то там email-маркетолога, а специалиста со знанием почтовой вёрстки, которой, кстати, особенно нигде и не учат, потому что считается, что «ну уж с таблицами справятся все». Вот и остаётся всем желающим изучать [заметки Артура Коха от 2015 года](https://habr.com/ru/users/dudeonthehorse/posts/) и редкие посты от разных профессионалов, например, [Неттологии о мобильной вёрстке для писем](https://habr.com/ru/company/netologyru/blog/324970/).