<template>
  <div class="hot">
    <dl>
      <dt>{{ title }}</dt>
      <dd
        v-for="(item, index) in list"
        :key="item + '_' + index"
        @click="changeCity(item)"
      >
        {{ item }}
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["title", "list"],
  methods: {
    changeCity(item) {
      this.$store.dispatch("setPosition", item);
      this.$router.push({ name: "index" });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/changecity/hot.scss";
</style>
