<template>
  <div class="item">
    <dl>
      <dt class="title">
        <img :src="list.image" alt />
      </dt>
      <dd>
        <p class="name">
          <router-link :to="{ name: 'productDeatil' }">{{
            list.title
          }}</router-link>
        </p>
        <p class="item-eval">
          <el-rate
            v-model="list.score"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
          <span class="fen">{{ list.score }}分</span>
          <span v-if="list.score > 4.5">很好</span>
          <span v-else-if="list.score > 4">好</span>
          <span v-else-if="list.score > 3.5">不错</span>
          <span v-else-if="list.score > 3">一般</span>
          <span v-else>很差</span>
          <span class="s-item-comment-total">{{ list.commentNum }}人评论</span>
        </p>
        <p class="item-site">
          <span class="title">{{ list.tab[0] }} | {{ list.tab[1] }}</span>
          <span class="address">{{ list.address }}</span>
        </p>
        <p class="item-price">
          <span>人均{{ list.avgPrice }}元</span>
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["list"],

  data() {
    return {
      value: 3.7
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/product/item.scss";
</style>
