<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        friends: [
          {
            id: "manuel",
            name: "Manuel Lorenz",
            phone: "01243 45678 90",
            email: "manuel@localhost.com"
          },
          {
            id: "julie",
            name: "Julie Jones",
            phone: "01243 45678 90",
            email: "julie@localhost.com"
          }
        ]
      }
    },
    methods: {}
  }
</script>