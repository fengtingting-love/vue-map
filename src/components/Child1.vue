<template>
  <div class="child1">
    <h1>{{title}}</h1>
    <span>
      修改后：{{AfterTitle}}
      <br/>
      修改后data：{{afterData}}
    </span>
  </div>
</template>
<script>
  export default{
    props:{
      title:{
        type:String
      }
    },
    data(){
      return {
        afterData:this.title+'data修改',
      }
    },
    computed:{
      AfterTitle(){
        return this.title+'修改后'
      }
    }
  }
</script>