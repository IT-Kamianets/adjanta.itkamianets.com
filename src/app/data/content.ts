export const DANCE_STYLES = [
  {
    id: 'hiphop',
    title: 'Гіп-Гоп',
    ageGroup: '7-16 років',
    description: 'Динамічний та енергійний стиль вуличної хореографії. Опануй ритм, ізоляцію та самовираження.',
    color: 'from-fuchsia-500/20 to-transparent'
  },
  {
    id: 'contemporary',
    title: 'Контемпорарі',
    ageGroup: '9+ років',
    description: 'Поєднання кількота танцювальних жанрів: модерну, джазу, ліричного та класичного балету.',
    color: 'from-cyan-400/20 to-transparent'
  },
  {
    id: 'breakdance',
    title: 'Брейк-данс',
    ageGroup: '6-14 років',
    description: 'Атлетичний стиль вуличного танцю. Вивчай силові елементи, футворк та фризи у безпечному середовищі.',
    color: 'from-fuchsia-500/20 to-transparent'
  },
  {
    id: 'jazzfunk',
    title: 'Джаз-фанк',
    ageGroup: '8-17 років',
    description: 'Комерційний стиль, що поєднує джаз, гіп-гоп та бурлеск. Висока енергія та експресія.',
    color: 'from-cyan-400/20 to-transparent'
  }
];

export const SCHEDULE = [
  {
    day: 'Понеділок / Середа',
    classes: [
      { time: '16:00 - 17:00', style: 'Гіп-Гоп (Діти)', coach: 'Олексій' },
      { time: '17:15 - 18:45', style: 'Брейк-данс', coach: 'Михайло' },
      { time: '19:00 - 20:30', style: 'Контемпорарі', coach: 'Олена' }
    ]
  },
  {
    day: 'Вівторок / Четвер',
    classes: [
      { time: '16:30 - 17:30', style: 'Джаз-фанк', coach: 'Марія' },
      { time: '17:45 - 19:15', style: 'Гіп-Гоп (Підлітки)', coach: 'Олексій' },
      { time: '19:30 - 21:00', style: 'Контемпорарі (Про)', coach: 'Олена' }
    ]
  },
  {
    day: 'П\'ятниця',
    classes: [
      { time: '17:00 - 18:30', style: 'Імпровізація', coach: 'Команда' },
      { time: '18:45 - 20:15', style: 'Спеціальні воркшопи', coach: 'Гості' }
    ]
  }
];

export const CONTACTS = {
  address: 'м. Кам\'янець-Подільський, вул. Лесі Українки, 25',
  phone: '050 692 6163',
  phoneFormatted: '+38 050 692 6163',
  instagram: 'https://www.instagram.com/adjanta_dance_center',
  facebook: 'https://www.facebook.com/AdjantaDanceCenter/',
  tiktok: 'https://www.tiktok.com/@adjantadc',
  email: 'indiradjanta@gmail.com'
};
