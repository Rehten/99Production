//Переменные для всех блоков - можно сказать, что это модель

//блок услуг

const radioBlock = {
    name: 'Реклама на радио',
    rowsDesktop: [
        `Рекламное агенство 99 Production сделает Вашу рекламу на радио
                    запоминающейся, эффективной и результативной.`,
        `Мы разработаем и реализуем оптимальную концепцию продвижения
                      Ваших товаров и услуг.`,
        `У нас есть «секретное оружие» - эксклюзивное предложение,
                      которое отличает нас от конкурентов.
                      Мы создаем уникальные спец проекты и «радио-игры», которые
                      помогают продвигать Ваш товар или услугу не раздражая
                      слушателей.`,
        `Мы поможем разработать, создать и разместить в эфире уникальную
                      авторскую радиопрограмму, написанную специально под Ваш
                      бренд!`,
        `Наша компания уже много лет сотрудничает с самыми популярными
                      радиостанциями.`
    ],
    rowsMobile: [
        'Производство видео/аудио продукции, создание вирусных роликов',
        'Наружная реклама',
        'Интерьерная реклама',
        'Рекламная и деловая полиграфия',
        'Корпоративные подарки'
    ],
    header: '',
    identificator: 'Radio',
    imageSrc: 'assets/images/service/services-1.jpg'
}

const videoBlock = {
    name: 'Видеосъемка',
    rowsDesktop: [
        `Видео`,
        `Видео`,
        `Видео`,
        `Видеосъемка`,
        `Видеосъемка`
    ],
    rowsMobile: [
        'Видеосъемка мобила',
        'Видеосъемка мобила',
        'Видеосъемка мобила',
        'Видеосъемка мобила',
        'Видеосъемка мобила'
    ],
    header: '',
    identificator: 'Video',
    imageSrc: 'assets/images/service/services-2.jpeg'
}

const outerBlock = {
    name: 'Наружная реклама',
    rowsDesktop: [
        `Наружная реклама`,
        `Наружная реклама`,
        `Наружная реклама`,
        `Наружная реклама`,
        `Наружная реклама`
    ],
    rowsMobile: [
        'Наружная реклама мобила',
        'Наружная реклама мобила',
        'Наружная реклама мобила',
        'Наружная реклама мобила',
        'Наружная реклама мобила'
    ],
    header: '',
    identificator: 'Outer',
    imageSrc: 'assets/images/service/services-1.jpg'
}

const metroBlock = {
    name: 'Реклама в метро',
    rowsDesktop: [
        `Реклама в метро`,
        `Реклама в метро`,
        `Реклама в метро`,
        `Реклама в метро`,
        `Реклама в метро`
    ],
    rowsMobile: [
        'Реклама в метро мобила',
        'Реклама в метро мобила',
        'Реклама в метро мобила',
        'Реклама в метро мобила',
        'Реклама в метро мобила'
    ],
    header: '',
    identificator: 'Metro',
    imageSrc: 'assets/images/service/services-2.jpeg'
}

const bloggersBlock = {
    name: 'Реклама у блогеров',
    rowsDesktop: [
        `Реклама у блогеров`,
        `Реклама у блогеров`,
        `Реклама у блогеров`,
        `Реклама у блогеров`,
        `Реклама у блогеров`
    ],
    rowsMobile: [
        'Реклама у блогеров мобила',
        'Реклама у блогеров мобила',
        'Реклама у блогеров мобила',
        'Реклама у блогеров мобила',
        'Реклама у блогеров мобила'
    ],
    header: '',
    identificator: 'Bloggers',
    imageSrc: 'assets/images/service/services-1.jpg'
}

const servicesList = [radioBlock, videoBlock, outerBlock, metroBlock, bloggersBlock]
module.exports = servicesList