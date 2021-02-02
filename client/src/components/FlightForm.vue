<template lang="html">

  <form v-on:submit.prevent="handleSubmit">

    <label for="carrier">Carrier</label>
    <input type="text" name="carrier" v-model="carrier">

    <label for="depair">Departure Airport</label>
    <input type="text" name="depair" value="IATA code">

    <label for="destair">Destination Airport</label>
    <input type="text" name="destair" value="destair">



      <input type="submit" value="Save">

  </form>

</template>

<script>
import { eventBus } from '../main';
export default {
  name: "flight-form",
  data() {
    return {
      carrier: "",
      depair: "",
      destair: ""

    }
  },

  methods: {
    handleSubmit(){

      const url = `http://localost:3000/api/flight`;
      const payload = {
        carrier: this.carrier,
        depair: this.depair,
        destair: this.destair
      };

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
      }).then(response => {
        eventBus.$emit("refresh-data");
        this.carrier = this.depair = this.destair;
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
