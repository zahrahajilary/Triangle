<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h4>Detect Type of Triangle</h4>
      </div>
      <div slot="form-body">
        <div class="formWrap">
          <p>First Line :</p>
          <input type="number" placeholder="insert first line" v-model="aLine">
          <p>Second Line:</p>
          <input type="number" placeholder="insert second line" v-model="bLine">
          <p>Third Line</p>
          <input
            type="number"
            placeholder="insert third line"
            v-model="cLine"
            v-on:input="validation"
            :disabled="active(aLine,bLine)"
          >
          <div v-if="error">
            <small style="color:red">this is wrong number</small>
          </div>
        </div>
      </div>
    </form-helper>
    <range-number :fL="aLine" :sL="bLine"/>
    <detect-type
      :aLine="aLine"
      :bLine="bLine"
      :cLine="cLine"
      :activeBtn="activeClickButton"
      :checking="checkTypeTriangle"
      :result="type"
    />
  </div>
</template>
<script>
import formHelper from './FormHelper'
import DetectType from './DetectType'
import RangeNumber from './RangeNumber'

export default {
  props: ['active'],
  data () {
    return {
      aLine: 0,
      bLine: 0,
      cLine: 0,
      type: '',
      error: false
    }
  },
  methods: {
    activeClickButton (a, b, c) {
      if (
        a === '' ||
        a === null ||
        a === 0 ||
        (b === '' || b === null || b === 0) ||
        (c === '' || c === null || c === 0) ||
        this.error === true
      ) {
        return true
      } else {
        return false
      }
    },

    checkTypeTriangle (a, b, c) {
      var aL = Number(a)
      var bL = Number(b)
      var cL = Number(c)
      if (aL === cL && aL === bL) {
        this.type = 'equilateral'
        this.$store.dispatch('getResult', this.type)
        return this.type
      } else if (aL === bL || bL === cL || aL === cL) {
        this.type = 'isosceles'
        this.$store.dispatch('getResult', this.type)
        return this.type
      } else if (aL !== bL || bL !== cL || cL !== aL || (aL !== bL) !== cL) {
        this.type = 'scalene'
        this.$store.dispatch('getResult', this.type)
        return this.type
      }
    },
    validation () {
      this.$nextTick(() => {
        this.$root.$on('checkingInput', data => {
          if (data[0] <= this.cLine && this.cLine <= data[1]) {
            this.error = false
          } else {
            this.error = true
            this.$store.dispatch('getResult', '')
          }
        })
      })
    }
  },
  components: {
    formHelper,
    DetectType,
    RangeNumber
  }
}

</script>
