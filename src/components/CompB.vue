<template>
  <div class="compb">
    <a :href="url">
      <slot></slot>
    </a>
  </div>
</template>
<script>
  export default{
    props:['url']
  }
</script>