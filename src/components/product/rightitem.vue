<template>
  <div class="rightitem">
    猜你喜欢
  </div>
</template>

<script>
import api from "@/api";
export default {
  created() {
    api.getPositionDatail().then(rem => {});
  }
};
</script>

<style lang="scss">
.rightitem {
  padding: 10px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
}
</style>
