<template>
  <form>
    <div class="form-control">
      <label for="email">Email</label>
      <input id="email" type="email" />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input id="password" type="password" />
    </div>
    <base-button>Login</base-button>
    <base-button type="button" mode="flat">Signup</base-button>
  </form>
</template>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
