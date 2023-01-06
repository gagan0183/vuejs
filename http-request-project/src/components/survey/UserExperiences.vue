<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperience"
          >Load Submitted Experiences</base-button
        >
      </div>
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="!loading && error">
        {{ error }}
      </div>
      <div v-else-if="!isLoading && (!results || results.length === 0)">
        No experience present
      </div>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperience() {
      this.isLoading = true;
      this.error = null;
      fetch(
        'https://vue-http-project-492bd-default-rtdb.firebaseio.com/surveys.json'
      )
        .then(async (response) => {
          if (response.ok) {
            const data = await response.json();
            const results = [];
            for (const id in data) {
              results.push({
                id: id,
                name: data[id].name,
                rating: data[id].rating,
              });
            }
            this.results = results;
            this.isLoading = false;
          }
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = 'Unable to fetch experience';
        });
    },
  },
  mounted() {
    this.loadExperience();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
