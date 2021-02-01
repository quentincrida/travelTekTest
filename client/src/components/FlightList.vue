<template lang="html">
  <div id="flight-list">
    <h2>All Flights</h2>
    <ul>
      <li v-for="flight in flights">{{flight.carrier}} departs {{flight.depair}} arrives {{flight.destair}}</li>
    </ul>
  </div>

</template>

<script>
export default {
  name:"flight-list",
  props:["flights"]
}
</script>

<style lang="css" scoped>
</style>
