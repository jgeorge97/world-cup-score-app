<template>
  <i-card class="_margin-bottom:1">
    <i-row center class="_margin-bottom:1">
      <i-column xs="6">
        <img
          :src="`https://countryflagsapi.com/png/${match.home_team.name}`"
          :alt="`Flag of ${match.home_team.name}`"
          class="image"
          style="width: 50%"
        />
      </i-column>
      <i-column xs="6">
        <img
          :src="`https://countryflagsapi.com/png/${match.away_team.name}`"
          :alt="`Flag of ${match.away_team.name}`"
          class="image"
          style="width: 50%"
        />
      </i-column>
    </i-row>
    <i-row center class="_margin-bottom:1">
      <i-column md="3" xs="3"
        >{{ match.home_team.name }} ({{ match.home_team_country }})</i-column
      >
      <i-column md="2" xs="2">{{ match.home_team.goals }}</i-column>
      <i-column>{{ match.time }}</i-column>
      <i-column md="2" xs="2">{{ match.away_team.goals }}</i-column>
      <i-column md="3" xs="3"
        >{{ match.away_team.name }} ({{ match.away_team_country }})</i-column
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

export default defineComponent({
  name: "MatchCard",
  props: {
    match: {
      type: Object as PropType<Match>,
      required: true,
    },
  },
});
</script>
