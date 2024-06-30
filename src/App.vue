<template>
  <div id="app">
    <img
      src="@/assets/media/mifkada-logo.png"
      class="logo"
      alt="Logo"
      @click="homePage"
    />
    <img
      src="@/assets/media/madortill.png"
      alt="mador-till"
      class="mador-till"
    />
    <openScreen v-if="page === 0" @next-page="nextPage"></openScreen>
    <navbar v-if="showNav" :titleIndex="titleIndex"></navbar>
    <basic-principles v-if="page === 1" @next-page="nextPage"></basic-principles>
  </div>
</template>

<script>
import OpenScreen from "@/components/OpenScreen.vue";
import Navbar from '@/components/Navbar.vue';
import BasicPrinciples from '@/components/BasicPrinciples.vue';

export default {
  name: "app",
  components: {
    OpenScreen,
    Navbar,
    BasicPrinciples
  },
  data() {
    return {
      page: 0,
      titleIndex: -1,
      showNav: true,
    };
  },
  methods: {
    nextPage() {
      this.page++;
      this.titleIndex++;
    },
    homePage() {
        this.page = 0;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Heebo";
  src: url("@/assets/fonts/heebo.regular.ttf");
}

@font-face {
  font-family: "Heebo-Bold";
  src: url("@/assets/fonts/heebo.black.ttf");
}

* {
  overflow: hidden;
  font-family: "Heebo";
  direction: rtl;
}

body {
  margin: 0;
  direction: rtl;
}

#app {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #fdeed5;
}

.logo {
  max-width: 100px;
  position: absolute;
  top: 1%;
  left: 1%;
  z-index: 3;
  cursor: pointer;
}

.mador-till {
  max-height: 10%;
  max-width: 90px;
  position: absolute;
  bottom: 1%;
  right: 1%;
  z-index: 3;
}

/* Ensure any other necessary styles are properly defined */
</style>
