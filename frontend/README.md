Путь: frontend

__package.json:__

-Пакет о версиях, скриптах и библиотеках.

__public:__

-Манифест файл приложения.

-Иконки и метаданные приложения.

__src:__

1)вспомогательные функции в папке utils:

-myTime.js для форматирования времени

-consts.js константы для рутинга страниц

2)Главный файлы: App.js AppRouter.js index.js routes.js

3)Используемые изображение в папке pictures

4)Различные страницы самого приложения в папке pages, также важные стили для каждой страницы(ImportantStyles) и страница ошибки

5)Используемы шрифты для текста в папке fonts

6)Компоненты для страниц в папке components:

-CommonElement: здесь лежат так сказать стандартные элементы, которые есть почти везде:

--BackButtonComponent: кнопка возвращения назад используется на таких страницах как: добавление задачи, просмотр задачи, редактирование задача

--ButtonComponent: кнопка добавления задачи, есть на странице со всеми задачами


-HeaderComponent: Здесь лежит компонент заголовка, который используется на страницах всех задач, редактирования и просмотра.

-TaskComponent: Компонент одной конкретной задачи, используется на странице всех задач.

-TaskEditComponent: Компонент редактирования задачи.

-TaskNewComponent: Компонент новой задачи.

-TaskWatchComponent: Компонент просмотра задачи включающий такие компоненты:

--DeleteButtonComponent: Компонент удаления задачи

--ModifyButtonComponent: Кнопка,а точнее изображение, которая используется на перехода на страницу редактирования.

--WatchTaskComponent: Компонент просмотра задачи.
