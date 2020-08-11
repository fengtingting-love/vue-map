<template>
  <div class="selfComponent">
    <br/>
    <FlexiableSlot :level="1" :content="title1">
      【一级标题】level值为1，表示渲染的是h1标签
    </FlexiableSlot>
    <FlexiableSlot :level="2" :content="title2">
      【二级标题】level值为2，表示渲染的是h2标签
    </FlexiableSlot>
  </div>
</template>
<script>
  import FlexiableSlot from '../components/FlexiableSlot.js'

  export default {
    components: {
      FlexiableSlot,
    },
    data(){
      return {
        title1:'h1传入的内容',
        title2:'h2传入的内容',
      }
    }
  }
</script>