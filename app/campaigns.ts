export type CampaignStage = {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
};

export type CampaignCaseData = {
  slug: string;
  caseNumber: string;
  groupTitle: string;
  title: string;
  eyebrow: string;
  tags: string[];
  summary: string;
  projectContent: string;
  stages: CampaignStage[];
};

const image = (slug: string, number: number) => `/works/campaigns/${slug}/${String(number).padStart(2, '0')}.jpg`;

export const campaignCases: Record<string, CampaignCaseData> = {
  midyear: {
    slug: 'midyear', caseNumber: '02', groupTitle: '年中活动', title: '年中钜惠', eyebrow: '健康产品 · 年中营销',
    tags: ['价格机制', '赠品传播', '节点加推'],
    summary: '以紫色高饱和视觉串联价格、赠品、活动进度与倒计时信息，形成一组连续的年中营销传播画面。',
    projectContent: '活动主视觉 / 产品长图',
    stages: [
      { title: '价格方案', subtitle: '明确不同周期的优惠', description: '用高对比数字呈现不同购买周期、原价与活动价，并补充赠品条件。', images: [image('midyear', 1)] },
      { title: '赠品内容', subtitle: '单独放大产品价值', description: '聚焦活动赠品与检测功能，让用户更直观地理解附加价值。', images: [image('midyear', 2)] },
      { title: '活动收口', subtitle: '提示名额即将结束', description: '以“即将结束”为核心信息，强化活动后段的紧迫感。', images: [image('midyear', 3)] },
      { title: '第二天加推', subtitle: '延续活动热度', description: '通过第二天传播节点再次强调好礼、折扣与限量信息。', images: [image('midyear', 4)] },
      { title: '最后一天', subtitle: '进入最终倒计时', description: '以数字倒计时和剩余名额作为主要视觉焦点，推动最后决策。', images: [image('midyear', 5)] },
      { title: '活动主视觉', subtitle: '完整汇总活动利益点', description: '集中呈现活动主题、参与福利和核心产品，形成系列视觉的总览画面。', images: [image('midyear', 6)] },
    ],
  },
  'month-end': {
    slug: 'month-end', caseNumber: '03', groupTitle: '月末回馈', title: '感恩回馈', eyebrow: '健康产品 · 月末营销',
    tags: ['活动预热', '赠品体系', '限时转化'],
    summary: '围绕月末感恩回馈，从预热、开售、产品赠礼到限时提醒持续输出，让传播内容覆盖完整活动周期。',
    projectContent: '节点海报 / 赠品详情 / 价格长图',
    stages: [
      { title: '活动预热', subtitle: '提前建立活动期待', description: '以“明天九点开启”为核心信息，先行告知活动时间与赠品内容。', images: [image('month-end', 1)] },
      { title: '正式开售', subtitle: '明确活动已经开始', description: '集中展示活动主题与赠品组合，承担正式上线的主传播任务。', images: [image('month-end', 2)] },
      { title: '第二天', subtitle: '延续活动关注度', description: '用“正式开启”强化第二个传播节点，保持活动热度。', images: [image('month-end', 3)] },
      { title: '热销加推', subtitle: '用火爆信息推动抢购', description: '以更直接的行动型文案再次强调现金减免与包邮权益。', images: [image('month-end', 4)] },
      { title: '最后抢购时间', subtitle: '三联画形成连续阅读', description: '三张方图按原始顺序并列，组合成完整的抢购提醒信息。', images: [image('month-end', 5), image('month-end', 6), image('month-end', 7)] },
      { title: '抢购提示', subtitle: '三张视觉连续强化', description: '通过大字拆分与连续画面，让核心促销口号更有节奏地出现。', images: [image('month-end', 8), image('month-end', 9), image('month-end', 10)] },
      { title: '血糖仪赠品', subtitle: '讲清具体产品能力', description: '聚焦智能血糖仪的检测功能和赠送机制，补充产品层面的沟通。', images: [image('month-end', 11)] },
      { title: '名额提醒', subtitle: '强调活动即将结束', description: '将最后半天、名额有限和赠品信息集中呈现。', images: [image('month-end', 12)] },
      { title: '报价方案', subtitle: '清晰呈现周期价格', description: '区分一至三个购买周期及对应礼品，降低用户比较成本。', images: [image('month-end', 13)] },
      { title: '倒计时', subtitle: '最后三小时提醒', description: '用大数字建立倒计时焦点，为活动末段持续增加紧迫感。', images: [image('month-end', 14)] },
      { title: '赠品详情', subtitle: '五谷杂粮饼干', description: '单独介绍赠品卖点、使用场景与活动领取方式。', images: [image('month-end', 15)] },
      { title: '赠品详情', subtitle: '控糖复合米', description: '以产品信息为中心补充复合米的营养特点和活动权益。', images: [image('month-end', 16)] },
      { title: '最后一天', subtitle: '完成活动收口', description: '以最后一天为核心信息，回到主产品并提示即将恢复原价。', images: [image('month-end', 17)] },
    ],
  },
  'labor-day': {
    slug: 'labor-day', caseNumber: '04', groupTitle: '五一活动', title: '五一劳动节特惠', eyebrow: '健康产品 · 节日营销',
    tags: ['节日主视觉', '限时特价', '节点提醒'],
    summary: '围绕五一节日节点，以红金主色统一活动预热、开售、价格信息和最后一天提醒。',
    projectContent: '节日海报 / 价格长图',
    stages: [
      { title: '活动预热', subtitle: '提前公布开启时间', description: '以五一节日氛围和赠品组合建立第一波活动认知。', images: [image('labor-day', 1)] },
      { title: '最后一天', subtitle: '强调价格即将恢复', description: '将最后一天、限时抢购与包邮权益整合到单张视觉中。', images: [image('labor-day', 2)] },
      { title: '第二天', subtitle: '继续强化限时特价', description: '使用复古宣传画语言，延续第二天活动信息。', images: [image('labor-day', 3)] },
      { title: '价格方案', subtitle: '三档周期清晰比较', description: '通过统一票券结构展示不同周期、秒杀价及对应赠品。', images: [image('labor-day', 4)] },
      { title: '正式开售', subtitle: '放大节日限时权益', description: '用高冲击标题呈现正式开启、赠品和折扣信息。', images: [image('labor-day', 5)] },
      { title: '单品特价', subtitle: '聚焦核心优惠', description: '以单一价格与限时限量信息，完成更直接的单品促销表达。', images: [image('labor-day', 6)] },
    ],
  },
  spring: {
    slug: 'spring', caseNumber: '05', groupTitle: '开春福利', title: '开春福利', eyebrow: '健康产品 · 开春营销',
    tags: ['福利主视觉', '产品详情', '倒计时'],
    summary: '开春主题系列以活动福利为核心，串联价格、赠品、名额、倒计时和产品详情，形成完整的促销传播组合。',
    projectContent: '活动长图 / 产品详情',
    stages: [
      { title: '最后一天', subtitle: '双重福利最终提醒', description: '以最后一天和剩余名额开场，强化活动末段的紧迫信息。', images: [image('spring', 1)] },
      { title: '价格方案', subtitle: '三档周期与赠品', description: '清晰展示不同购买周期、活动优惠价和对应赠品。', images: [image('spring', 2)] },
      { title: '第二天', subtitle: '福利继续加推', description: '整理现金减免、磷虾油和测试仪三项福利，持续推动活动。', images: [image('spring', 3)] },
      { title: '名额提醒', subtitle: '最后六十个名额', description: '通过超大标题与三项福利卡片，集中传达名额紧张。', images: [image('spring', 4)] },
      { title: '测试仪赠品', subtitle: '突出一机多测', description: '聚焦四合一测试仪的功能与免费领取信息。', images: [image('spring', 5)] },
      { title: '一小时倒计时', subtitle: '用数字推动行动', description: '以大数字“1”作为视觉中心，完成活动最后一小时提醒。', images: [image('spring', 6)] },
      { title: '赠品说明', subtitle: '四合一智能测量仪', description: '补充检测项目、操作特点和领取门槛等信息。', images: [image('spring', 7)] },
      { title: '赠品说明', subtitle: '南极磷虾油名额', description: '以社交媒体风格画面强调剩余数量与适用人群。', images: [image('spring', 8)] },
      { title: '产品详情', subtitle: '南极磷虾油', description: '用产品大图、成分标签与功能信息完整介绍赠品。', images: [image('spring', 9)] },
    ],
  },
};

export const campaignOrder = ['midyear', 'month-end', 'labor-day', 'spring'] as const;
