<template>


    <div id="app">
       <img src="@/assets/media/mifkada-logo.png" class="logo" alt="Logo" @click = "homePage">
       <img src="@/assets/media/madortill.png" alt="mador-till" class="mador-till">
       <openScreen></openScreen>
    </div>


</template>


<script>
import OpenScreen from '@/components/OpenScreen.vue';


export default {
    name: "app",
    components: {
        OpenScreen,
    },
    data() {
        return {
            page: 0 ,
        };
    },
    methods: {
        nextPage() {
            this.page++;
        },
    },
};
</script>


<style scoped>
@font-face {
    font-family: 'Heebo';
    src: url('@/assets/fonts/heebo.regular.ttf');
}


@font-face {
    font-family: 'Heebo-Bold';
    src: url('@/assets/fonts/heebo.black.ttf');
}


* {
    overflow: hidden;
    font-family: 'Heebo';
}


body {
    margin: 0;
    direction: rtl;
}


#app {
    font-family: 'Heebo';
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #fdeed5;
}


.logo {
    max-width: 100px;
    left: 0;
    top: 0;
    position: absolute;
    margin-top: 1%;
    margin-left: 1%;
    z-index: 3;
}


.mador-till {
    max-height: 10%;
    max-width: 90px;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 1%;
    margin-right: 1%;
    z-index: 3;
}


/* .gray-triangle {
    min-width: 50px;
    max-width: 220px;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
} */
</style>
