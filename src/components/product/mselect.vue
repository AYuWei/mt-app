<template>
  <div class="m-select">
    <dl class="tab">
      <dt @click="change" v-document-change="documentChange">
        {{ title }}
        <i class="el-icon-caret-bottom"></i>
      </dt>
      <dd v-if="isdd">
        <p>{{ title }}</p>
        <span v-for="(item, index) in list" :key="index + '_' + item">
          {{ item.name }}
        </span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["title", "list"],
  data() {
    return {
      isdd: false
    };
  },
  methods: {
    change(e) {
      e.stopPropagation();
      this.isdd = !this.isdd;
    },
    documentChange() {
      this.isdd = false;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/product/mselect.scss";
</style>
