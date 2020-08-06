<template>
  <div class="comp">
    <Child1 title="oh my god"></Child1>
    <CompB>

    </CompB>
  </div>
</template>
<script>
  import Child1 from '../components/Child1'
  import CompB from '../components/CompB'
  export default{
    components:{
      Child1,
      CompB,
    }
  }
</script>