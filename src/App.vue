<template>
  <Nav></Nav>
  <router-view />
</template>

<script>
import Nav from "@/components/base/Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.container {
  width: 100%;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  &--light {
    color: #fff;
  }
}
</style>
