<template>
  <div class="parentSlot">
    <SlotSon1>
      <template v-slot:scopename="slotProps">
        {{slotProps}}
      </template>
    </SlotSon1>
  </div>
</template>
<script>
  import SlotSon1 from "../components/SlotSon1";

  export default {
    components:{
      SlotSon1
    },
    data(){
      return {

      }
    }
  }
</script>