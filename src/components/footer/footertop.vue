<template>
  <div class="footer-top">
    <div class="footer-column" v-for="(item, index) in lists" :key="index">
      <dl v-for="(item1, index1) in item" :key="index1">
        <dt>{{ item1.name }}</dt>
        <dd v-for="(res, prop) in item1.footerlist" :key="prop">
          {{ res }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        [
          {
            name: "用户帮助",
            footerlist: [
              "申请退款",
              "查看美团券密码",
              "常见问题",
              "用户协议",
              "隐私政策",
              "反诈骗公告",
              "消费者权益保障"
            ]
          },
          {
            name: "美团服务",
            footerlist: [
              "美团外卖",
              "美团酒店",
              "美团配送",
              "猫眼电影",
              "美团云",
              "大众点评",
              "美团民宿",
              "无人配送"
            ]
          }
        ],
        [
          {
            name: "商家合作",
            footerlist: [
              "美团餐饮商户中心",
              "美食商家入驻(非外卖)",
              "美团外卖开店申请",
              "美团收银官网",
              "外卖配送加盟申请",
              "美团点评餐饮学院",
              "酒店商家入驻",
              "境内度假商家入驻",
              "综合商家入驻",
              "美团民宿房东商家入驻",
              "商家开票申请",
              "美团点评智能收银机",
              "美团点评餐饮开放平台",
              "美团点评收单",
              "免费使用美团排队",
              "快驴进货商家合作",
              "美团闪购商家入驻"
            ]
          }
        ],
        [
          {
            name: "代理商加盟",
            footerlist: [
              "美团外卖代理商招募",
              "到店餐饮代理商招募",
              "非餐饮代理商招募",
              "美团联盟",
              "美团收银招募线上分销商",
              "美团点评5S服务商招募",
              "美团收单渠道代理商招募"
            ]
          },
          {
            name: "美团规则",
            footerlist: ["规则中心", "规则目录", "规则评议院"]
          }
        ],
        [
          {
            name: "关注美团",
            footerlist: ["美团新浪微博"]
          },
          {
            name: "公司信息",
            footerlist: [
              "关于我们",
              "投资者关系",
              "加入我们",
              "商户诚信公约及管理办法",
              "保险经纪资质"
            ]
          },
          {
            name: "廉正举报",
            footerlist: ["廉政邮箱"]
          },
          {
            name: "知识产权",
            footerlist: ["知识产权维权平台"]
          }
        ],
        [
          {
            name: "消费者服务热线",
            footerlist: [
              "外卖消费者：10109777",
              "猫眼消费者：10105335",
              "其他消费者：10107888"
            ]
          },
          {
            name: "商家服务热线",
            footerlist: [
              "外卖&餐饮商家：10105557",
              "休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107"
            ]
          },
          {
            name: "投诉举报热线",
            footerlist: [
              "违法和不良信息举报电话：4006018900",
              "举报邮箱：tousujubao@meituan.com"
            ]
          }
        ]
      ]
    };
  }
};
</script>
