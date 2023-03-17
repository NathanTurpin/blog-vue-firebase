<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }">Blog</router-link>
      </div>
      <div class="nav-links">
        <ul>
          <router-link class="link" to="#">Accueil</router-link>
          <router-link class="link" to="#">Blogs</router-link>
          <router-link class="link" to="#">Créer un article</router-link>
          <router-link class="link" to="#">Connection</router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "base-nav",
  components: {},
};
</script>

<style scoped lang="scss">
</style>