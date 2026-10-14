export type TravelProject = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
};

const path = (name: string) => `/works/travel-series/${name}`;

export const travelProjects: TravelProject[] = [
  {
    number: '01',
    title: '节日全国多线',
    subtitle: '端午与跨年节点活动',
    description: '以节日氛围统领多目的地价格与线路信息，在高信息密度中保持明确的浏览顺序。',
    images: [path('01-dragon-boat.webp'), path('12-new-year.webp')],
  },
  {
    number: '02',
    title: '西北主题系列',
    subtitle: '青海、甘肃与胡杨林线路',
    description: '同一西北产品在不同季节与营销节点中的持续视觉输出，主视觉、活动详情与福利内容归为一组。',
    images: [
      path('02-national-day.webp'),
      path('04-qinghai.webp'),
      path('06-northwest.webp'),
      path('07-northwest-detail.webp'),
      path('08-populus.webp'),
      path('09-northwest-daily.webp'),
      path('10-northwest-thanks.webp'),
      path('16-northwest-summer.webp'),
    ],
  },
  {
    number: '03',
    title: '大连赏花',
    subtitle: '滨海春季线路',
    description: '以樱花粉与海岸蓝建立轻盈、明快的季节印象，突出目的地氛围和出行福利。',
    images: [path('03-dalian.webp')],
  },
  {
    number: '04',
    title: '古韵西安',
    subtitle: '历史文化名城线路',
    description: '将汉唐人物、城市地标与暖金色调结合，塑造文化厚度与品质旅行感。',
    images: [path('05-xian.webp')],
  },
  {
    number: '05',
    title: '相约三亚',
    subtitle: '海岛度假系列',
    description: '从活动主图到完整行程详情，以通透海蓝和游艇体验贯穿海岛度假传播。',
    images: [path('11-sanya-detail.webp')],
  },
  {
    number: '06',
    title: '藏地秘语',
    subtitle: '西藏人文线路',
    description: '深色高原影像与金色信息层级共同营造神秘、沉静且具有品质感的旅行主题。',
    images: [path('13-tibet.webp')],
  },
  {
    number: '07',
    title: '雪乡冬季系列',
    subtitle: '东北冰雪线路',
    description: '将冬季产品主视觉与长图详情集中展示，以高饱和冰雪蓝统一线路氛围。',
    images: [path('14-snow.webp'), path('15-snow-detail.webp')],
  },
];

export const travelPosterImages = travelProjects.flatMap((project) => project.images);
