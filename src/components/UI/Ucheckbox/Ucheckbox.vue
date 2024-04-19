<template>
  <label>
  <input
    type="checkbox"
    value=""
    id=""
    :name="name"
  />
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "u-checkbox",
  props: {
    array: {
      type: Array,
      default: () => [],
    },
    name: String,
  },
  methods: {
    change(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>


<style lang="scss">
@import url('./Ucheckbox.scss');
</style>
