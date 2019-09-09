import cover from '../assets/cover.jpg';

export const firebaseConfig = {
  apiKey: 'AIzaSyBHDZIKGTrxSWHPyI-SkDR6bq4mOiH_xsE',
  authDomain: 'ass-photography-afe90.firebaseapp.com',
  databaseURL: 'https://ass-photography-afe90.firebaseio.com',
  projectId: 'ass-photography-afe90',
  storageBucket: 'ass-photography-afe90.appspot.com',
  messagingSenderId: '16164478242',
  appId: '1:16164478242:web:acd7dd881b760f18'
};

export const PAGE_SIZE = 12;
export const SCREEN_SIZES = [1400, 960, 640];
export const ASS_EMAIL = 'aaa830714@gmail.com';

export const FIREBASE_UID = [
  'CtCNaKOBJseiraZnxNVyf7FnU7s1',
  'S5pil2oLXyWgJQ3IDFbdGBtIpG22'
];

export const HOME_ICONS = [
  {
    name: 'facebook-f',
    link: 'https://www.facebook.com/assphotofromtaiwan/'
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/ass_photography/?hl=zh-tw'
  }
];

export const ADMIN_ITEMS = [
  {
    name: 'Projects',
    link: '/admin/projects'
  }
  // {
  //   name: 'Videos',
  //   link: '/admin/videos'
  // }
];

export const HOME_ITEMS = [
  {
    name: 'Home',
    link: '/',
    path: ['home', 'photo']
  },
  {
    name: 'Project',
    link: '/project',
    path: ['project', 'album']
  },
  // {
  //   name: 'Video',
  //   link: 'videos',
  //   path: ['videos', 'video']
  // },
  {
    name: 'Contact',
    link: '/contact',
    path: ['contact']
  }
];

export const AUTHOR = {
  name: '陳俊宇',
  englishName: 'Chun-Yu Chen',
  cover,
  description: [
    'Freelance Photographer',
    '品牌 / 形象 / 網拍 / 婚紗 / 雜誌 / 訪問 / 寫真',
    '不限制任何形式的合作，歡迎討論。'
  ],
  links: [
    {
      name: '俊宇',
      isBrand: true,
      tag: 'line',
      url: 'https://line.me/zh-hant/'
    },
    {
      name: 'ASS Photography Studio',
      isBrand: true,
      tag: 'facebook-f',
      url: 'https://www.facebook.com/assphotofromtaiwan/'
    },
    {
      name: 'ass_photography',
      isBrand: true,
      tag: 'instagram',
      url: 'https://www.instagram.com/ass_photography/?hl=zh-tw'
    },
    {
      name: '+886 922-224-479',
      isBrand: false,
      tag: 'mobile-alt'
    },
    {
      name: 'supersmile821031@gmail.com',
      isBrand: false,
      tag: 'envelope',
      url: 'mailto:supersmile821031@gmail.com'
    }
  ]
};

export const VIDEOS_DATA = [
  {
    id: 0,
    title: 'LANY - Super Far (Official Video)',
    url: 'https://vimeo.com/341310108',
    time: '2017/09/12',
    cover:
      'https://i.ytimg.com/vi/O78Lpo4ctSE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBhBxJri0W9F2AWMbE3GxDABiRwHg'
  },
  {
    id: 1,
    title: 'LANY - 13 (Official Audio)',
    url: 'https://vimeo.com/341310108',
    time: '2017/06/01',
    cover:
      'https://i.ytimg.com/vi/NDWJWILEA7o/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDydB0nMeedTnFZsvA4g_3w2fr5A'
  },
  {
    id: 2,
    title: 'LANY - ILYSB (Stripped)',
    url: 'https://vimeo.com/341310108',
    time: '2016/01/21',
    cover:
      'https://i.ytimg.com/vi/RPvhItA3lIM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDZyHOy5UHFdAsiWaT_L9pvoq0GVA'
  },
  {
    id: 3,
    title: 'ONE OK ROCK - The Beginning',
    url: 'https://vimeo.com/341310108',
    time: '2012/08/14',
    cover:
      'https://i.ytimg.com/vi/Hh9yZWeTmVM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLADpnm9FRxQjhJ9AZGmP5OI7GBKcQ'
  },
  {
    id: 4,
    title: 'ONE OK ROCK - Heartache',
    url: 'https://vimeo.com/341310108',
    time: '2015/02/13',
    cover:
      'https://i.ytimg.com/vi/x9v8aNl6Aps/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpRWTmoTB3wu7OzWlIH22ansCYEA'
  }
];
