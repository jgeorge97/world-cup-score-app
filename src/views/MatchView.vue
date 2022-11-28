<template>
  <i-container>
    <CurrentMatch v-if="day == 0"/>
    <Matches :apiurl="apiurl" />
  </i-container>
</template>

<script lang="ts">
import CurrentMatch from "@/components/CurrentMatch.vue";
import Matches from "@/components/Matches.vue";
export default {
  name: "MatchView",
  props: {
    day: {
      type: Number,
      required: false,
      default: 0
    }
  },
  components: {
    CurrentMatch, 
    Matches
  },
  computed: {
    apiurl() {
      if ( this.day == 1 )
        return "https://worldcupjson.net/matches/tomorrow";
      return "https://worldcupjson.net/matches/today"
    }
  }
}
</script>