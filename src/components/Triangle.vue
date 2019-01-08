<template>
  <div>
    <triangle-form :active="activeC" />
  </div>
</template>
<script>
import TriangleForm from './TriangleForm'
export default {
  methods: {
    activeC (a, b) {
      if (
        a === '' ||
        a === null ||
        a === 0 ||
        (b === '' || b === null || b === 0)
      ) {
        return true
      } else {
        this.$nextTick(() => {
          this.$root.$emit('calculatingRange')
        })
        return false
      }
    }
  },
  mounted () {
  },
  components: {
    TriangleForm
  }
}
</script>
<style lang="scss">
// eslint-disable-next-line
$white: rgba(255, 255, 255, 1);
$darkGray: rgba(0, 0, 0, 0.75);
$transOrange: rgba(245, 132, 20, 0.75);
$ultraTransOrange: rgba(245, 132, 20, 0.25);
$opaqueOrange: rgba(245, 132, 20, 1);

@mixin placeholder($color) {
  &::-webkit-input-placeholder {
    text-overflow: ellipsis;
    color: $color;
  }
  &:-moz-placeholder {
    text-overflow: ellipsis;
    color: $color;
  }
  &::-moz-placeholder {
    text-overflow: ellipsis;
    color: $color;
  }
  &:-ms-input-placeholder {
    text-overflow: ellipsis;
    color: $color;
  }
}

@mixin box-shadow($color) {
  -webkit-box-shadow: 0 0 5px $color;
  -moz-box-shadow: 0 0 5px $color;
  box-shadow: 0 0 5px $color;
}

@mixin fieldFocus() {
  &:focus {
    color: $white;
    background-color: $ultraTransOrange;
    border: 2px solid $white;
    @include box-shadow($white);
    @include placeholder($white);
  }
}

form {
  width: 100%;
  max-width: 960px;
  height: 100%;
}
.formWrap {
  width: 75%;
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  overflow: auto;
  p {
    color: $opaqueOrange;
    padding-left: 0.5rem;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
}
input {
  &[type="number"] {
    width: 96%;
    height: 2.5rem;
    margin: 0 0.25rem 0.5rem;
    padding-left: 0.5rem;
    background-color: $white;
    outline: none;
    transition-property: background-color, border, box-shadow;
    transition-duration: 0.5s;
    @include placeholder($opaqueOrange);
  }
  @include fieldFocus();
  &:focus {
    color: $darkGray;
    background-color: $ultraTransOrange;
    border: 2px solid $white;
    @include box-shadow($white);
    @include placeholder($white);
  }
  &[type="submit"] {
    width: 25%;
    height: 2.5rem;
    line-height: 2.5rem;
    border: 2px solid $darkGray;
    border-radius: 0.25rem;
    color: $darkGray;
    text-transform: uppercase;
    background-color: transparent;
    transition: background-color 0.5s;
    &:hover {
      color: $white;
      border: 2px solid $white;
      background-color: $opaqueOrange;
    }
    &:focus {
      background-color: $opaqueOrange;
      outline: none;
    }
  }
}
</style>
