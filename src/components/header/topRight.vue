<template>
  <div class="my-topRight">
    <ul>
      <li
        v-for="(item, index) in lists"
        :key="index"
        :class="[item.type, item.type !== 'shouji' ? 'list' : '']"
      >
        <router-link to="/">{{ item.name }}</router-link>
        <dl v-if="item.type !== 'shouji' && item.type !== 'site'">
          <dd v-for="(item1, prop) in item.list" :key="prop">
            <router-link to="/">{{ item1 }}</router-link>
          </dd>
        </dl>
        <!-- 网站导航！ -->
        <div v-if="item.type === 'site'" class="header-nav-site">
          <dl
            v-for="(item2, index) in item.listsite"
            :key="index"
            :class="item2.type"
          >
            <dt>{{ item2.title }}</dt>
            <dd v-for="(itemdh, index) in item2.list" :key="index">
              <router-link to="/" v-if="item2.type !== 'header-app'">{{
                itemdh
              }}</router-link>
              <a href="#" v-if="item2.type === 'header-app'">
                <img
                  :src="itemdh.src"
                  :title="itemdh.title"
                  :atl="itemdh.atl"
                />
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          type: "mt",
          name: "我的美团",
          list: ["我的订单", "我的收藏", "抵用券", "账户设置"]
        },
        {
          type: "shouji",
          name: "手机APP"
        },
        {
          type: "bd",
          name: "商家中心",
          list: [
            "美团餐饮商户中心",
            "登陆商家中心",
            "美团智能收银",
            "我想合作",
            "手机免费开店",
            "餐饮代理商招募",
            "商家申请开票",
            "免费合作美团排队"
          ]
        },
        {
          type: "gz",
          name: "美团规则",
          list: ["规则中心", "规则目录", "规则协议院"]
        },
        {
          type: "site",
          name: "网站导航",
          listsite: [
            {
              type: "header-jiulv",
              title: "酒店旅游",
              list: [
                "国际机票",
                "火车票",
                "民宿",
                "经济型酒店",
                "主题酒店",
                "商务酒店",
                "公寓",
                "豪华酒店",
                "客栈",
                "青年旅社",
                "度假酒店",
                "别墅",
                "农家院"
              ]
            },
            {
              type: "header-meishi",
              title: "吃美食",
              list: ["烤鱼", "特色小吃", "烧烤", "自助餐", "火锅", "代金券"]
            },
            {
              type: "header-dianying",
              title: "看电影",
              list: [
                "热映电影",
                "热门影院",
                "热映电影口碑榜",
                "最受期待电影",
                "国内票房榜",
                "北美票房榜",
                "电影排行榜"
              ]
            },
            {
              type: "header-app",
              title: "手机应用",
              list: [
                {
                  src:
                    "//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png",
                  title: "美团App",
                  alt: "美团App"
                },
                {
                  src:
                    "//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png",
                  title: "外卖App",
                  alt: "外卖App"
                },
                {
                  src:
                    "https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png",
                  title: "民宿app",
                  alt: "民宿app"
                },
                {
                  src:
                    "//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png",
                  title: "点评app",
                  alt: "点评app"
                },
                {
                  src:
                    "//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png",
                  title: "猫眼app",
                  alt: "猫眼app"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/header/topRight.scss";
</style>
