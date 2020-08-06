<template>
  <div class="son1Slot">
      我是子元素
    <slot name="scopename" :user="user"/>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        user:{
          name:'子',
          age:'20',
          hobby:'footerball'
        }
      }
    }

  }
</script>