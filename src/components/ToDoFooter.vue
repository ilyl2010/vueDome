<template>
  <div class="todo-footer">
    <label>
      <!--<input type="checkbox" v-model="isCheck"/>-->
      <slot name="checkall"></slot>
    </label>
    <span>
          <!--<span>已完成{{completeNum}}/ 全部{{todos.length}}</span> -->
      <slot name="count"></slot>
        </span>
    <!--<button class="btn btn-danger" @click="delTrue1" v-show="completeNum>0">清除已完成任务</button>-->
  <slot name="delete"></slot>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
