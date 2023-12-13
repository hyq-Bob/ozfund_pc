export enum routerMapIdEnum {
  "/ozfund" = 1,
  "/ozfund/work-mange" = 11,
  "/ozfund/work-mange/todo" = 112,
  "/ozfund/work-mange/mange-site" = 113,
  "/ozfund/work-mange/business-mange" = 114,
  "/ozfund/work-mange/business-mange/aridrop-address" = 1141,
  "/ozfund/work-mange/business-mange/batch-transfer" = 1142,
  "/ozfund/work-mange/business-mange/draws-contract" = 1143,
  "/ozfund/work-mange/business-mange/release-custody" = 1144,
  "/ozfund/work-mange/toto-contract" = 111,
  "/ozfund/work-mange/ozc-contract" = 115,
  "/ozfund/work-mange/ozc-contract/publish-ozc" = 1151,
  "/ozfund/work-mange/ozc-contract/frezz-address" = 1152,
  "/ozfund/work-mange/ozc-contract/destroy-address" = 1153,
  "/ozfund/work-mange/ozc-contract/add-delete" = 1154,
  "/ozfund/website-operation" = 12,
  "/ozfund/website-operation/zh-cn" = 121,
  "/ozfund/website-operation/zh-cn/process" = 1211,
  "/ozfund/website-operation/zh-cn/trends" = 1212,
  "/ozfund/website-operation/zh-cn/notice" = 1213,
  "/ozfund/website-operation/zh-cn/problem" = 1214,
  "/ozfund/website-operation/zh-wt" = 122,
  "/ozfund/website-operation/zh-wt/process" = 1221,
  "/ozfund/website-operation/zh-wt/trends" = 1222,
  "/ozfund/website-operation/zh-wt/notice" = 1223,
  "/ozfund/website-operation/zh-wt/problem" = 1224,
  "/ozfund/website-operation/en" = 123,
  "/ozfund/website-operation/en/process" = 1231,
  "/ozfund/website-operation/en/trends" = 1232,
  "/ozfund/website-operation/en/notice" = 1233,
  "/ozfund/website-operation/en/problem" = 1234,
  "/ozfund/website-operation/japan" = 124,
  "/ozfund/website-operation/japan/process" = 1241,
  "/ozfund/website-operation/japan/trends" = 1242,
  "/ozfund/website-operation/japan/notice" = 1243,
  "/ozfund/website-operation/japan/problem" = 1244,
  "/ozfund/email" = 13,
  "/ozfund/email/list" = 131,
  "/ozfund/email/temp" = 132,
  "/ozfund/email/send" = 133,
  "/ozfund/email/record" = 134,
  "/ozfund/assets" = 14,
  "/ozfund/assets/toto" = 141,
  "/ozfund/assets/toto/allocation-statistics" = 1411,
  "/ozfund/assets/toto/assets-statistics" = 1412,
  "/ozfund/assets/ozc" = 142,
  "/ozfund/assets/toto-price" = 143,
  "/ozfund/assets/toto_ozc" = 144,
  "/ozfund/permission" = 15,
  "/ozfund/permission/staff-list" = 151,
  "/ozfund/permission/staff-list/staff-detail" = 1511,
  "/ozfund/permission/staff-list/staff-detail/staff-info" = 1512,
  "/ozfund/permission/staff-list/staff-detail/rights-adjust" = 1513,
  "/ozfund/permission/staff-list/staff-detail/account" = 1514,
  "/ozfund/IP" = 16,
  "/ozfund/IP/list" = 161,
  "/ozfund/IP/change-record" = 162,
  "/ozfund/logs" = 17,
  "/ozfund/logs/sign" = 171,
  "/ozfund/logs/operation" = 172,
  "/ozfund/logs/work" = 173,
  "/ozfund/business" = 18,
  "/ozfund/personal" = 19,
}

export enum userAcountStateEnum {
  正常 = 1,
  冻结 = 2,
  关闭 = 3,
}
export enum languageEnum {
  "zh-cn" = 1,
  "zh-wt" = 2,
  en = 3,
  japan = 4,
}
export enum language1Enum {
  "简体中文" = 1,
  "繁体中文" = 2,
  "English" = 3,
  "しろうと" = 4,
}

export enum countryCodeEnum {
  "中国" = "86",
  "新加坡" = "65",
  "泰国" = "66",
  "日本" = "81",
  "韩国" = "82",
  "越南" = "84",
  "缅甸" = "95",
  "台湾" = "886",
}
export enum poolIdEnum {
  team = 1,
  supporter = 2, // 支持者
  foundation = 3, // 基金会
  pledge = 4, // 质押
  ozbet = 5,
  ozbetVip = 6,
}
