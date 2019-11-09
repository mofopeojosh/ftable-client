<template>
  <div class="w-screen h-screen inset-0 fixed" v-if="value">
    <div class="h-full w-full flex">

      <div class="w-4/12 relative h-full overflow-scroll bg-white">
        <div class="absolute w-full p-4">

          <slot name="header">
            <div class="my-4 flex">
              <button @click.prevent="closeBox">
                <i class="material-icons text-blue-700">arrow_back</i>
              </button>
              <div class="mx-4">{{title}}</div>
            </div>
          </slot>

          <slot></slot>

        </div>
      </div>

      <div @click="closeBox"
           class="opacity-25 bg-gray-700 h-full flex-1">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SideBox',
    props: {
        value: Boolean,
        title: String,
    },
    methods: {
        closeBox() {
            this.$emit('input', false);
            this.$emit('close');
        }
    }
};
</script>

<style scoped>

</style>
