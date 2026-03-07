export const GALLERY_ITEMS = [
  { title: 'Виступ на фестивалі', category: 'Dance Show', image: '/gallery/1.png', classes: 'md:col-span-2 md:row-span-2' },
  { title: 'Хіп-хоп тренування', category: 'Training', image: '/gallery/2.png', classes: 'md:col-span-1 md:row-span-1' },
  { title: 'Майстер-клас', category: 'Workshop', image: '/gallery/3.png', classes: 'md:col-span-1 md:row-span-1' },
  { title: 'Контемпорарі', category: 'Modern Dance', image: '/gallery/4.png', classes: 'md:col-span-2 md:row-span-1' },
  { title: 'Відкритий урок', category: 'Event', image: '/gallery/5.png', classes: 'md:col-span-2 md:row-span-1' },
  { title: 'Брейк-данс батл', category: 'Competition', image: '/gallery/6.png', classes: 'md:col-span-1 md:row-span-1' },
  { title: 'Стретчінг', category: 'Fitness', image: '/gallery/7.png', classes: 'md:col-span-1 md:row-span-1' },
  { title: 'Виступ', category: 'Performance', image: '/gallery/8.png', classes: 'md:col-span-1 md:row-span-1' }
];

export const DANCE_STYLES = [
  {
    id: 'kids',
    title: 'Дитяча хореографія',
    ageGroup: '3-6 років',
    description: 'Основи ритміки, координації та пластики для наймолодших танцюристів. Розвиток музичного слуху та творчого мислення.',
    color: 'from-pink-500/20 to-transparent'
  },
  {
    id: 'hiphop',
    title: 'Гіп-Гоп',
    ageGroup: '7-18 років',
    description: 'Динамічний та енергійний стиль вуличної хореографії. Опануй ритм, ізоляцію та самовираження.',
    color: 'from-fuchsia-500/20 to-transparent'
  },
  {
    id: 'contemporary',
    title: 'Контемпорарі',
    ageGroup: '9-18 років',
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
    ageGroup: '12-18 років',
    description: 'Яскравий та експресивний стиль, що поєднує елементи джазу та хіп-хопу. Ідеально для тих, хто любить бути в центрі уваги.',
    color: 'from-cyan-400/20 to-transparent'
  }
];

export const SCHEDULE = [
  {
    day: 'Понеділок / Середа',
    classes: [
      { time: '16:30 - 18:00', style: 'Група 9-11 років (Гіп-Гоп)', coach: 'Олексій' },
      { time: '18:00 - 19:30', style: 'Група 12-13 років (Джаз-фанк)', coach: 'Марія' },
      { time: '19:00 - 20:30', style: 'Група 14-18 років (Контемпорарі)', coach: 'Олена' }
    ]
  },
  {
    day: 'Вівторок / Четвер',
    classes: [
      { time: '16:30 - 18:00', style: 'Група 8-9 років', coach: 'Інна' },
      { time: '16:45 - 18:15', style: 'Група 6-7 років', coach: 'Марія' },
      { time: '18:15 - 19:15', style: 'Група 4-5 років', coach: 'Ольга' }
    ]
  },
  {
    day: 'Субота',
    classes: [
      { time: '11:30 - 12:30', style: 'Група 4-5 років', coach: 'Ольга' },
      { time: '11:30 - 13:00', style: 'Група 8-9 років', coach: 'Інна' },
      { time: '12:30 - 13:30', style: 'Група 6-7 років', coach: 'Марія' }
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
