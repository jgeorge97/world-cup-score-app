<template>
  <div class="_margin-top:2 _margin-bottom:2">
    <h2 style="text-align: center;">
      Matches Today - {{ new Date().toDateString() }}
    </h2>
    <div style="text-align: center;" v-if="loading">
      <i-loader color="primary" />
    </div>
    <div v-else-if="loading === false && matches.length > 0">
      <i-row v-for="match in matches" :key="match.id">
        <i-column md="6" offset-md="3" offset-xs="0" offset-sm="0">
          <MatchCard :match="match" />
        </i-column>
      </i-row>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import fetcher from "../fetcher";
import type { Match } from "@/types";
import MatchCard from "@/components/MatchCard.vue";
export default defineComponent({
  name: "MatchesToday",
  components: {
    MatchCard,
  },
  data() {
    return {
      matches: [] as Match[],
      loading: false as boolean,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      fetcher(`https://worldcupjson.net/matches/today`).then((res) => {
        this.matches = res;
        this.loading = false;
      }).catch((error) => {
        this.loading = false;
        console.error(error);
      })
    },
  },
});
</script>
