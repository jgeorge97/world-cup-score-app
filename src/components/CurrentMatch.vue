<template>
  <div class="_margin-top:2 _margin-bottom:2" v-if="matches.length">
    <h2 class="_margin-x:auto">
      Current Match <i-loader color="primary" size="sm" v-if="loading" />
    </h2>
    <small><i-icon name="ink-info" />Auto Refreshes every 60 seconds</small>
    <div v-if="matches.length > 0">
      <i-row v-for="match in matches" :key="match.id">
        <i-column md="6" offset-md="3">
          <MatchCard :match="match" />
        </i-column>
      </i-row>
    </div>
  </div>
</template>
<script lang="ts">
import type { Match } from "@/types";
import { defineComponent } from "vue";
import fetcher from "../fetcher";
import MatchCard from "@/components/MatchCard.vue";

export default defineComponent({
  name: "CurrentMatch",
  components: { MatchCard },
  data() {
    return {
      loading: false as boolean,
      matches: [] as Match[],
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      let res = await fetcher("https://worldcupjson.net/matches/current");
      this.matches = res;
      this.loading = false;
    },
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.$nextTick(function () {
      window.setInterval(() => {
        this.fetchData();
      }, 60000);
    });
  },
});
</script>
