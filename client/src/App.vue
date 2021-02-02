<template>
  <div id="app">
    <h1>Traveltek</h1>
    <h2>Flight Form</h2>
    <flight-form/>
    <flight-list :flights="flights" />
    <h2>Airport Form</h2>
    <airport-form/>
    <airport-list :airports="airports" />

  </div>
</template>

<script>
import FlightForm from'@/components/FlightForm';
import AirportForm from '@/components/AirportForm';
import FlightList from '@/components/FlightList';
import AirportList from '@/components/AirportList';

import { eventBus  } from './main';

export default {
  name: 'app',
    data () {
    return {
      flights: [],
      airports: []
    }
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/api/flights")
      .then(response => response.json())
      .then(flights => this.flights = flights);

      fetch("http://localhost:3000/api/airports")
      .then(response => response.json())
      .then(airports => this.airports = airports);
    }
  },
  mounted(){
    this.fetchData();

    eventBus.$on("refresh-data", this.fetchData);
  },
  components: {
    'flight-form': FlightForm,
    'airport-form': AirportForm,
    'flight-list': FlightList,
    'airport-list': AirportList
  }
}
</script>

<style>

</style>
