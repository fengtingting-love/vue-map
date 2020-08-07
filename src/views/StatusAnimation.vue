<template>
  <div id="example-7">
    <input v-model="colorQuery" v-on:keyup.enter="updateColor" placeholder="Enter a color">
    <button v-on:click="updateColor">Update</button>
    <p>Preview:</p>
    <span v-bind:style="{ backgroundColor: tweenedCSSColor }" class="example-7-color-preview"></span>
    <p>{{ tweenedCSSColor }}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        colorQuery: '',
        color: {
          red: 0,
          green: 0,
          blue: 0,
          alpha: 1
        },
        tweenedColor: {},
      }
    },
    created: function () {
      this.tweenedColor = Object.assign({}, this.color)
    },
    watch: {
      color: function () {
        function animate() {
          if (window.TWEEN.update()) {
            requestAnimationFrame(animate)
          }
        }

        new window.TWEEN.Tween(this.tweenedColor)
          .to(this.color, 750)
          .start()

        animate()
      }
    },
    computed: {
      tweenedCSSColor: function () {
        return new window.net.brehaut.Color({
          red: this.tweenedColor.red,
          green: this.tweenedColor.green,
          blue: this.tweenedColor.blue,
          alpha: this.tweenedColor.alpha
        }).toCSS()
      }
    },
    methods: {
      updateColor: function () {
        this.color = new window.net.brehaut.Color(this.colorQuery).toRGB()
        this.colorQuery = ''
      }
    },
  }
</script>
<style>
  .example-7-color-preview {
  display: inline-block;
  width: 50px;
  height: 50px;
}
</style>