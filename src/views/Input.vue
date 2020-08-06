<template>
  <div class="input">
    <span v-html="msg"/>
    <textarea v-model='msg'></textarea>
    <button @click="toPath(msg)">跳转至该网站</button>
  </div>
</template>
<script>
  export default {
    name: 'input',
    data() {
      return {
        msg: 'baidu'
      }
    },
    methods:{
      toPath(msg){
        window.open(`${msg}`);
      }
    }
  }
</script>