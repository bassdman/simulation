<template>
  <MatchField :width="30" :height="20" :start="2" :destination="97" :nrGood="10" :nrEvil="10"  :weightModificationOnFailure="-2"/>
</template>

<script>
import MatchField from './components/MatchField.vue'

export default {
  name: 'App',
  components: {
    MatchField
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
