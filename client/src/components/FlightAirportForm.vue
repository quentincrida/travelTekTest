<template lang="html">
  <form v-on:submit.prevent="handleSubmit">
    <label for="carrier">Carrier</label>
    <input type="text" name="carrier" v-model="carrier">

    <label for="depair">Departure Airport</label>
    <input type="text" name="depair" value="IATA code">

    <label for="destair">Destination Airport</label>
    <input type="text" name="destair" value="destair">

    <label for="type">Type</label>
      <select name="type" v-model="type">
        <option value="" disabled>Choose...</option>
        <option value="flights">Flight</option>
        <option value="airports">Airport</option>
      </select>

      <input type="submit" value="Save">

  </form>

</template>

<script>
import { eventBus } from '../main';
export default {
  name: "flight-airport-form",
  data() {
    return {
      carrier: "",
      depair: "",
      destair: "",
      type: ""
    }
  },

  methods: {
    handleSubmit(){

      const url = `http://localost:3000/api/${this.type}`;
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
        this.carrier = this.depair = this.destair = this.type = "";
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
