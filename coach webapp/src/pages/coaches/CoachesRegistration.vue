<template>
  <section>
    <base-card>
      <h2>Register as a coach now</h2>
      <coach-form @save-data="save"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },
  methods: {
    save(data) {
      this.$store.dispatch('coaches/registerCoach', data);
    },
  },
};
</script>
