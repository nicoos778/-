export type PosterItem = {
  id: string;
  category: '湘茶' | '旅游' | '个人IP';
  src: string;
  width: number;
  height: number;
};

export const xiangchaPosters: PosterItem[] = [
  { id: 'xiangcha-01', category: '湘茶', src: '/works/xiangcha/01.png', width: 658, height: 1181 },
  { id: 'xiangcha-02', category: '湘茶', src: '/works/xiangcha/02.jpg', width: 800, height: 1200 },
  { id: 'xiangcha-03', category: '湘茶', src: '/works/xiangcha/03.jpg', width: 800, height: 1813 },
  { id: 'xiangcha-04', category: '湘茶', src: '/works/xiangcha/04.jpg', width: 850, height: 1276 },
  { id: 'xiangcha-05', category: '湘茶', src: '/works/xiangcha/05.jpg', width: 658, height: 1134 },
  { id: 'xiangcha-06', category: '湘茶', src: '/works/xiangcha/06.jpg', width: 887, height: 1774 },
  { id: 'xiangcha-07', category: '湘茶', src: '/works/xiangcha/07.jpg', width: 1080, height: 1920 },
  { id: 'xiangcha-08', category: '湘茶', src: '/works/xiangcha/08.jpg', width: 924, height: 1918 },
  { id: 'xiangcha-09', category: '湘茶', src: '/works/xiangcha/09.png', width: 658, height: 1136 },
  { id: 'xiangcha-10', category: '湘茶', src: '/works/xiangcha/10.png', width: 658, height: 1375 },
  { id: 'xiangcha-11', category: '湘茶', src: '/works/xiangcha/11.png', width: 658, height: 1433 },
  { id: 'xiangcha-12', category: '湘茶', src: '/works/xiangcha/12.png', width: 658, height: 1576 },
];

export const travelPosters: PosterItem[] = [
  { id: 'travel-01', category: '旅游', src: '/works/travel/01.jpg', width: 1080, height: 3058 },
  { id: 'travel-02', category: '旅游', src: '/works/travel/02.jpg', width: 1636, height: 2932 },
  { id: 'travel-03', category: '旅游', src: '/works/travel/03.jpg', width: 1080, height: 2371 },
  { id: 'travel-04', category: '旅游', src: '/works/travel/04.jpg', width: 1280, height: 2786 },
  { id: 'travel-05', category: '旅游', src: '/works/travel/05.jpg', width: 1080, height: 2258 },
  { id: 'travel-06', category: '旅游', src: '/works/travel/06.jpg', width: 2524, height: 7521 },
  { id: 'travel-07', category: '旅游', src: '/works/travel/07.jpg', width: 1063, height: 2569 },
  { id: 'travel-08', category: '旅游', src: '/works/travel/08.jpg', width: 959, height: 1976 },
  { id: 'travel-09', category: '旅游', src: '/works/travel/09.jpg', width: 1080, height: 3998 },
  { id: 'travel-10', category: '旅游', src: '/works/travel/10.jpg', width: 800, height: 2000 },
];

export const ipPosters: PosterItem[] = [
  { id: 'ip-01', category: '个人IP', src: '/works/ip/01.png', width: 1340, height: 631 },
  { id: 'ip-02', category: '个人IP', src: '/works/ip/02.png', width: 1219, height: 607 },
  { id: 'ip-03', category: '个人IP', src: '/works/ip/03.png', width: 1473, height: 682 },
  { id: 'ip-04', category: '个人IP', src: '/works/ip/04.png', width: 2000, height: 1125 },
  { id: 'ip-3d-actions', category: '个人IP', src: '/works/ip/3d-actions.png', width: 1672, height: 941 },
  { id: 'ip-3d-emotions', category: '个人IP', src: '/works/ip/3d-emotions.png', width: 1672, height: 941 },
  { id: 'ip-3d-merch', category: '个人IP', src: '/works/ip/3d-merch.png', width: 1672, height: 941 },
];

export const posters = [...xiangchaPosters, ...travelPosters, ...ipPosters];

export const posterGroups = [
  { title: '湘茶', slug: 'xiangcha', items: xiangchaPosters },
  { title: '旅游', slug: 'travel', items: travelPosters },
  { title: '个人IP', slug: 'ip', items: ipPosters },
];
