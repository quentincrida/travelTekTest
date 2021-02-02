<template lang="html">
  <form v-on:submit.prevent="handleSubmit">

    <label for="airport">Airport</label>
    <input type="text" name="airport" v-model="airport">

    <label for="abb">Airport Abbreviation</label>
    <input type="text" name="abb" value="IATA code">



      <input type="submit" value="Save">

  </form>

</template>

<script>
import { eventBus } from '../main';
export default {
  name: "airport-form",
  data() {
    return {
      airport: "",
      abb: "",
        }
  },

  methods: {
    handleSubmit(){

      const url = `http://localost:3000/api/${this.type}`;
      const payload = {
        airport: this.airport,
        abb: this.abb

      };

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
      }).then(response => {
        eventBus.$emit("refresh-data");
        this.airport = this.abb
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
