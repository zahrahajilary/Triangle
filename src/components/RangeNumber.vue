<template>
  <div>
    <h5>The Range of Third line is between <strong> {{minCLine}} </strong> and <strong> {{maxCLine}} </strong></h5>
  </div>
</template>
<script>
export default {
  props: ['fL', 'sL'],
  data () {
    return {
      minCLine: 0,
      maxCLine: 0
    }
  },
  methods: {
    rangeNumber () {
      this.minCLine = Number(this.fL) - Number(this.sL)
      this.minCLine = Math.abs(this.minCLine)
      this.maxCLine = Number(this.fL) + Number(this.sL)
      this.$nextTick(() => {
        this.$root.$emit('checkingInput', [this.minCLine, this.maxCLine])
      })
    }
  },
  mounted () {
    this.$root.$on('calculatingRange', () => {
      this.rangeNumber()
    })
  }
}
</script>
