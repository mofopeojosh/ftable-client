<template>
  <div class="content-card  rounded overflow-hidden shadow-md flex flex-col justify-between">
    <slot>
      <template v-if="content">
        <div class="p-5">
          <h5 class="font-bold text-md my-2 text-gray-500">{{content.name}}</h5>
          <small class="font-light">{{content.description}}
          </small>
        </div>
        <div class="border-t p-4">
          <div class="flex justify-between items-center">
            <div class="rounded-full w-10 h-10 bg-gray-700" v-if="false"></div>
            <a href=""
               @click.prevent="$emit('view')"
               class="text-purple-300 underline text-sm">
              View
            </a>

            <div class="text-gray-500">
              <a v-if="content.link" :href="content.link" target="_blank" class="">
                <i class="material-icons">link</i>
              </a>
              <a href="" @click.prevent="$emit('edit')">
                <i class="material-icons">edit</i>
              </a>
              <a href="" @click.prevent="$emit('delete')">
                <i class="material-icons">delete</i>
              </a>
            </div>
          </div>
        </div>
      </template>
    </slot>
  </div>
</template>

<script>
export default {
    name: 'ContentCard',
    props: {
        content: Object,
    }
};
</script>

<style scoped>
  .content-card {
    height: 250px;
  }
</style>
