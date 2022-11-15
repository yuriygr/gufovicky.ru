<template>
  <div class="container">
    <Logo />
    <div class="card__row">
      <Card v-for="(card, index) in cards" :key="index" :card="card"/>
    </div>
  </div>
</template>

<script>
import Data from '@/Data'
import Logo from '@/components/Logo'
import Card from '@/components/Card'

export default {
  name: 'App',
  components: {
    Logo,
    Card,
  },
  data() {
    return {
      cards: Data
    }
  }
}
</script>

<style>
.card__row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
}
.card.--size_big     { grid-column: span 4; }
.card.--size_not-big { grid-column: span 3; }
.card.--size_medium  { grid-column: span 2; }
.card.--size_small   { grid-column: span 1; }
@media (max-width: 760px) {
  .card.--size_big     { grid-column: span 4; }
  .card.--size_not-big { grid-column: span 4; }
  .card.--size_medium  { grid-column: span 4; }
  .card.--size_small   { grid-column: span 4; }
}
@media (max-width: 340px) {
  .card.--size_big     { grid-column: span 4; }
  .card.--size_not-big { grid-column: span 4; }
  .card.--size_medium  { grid-column: span 4; }
  .card.--size_small   { grid-column: span 4; }
}
</style>