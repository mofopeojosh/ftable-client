<template>
  <div class="w-screen h-screen inset-0 fixed" v-if="value">
    <div class="mx-64 my-20 relative h-full overflow-scroll">
      <div class="z-10 absolute w-full">
        <slot></slot>
      </div>
    </div>
    <div @click="$emit('input', false); $emit('close')" class="opacity-25 bg-gray-700 w-screen h-screen absolute inset-0"></div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        value: Boolean
    }
};
</script>

<style scoped>

</style>
