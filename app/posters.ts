export type PosterItem = {
  id: string;
  category: '健康产品营销' | '年中活动' | '月末回馈' | '五一活动' | '开春福利' | '湘茶' | '文旅视觉' | '个人IP';
  src: string;
  width: number;
  height: number;
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;

export const healthCampaignPosters: PosterItem[] = [
  { id: 'health-01', category: '健康产品营销', src: asset('/works/health-campaign/01-preheat.jpg'), width: 800, height: 1813 },
  { id: 'health-02', category: '健康产品营销', src: asset('/works/health-campaign/02-launch.jpg'), width: 1200, height: 2874 },
  { id: 'health-03', category: '健康产品营销', src: asset('/works/health-campaign/03-product.jpg'), width: 1080, height: 1920 },
  { id: 'health-04', category: '健康产品营销', src: asset('/works/health-campaign/04-pricing.jpg'), width: 1600, height: 3545 },
  { id: 'health-05', category: '健康产品营销', src: asset('/works/health-campaign/05-final-day.jpg'), width: 1600, height: 2400 },
];

const campaignPosters = (category: PosterItem['category'], slug: string, dimensions: Array<[number, number]>): PosterItem[] =>
  dimensions.map(([width, height], index) => ({
    id: `${slug}-${String(index + 1).padStart(2, '0')}`,
    category,
    src: asset(`/works/campaigns/${slug}/${String(index + 1).padStart(2, '0')}.jpg`),
    width,
    height,
  }));

export const midyearPosters = campaignPosters('年中活动', 'midyear', [
  [887, 1774], [658, 987], [750, 1054], [1400, 2100], [1400, 2100], [1400, 2190],
]);

export const monthEndPosters = campaignPosters('月末回馈', 'month-end', [
  [850, 1312], [658, 991], [850, 1276], [850, 1276], [567, 567], [567, 567], [567, 567],
  [850, 1276], [850, 1276], [850, 1276], [850, 1276], [850, 1276], [850, 1310], [850, 1317],
  [850, 1276], [850, 1276], [1400, 2100],
]);

export const laborDayPosters = campaignPosters('五一活动', 'labor-day', [
  [1400, 2102], [1000, 1333], [1400, 2094], [1400, 2690], [1400, 2100], [1400, 2151],
]);

export const springPosters = campaignPosters('开春福利', 'spring', [
  [1242, 2443], [1242, 2704], [1242, 2595], [1242, 2145], [1080, 1920], [1242, 2208], [1028, 1805], [1242, 2169], [1400, 2762],
]);

export const xiangchaPosters: PosterItem[] = [
  { id: 'xiangcha-01', category: '湘茶', src: asset('/works/xiangcha/01.png'), width: 658, height: 1181 },
  { id: 'xiangcha-02', category: '湘茶', src: asset('/works/xiangcha/02.jpg'), width: 800, height: 1200 },
  { id: 'xiangcha-03', category: '湘茶', src: asset('/works/xiangcha/03.jpg'), width: 800, height: 1813 },
  { id: 'xiangcha-04', category: '湘茶', src: asset('/works/xiangcha/04.jpg'), width: 850, height: 1276 },
  { id: 'xiangcha-05', category: '湘茶', src: asset('/works/xiangcha/05.jpg'), width: 658, height: 1134 },
  { id: 'xiangcha-06', category: '湘茶', src: asset('/works/xiangcha/06.jpg'), width: 887, height: 1774 },
  { id: 'xiangcha-07', category: '湘茶', src: asset('/works/xiangcha/07.jpg'), width: 1080, height: 1920 },
  { id: 'xiangcha-08', category: '湘茶', src: asset('/works/xiangcha/08.jpg'), width: 924, height: 1918 },
  { id: 'xiangcha-09', category: '湘茶', src: asset('/works/xiangcha/09.png'), width: 658, height: 1136 },
  { id: 'xiangcha-10', category: '湘茶', src: asset('/works/xiangcha/10.png'), width: 658, height: 1375 },
  { id: 'xiangcha-11', category: '湘茶', src: asset('/works/xiangcha/11.png'), width: 658, height: 1433 },
  { id: 'xiangcha-12', category: '湘茶', src: asset('/works/xiangcha/12.png'), width: 658, height: 1576 },
];

export const travelPosters: PosterItem[] = [
  { id: 'travel-01', category: '文旅视觉', src: asset('/works/travel-series/01-dragon-boat.webp'), width: 941, height: 1803 },
  { id: 'travel-02', category: '文旅视觉', src: asset('/works/travel-series/02-national-day.webp'), width: 750, height: 2583 },
  { id: 'travel-03', category: '文旅视觉', src: asset('/works/travel-series/03-dalian.webp'), width: 1080, height: 2025 },
  { id: 'travel-04', category: '文旅视觉', src: asset('/works/travel-series/04-qinghai.webp'), width: 1080, height: 2822 },
  { id: 'travel-05', category: '文旅视觉', src: asset('/works/travel-series/05-xian.webp'), width: 959, height: 1976 },
  { id: 'travel-06', category: '文旅视觉', src: asset('/works/travel-series/06-northwest.webp'), width: 1080, height: 3998 },
  { id: 'travel-07', category: '文旅视觉', src: asset('/works/travel-series/07-northwest-detail.webp'), width: 1600, height: 4640 },
  { id: 'travel-08', category: '文旅视觉', src: asset('/works/travel-series/08-populus.webp'), width: 1600, height: 3436 },
  { id: 'travel-09', category: '文旅视觉', src: asset('/works/travel-series/09-northwest-daily.webp'), width: 1600, height: 4816 },
  { id: 'travel-10', category: '文旅视觉', src: asset('/works/travel-series/10-northwest-thanks.webp'), width: 1600, height: 5174 },
  { id: 'travel-11', category: '文旅视觉', src: asset('/works/travel-series/11-sanya-detail.webp'), width: 794, height: 6191 },
  { id: 'travel-12', category: '文旅视觉', src: asset('/works/travel-series/12-new-year.webp'), width: 1125, height: 2408 },
  { id: 'travel-13', category: '文旅视觉', src: asset('/works/travel-series/13-tibet.webp'), width: 1080, height: 2258 },
  { id: 'travel-14', category: '文旅视觉', src: asset('/works/travel-series/14-snow.webp'), width: 1080, height: 7232 },
  { id: 'travel-15', category: '文旅视觉', src: asset('/works/travel-series/15-snow-detail.webp'), width: 1242, height: 3137 },
  { id: 'travel-16', category: '文旅视觉', src: asset('/works/travel-series/16-northwest-summer.webp'), width: 1200, height: 3064 },
];

export const ipPosters: PosterItem[] = [
  { id: 'ip-01', category: '个人IP', src: asset('/works/ip/01.png'), width: 1340, height: 631 },
  { id: 'ip-02', category: '个人IP', src: asset('/works/ip/02.png'), width: 1219, height: 607 },
  { id: 'ip-03', category: '个人IP', src: asset('/works/ip/03.png'), width: 1473, height: 682 },
  { id: 'ip-04', category: '个人IP', src: asset('/works/ip/04.png'), width: 2000, height: 1125 },
  { id: 'ip-3d-actions', category: '个人IP', src: asset('/works/ip/3d-actions.png'), width: 1672, height: 941 },
  { id: 'ip-3d-emotions', category: '个人IP', src: asset('/works/ip/3d-emotions.png'), width: 1672, height: 941 },
  { id: 'ip-3d-merch', category: '个人IP', src: asset('/works/ip/3d-merch.png'), width: 1672, height: 941 },
];

export const posters = [
  ...healthCampaignPosters,
  ...midyearPosters,
  ...monthEndPosters,
  ...laborDayPosters,
  ...springPosters,
  ...xiangchaPosters,
  ...travelPosters,
  ...ipPosters,
];

export const posterGroups = [
  { title: '健康产品营销', slug: 'health-campaign', items: healthCampaignPosters },
  { title: '年中活动', slug: 'midyear', items: midyearPosters },
  { title: '月末回馈', slug: 'month-end', items: monthEndPosters },
  { title: '五一活动', slug: 'labor-day', items: laborDayPosters },
  { title: '开春福利', slug: 'spring', items: springPosters },
  { title: '湘茶', slug: 'xiangcha', items: xiangchaPosters },
  { title: '文旅视觉', slug: 'travel', items: travelPosters },
  { title: '个人IP', slug: 'ip', items: ipPosters },
];
