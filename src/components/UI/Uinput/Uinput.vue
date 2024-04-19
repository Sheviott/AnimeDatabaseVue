<template>
  <input class="" :type="type" :placeholder="placeholder" :value="modelValue" @input="inputUpdate"/>
</template>

<script>
export default {
  name: "u-input",
  data() {
    return {
    };
  },
  props: {
        type: {
          type: String,
        },
        placeholder: {
          type: String,
        },
        modelValue: {
          type: String,
        },
      },
      methods: {
        inputUpdate(event) {
        this.$emit('update:modelValue', event.target.value)
    }
      },
};
</script>

<style lang="scss" >
@import url('./Uinput.scss');
</style>
