<script>
import ProInput from '$common/ProInput'
export default {
  name: 'PublicHome',
  components: {
    'pro-input': ProInput,
  },
  data () {
    return {
      showAnswer: false,
      num1: 0,
      num2: 0
    }
  },
  methods: {
    newCard() {
      this.showAnswer = false
      this.num1 = Math.floor(Math.random() * 13)
      this.num2 = Math.floor(Math.random() * 13)
    }, 
  },
  computed: {
    answer () {
      return this.num1 * this.num2
    }
  },
  mounted() {
    this.newCard()
  }
}
</script>

<template lang="pug">
  .main-container
    .grid
      .problem
        .op
        .num {{num1}}
        .op x
        .num {{num2}}
        .answer(
          :class='showAnswer ? "black" : "white"'
        ) {{answer}}
      .button(
        v-if='!showAnswer'
      )
        .pro-button.outline(
          @click='showAnswer = !showAnswer'
        ) Show Answer
      .button(
        v-if='showAnswer'
      )
        .pro-button.outline(
          @click='newCard()'
        ) Next Flash Card
</template>

<style lang="sass" scoped>
  @import '$vars'
  @import '$styles/form.sass'
  .main-container
    transition: .5s
    font-size: 1.3em
    .grid
      grid-template-rows: 80% 20%
      grid-tempalte-columns: 100%
      height: 100%
      width: 100%
      max-height: 40rem
      max-width: 40rem
      margin: auto
      .problem
        display: grid
        width: 100%
        grid-template-columns: 0.5em 1fr
        grid-template-rows: repeat(3, 1em)
        align-items: end
        justify-items: end
        padding-top: 100%
        font-size: 5em
        .answer
          grid-column-start: 1
          grid-column-end: 3
          height: 1em
          width: 100%
          text-align: right
          border-top: 5px solid black
          &.white
            color: white
    .text, .pro-button.outline
      border-radius: 1em
      background-color: #ffffff88
    .grid, .info, .button
      display: grid
      justify-content: center
      align-content: center
</style>
