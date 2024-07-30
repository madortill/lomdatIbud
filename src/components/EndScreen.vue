<template>
    <div id="end-screen">



        <h1 class="finale-text"> כל הכבוד! 
            <br>
            סיימת את לומדת העיבוד!
        </h1>

        <h2> לומדה 4 מתוך 5 במארז הלמידה </h2>

        <button @click="closeWindow" class="btnNext"> סגירה </button>

        <img class="gear one" src="@/assets/media/gear2.png" alt="gear1">
        <img class="gear two" src="@/assets/media/gear2.png" alt="gear2">



        <!-- <h3 class="conclusion-text">לסיכום</h3>
        <div class="finale-exe type-writer">
            <p v-for="(text, index) in array1" :key="text" :style="{
                '--delay': `${index * 3.2}s`,
                '--width': `${text.length}ch`,
                'font-size': index === 0 || index === 2 ? '3rem' : '1.6rem'
            }" class = "text-writer">
            {{ text }}
        </p>
        </div> -->

        <!-- <img v-show="showClose" src = "@/assets/media/שרוך-בורדו-מעודכן.svg" class = "burgundy-lace"> -->
        <!-- <div v-show="showClose" class="finish-exe">
            <h1 class="finale-text">כל הכבוד סיימת את לומדת העיבוד!</h1>
            <button @click="closeWindow" class="closeBtn">סיום</button>
        </div> -->



    </div>
</template>

<script>

export default {
    name: 'end-screen',
    components: {

    },
    data() {
        return {
            // showClose: false,
        };
    },
    mounted() {
        // setTimeout(() => {
        //     this.showClose = true;
        // }, 23500);
    },
    methods: {
        closeWindow() {
            window.close(); // סוגר את חלון האתר.
        },
    },
}
</script>

<style>

#end-screen {
  text-align: center;
}

.finale-text {
    color: rgb(148,112,181);
    font-family: "Heebo-Bold";
    font-size: 5rem;
  
}


.btnNext {
    position: absolute;
    border: none;
    cursor: pointer;   
    height: 7%;
    left: 45%;
    bottom: 20%;
    font-size: 2.6rem;
    color: #ffffff;
    border-radius: 100px;
    /* background-color: rgb(201,165,249); */
    background-color: rgb(148,112,181);
    width: 10vw;
  font-family: 'Heebo-Bold';


}


.btnNext {
  animation: borderPulse 4000ms infinite ease-out;
}


.btnNext:hover,
.btnNext:focus {
  animation: borderPulse 4000ms infinite ease-out,  hoverShine 200ms;
}

@keyframes borderPulse {
  0% {
    box-shadow: inset 0px 0px 0px 5px rgba(255, 255, 255,.4), 0px 0px 0px 0px rgba(255,255,255,1);
  }
  35% {
    box-shadow: inset 0px 0px 0px 3px rgba(117, 117, 255,.2), 0px 0px 0px 10px rgba(255,255,255,0);
  }
  50% {
    box-shadow: inset 0px 0px 0px 5px rgba(255, 255, 255,.4), 0px 0px 0px 0px rgba(255,255,255,1);
  } 
  75% {
    box-shadow: inset 0px 0px 0px 3px rgba(117, 117, 255,.2), 0px 0px 0px 10px rgba(255,255,255,0);
  }
  100% {
    box-shadow: inset 0px 0px 0px 5px rgba(255, 255, 255,.4), 0px 0px 0px 0px rgba(255,255,255,1);
  }
}


@keyframes hoverShine {
  0%{
    background-image: linear-gradient(135deg, rgba(255,255,255,.4) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%);
  }
  50%{
    background-image: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.4) 50%, rgba(255,255,255,0) 100%);
  }
  100%{
    background-image: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,.4) 100%);
  }
}

.gear {
  position: relative;
  z-index: 0;
  /* transform: scale(1.5%); */
  /* width: 60vw; */
  /* height: 65vh; */
  height: 42rem;
  margin: 0 auto;
  border-radius: 50%;
  background: var(--stroke-color);
 
}
.gear:before{
  position: absolute;
  /* left: 5px; top: 5px; right: 5px; bottom: 5px; */
  z-index: 2;
  content: "";
  border-radius: 50%;
  background: var(--main-color);
}
.gear:after {
  /* position: absolute; left: 25px; top: 25px; */
  position: absolute; left: 25rem; top: 25rem;

  z-index: 3;
  content: "";
  /* width: 70px; height: 70px; */
  width: 70rem; height: 70rem;

  border-radius: 50%;
  border: 5px solid var(--stroke-color);
  box-sizing: border-box;
  background: var(--main-color);
}
.gear.one {
  /* bottom: 18vh; */
  bottom: 5rem;
  /* right: 5vw; */
  right: -30rem;
  animation: clockwise 5s linear infinite;

}

.gear .bar {
  position: absolute; left: -15px; top: 50%;
  z-index: 0;
  width: 150px; height: 30px;
  margin-top: -15px;
  border-radius: 5px;
  background: var(--stroke-color);
}
.gear .bar:before {
  position: absolute; left: 5px; top: 5px; right: 5px; bottom: 5px;
  z-index: 1;
  content: "";
  border-radius: 2px;
  background: var(--main-color);
}
.gear .bar:nth-child(2) {
  transform: rotate(60deg);
  -webkit-transform: rotate(60deg);
}
.gear .bar:nth-child(3) {
  transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
}


@keyframes clockwise {
  0% { -webkit-transform: rotate(0deg);}
  100% { -webkit-transform: rotate(360deg);}
}
@keyframes anticlockwise {
  0% { -webkit-transform: rotate(360deg);}
  100% { -webkit-transform: rotate(0deg);}
}
@-webkit-keyframes clockwise {
  0% { -webkit-transform: rotate(0deg);}
  100% { -webkit-transform: rotate(360deg) ;}
}
@-webkit-keyframes anticlockwise {
  0% { -webkit-transform: rotate(360deg);}
  100% { -webkit-transform: rotate(0deg);}
}
.loading .gear.one, .loading .gear.three {
    animation: clockwise 5s linear infinite;
}
.loading .gear.two {
    animation: anticlockwise 5s linear infinite;
}
</style>
