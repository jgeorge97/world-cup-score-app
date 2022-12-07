<template>
  <div class="_margin-top:2 _margin-bottom:2">
    <h2 class="_margin-x:auto">Matches Tomorrow</h2>
    <div class="_margin-x:auto" v-if="loading">
      <i-loader color="primary" />
    </div>
    <div v-else-if="loading === false && matches.length > 0">
      <i-row v-for="match in matches" :key="match.id">
        <i-column md="6" offset-md="3" offset-xs="0" offset-sm="0">
          <MatchCard :match="match" />
        </i-column>
      </i-row>
    </div>
    <div v-else-if="loading === false && matches.length === 0">
      <p class="_font-size:lg">❌ No Matches Today</p>
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
    async fetchData() {
      try {
        this.loading = true;
        let res = await fetcher(`https://worldcupjson.net/matches/tomorrow`);
        this.matches = res;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.error(error);
      }
    },
  },
});
</script>
