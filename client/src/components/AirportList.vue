<template lang="html">
  <div id="airport-list">
    <h2>All Airports</h2>
    <ul>
      <li v-for="airport in airports">{{airport.name}} IATA code:{{airport.abb}}</li>
    </ul>
  </div>

</template>

<script>
export default {
  name:"airport-list",
  props:["airports"]
}
</script>

<style lang="css" scoped>
</style>
