<template>
  <div
    :class="['select', disabled ? 'disabled' : '']"
    @click="showSelect"
    v-document-click="documentClick"
  >
    <span>{{ myValue }}</span>
    <i class="el-icon el-icon-caret-bottom"></i>
    <div :class="{ 'mt-provinces': true, active: showWraperActive }">
      <p>{{ title }}</p>
      <div class="provinces-wrapper">
        <div
          class="province"
          v-for="(item, index) in arrlist"
          :key="index"
          @click="changecity"
        >
          <span
            v-for="(o, i) in item"
            :key="o + '_' + i"
            :data-type="o.name"
            :class="{ active: isActive === o.name }"
            @click="changeProvince(o)"
          >
            {{ o.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySelect",
  props: ["title", "value", "list", "showWraperActive", "disabled"],
  data() {
    return {
      isActive: false,
      myValue: this.value
      // showWraperActive : false, // 自己控制！ 现在我们弄父级控制的。
    };
  },
  methods: {
    changecity(e) {
      const dom = e.target;
      const resule = dom.tagName.toLowerCase();
      if (resule !== "span") {
        return false;
      }
      const val = dom.getAttribute("data-type");
      this.my_Value = val;
      this.isActive = val;
    },

    showSelect(e) {
      e.stopPropagation();
      //  this.showWrapper = true; // 这个是让自己控制
      if (!this.disabled) {
        this.$emit("change_active", true); // 执行父级的自定义事件
      }
    },
    documentClick() {
      // this.showWraperActive = false;// 这个是让自己控制
      this.$emit("change_active", false);
    },
    changeProvince(item) {
      this.$emit("change", item);
    }
  },

  computed: {
    arrlist: function() {
      let col = Math.ceil(this.list.length / 12);
      let resulteList = [];
      for (var i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        resulteList.push(data);
      }
      return resulteList;
    },
    my_Value: {
      get() {
        return this.myValue;
      },
      set(newvalue) {
        this.myValue = newvalue;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/select.scss";
</style>
