<template>
  <div class="selfComponent">
    <br/>
    <FlexiableSlot :level="1">
      【一级标题】level值为1，表示渲染的是h1标签
    </FlexiableSlot>
    <FlexiableSlot :level="2">
      【二级标题】level值为2，表示渲染的是h2标签
    </FlexiableSlot>
  </div>
</template>
<script>
  import FlexiableSlot from '../components/FlexiableSlot.js'

  export default {
    components: {
      FlexiableSlot,
    }
  }
</script>