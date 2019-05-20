import cover from '../assets/cover.jpg'

export const firebaseConfig = {
  apiKey: 'AIzaSyBHDZIKGTrxSWHPyI-SkDR6bq4mOiH_xsE',
  authDomain: 'ass-photography-afe90.firebaseapp.com',
  databaseURL: 'https://ass-photography-afe90.firebaseio.com',
  projectId: 'ass-photography-afe90',
  storageBucket: 'ass-photography-afe90.appspot.com',
  messagingSenderId: '16164478242',
  appId: '1:16164478242:web:acd7dd881b760f18'
}

export const PAGE_SIZE = 12
export const SCREEN_SIZES = [1400, 960, 640]

export const HOME_ICONS = [
  {
    name: 'facebook-f',
    link: 'https://www.facebook.com/assphotofromtaiwan/'
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/ass_photography/?hl=zh-tw'
  }
]

export const HOME_ITEMS = [
  {
    name: 'Home',
    link: '/',
    path: ['home', 'photo']
  },
  {
    name: 'Albums',
    link: '/albums',
    path: ['albums', 'album']
  },
  {
    name: 'Contact',
    link: '/contact',
    path: ['contact']
  }
]

export const AUTHOR = {
  name: '陳俊宇',
  englishName: 'Chun-Yu Chen',
  cover,
  description: [
    'Freelance Photographer', '品牌 / 形象 / 網拍 / 婚紗 / 雜誌 / 訪問 / 寫真', '不限制任何形式的合作，歡迎討論。'
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
}
