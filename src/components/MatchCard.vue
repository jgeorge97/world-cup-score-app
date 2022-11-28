<template>
  <i-card class="_margin-bottom:1">
    <i-row center class="_margin-bottom:1">
      <i-column xs="3" style="text-align: left;">
        <img
          :src="getflag(match.home_team_country)"
          :alt="`Flag of ${match.home_team.name}`"
          class="image"
          style="width: 100%"
        />
      </i-column>
      <i-column xs="3"></i-column>
      <i-column xs="3" style="text-align: right;">
        <img
          :src="getflag(match.away_team_country)"
          :alt="`Flag of ${match.away_team.name}`"
          class="image"
          style="width: 100%"
        />
      </i-column>
    </i-row>
    <i-row center class="_margin-bottom:1">
      <i-column xs="3"
        >{{ match.home_team.name }}<br/>({{ match.home_team_country }})</i-column
      >
      <i-column xs="3">
        {{ match.home_team.goals }} - {{ match.away_team.goals }}
        <br/>
        {{ match.time }}
      </i-column>
      <i-column xs="3"
        >{{ match.away_team.name }}<br/>({{ match.away_team_country }})</i-column
      >
    </i-row>
    <i-row center>
      <i-column>
        <i-row v-for="event in match.home_team_events" :key="event.id">
          <i-column v-if="event.type_of_event === 'goal'">
            {{ event.time }} {{ event.player }}
          </i-column>
        </i-row>
      </i-column>
      <i-column>
        <i-row v-for="event in match.away_team_events" :key="event.id">
          <i-column v-if="event.type_of_event === 'goal'">
            {{ event.time }} {{ event.player }}
          </i-column>
        </i-row>
      </i-column>
    </i-row>
    <i-row md="12" center>{{
      new Date(match.datetime).toLocaleTimeString()
    }}</i-row>
    <template #footer>
      Venue: {{ match.venue }}, {{ match.location }}
    </template>
  </i-card>
</template>
<script lang="ts">
import type { Match } from "@/types";
import { defineComponent, type PropType } from "vue";
import countries from "@/countries";

export default defineComponent({
  name: "MatchCard",
  props: {
    match: {
      type: Object as PropType<Match>,
      required: true,
    },
  },
  methods: {
    getflag(code: string) {
      return countries.getflag(code);
    }
  }
});
</script>
