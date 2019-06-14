<template>
  <div>
    <h2>{{ bio }}</h2>
    <ul>
      <li>Name: {{ name }}</li>
      <li>Age: {{ age }}</li>
      <li :style="{color: favouriteColor}">Favourite Colour: {{ favouriteColor }}</li>
      <li>Snack: {{snack}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["snack"],
  data: function() {
    return {
      bio: "My Name is Frah and I am an IMD student.",
      name: "Frah",
      age: 29,
      favouriteColor: "purple"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
</script>
<style>
h2 {
  color: coral;
  font-size: 26px;
}
</style>
 