<template>
    <div id="end-screen">

        <div v-if="clicked===0" class="summary">
אגחיק

            <button v-if="clicked===0" @click = "next" class="next btnNext"> לסיום </button>

        </div>

        <div v-if="clicked===1" class="end">
        <h1 class="finale-text"> כל הכבוד! 
            <br>
            סיימת את לומדת העיבוד!
        </h1>

        <h2> לומדה 4 מתוך 5 במארז הלמידה </h2>

        <button @click="closeWindow" class="btnNext-end"> סגירה </button>

        <img class="gear one" src="@/assets/media/gear1.png" alt="gear1">
        <img class="gear two" src="@/assets/media/gear1.png" alt="gear2">
        <img class="gear three" src="@/assets/media/gear2.png" alt="gear3">


        </div>
        

     
    </div>
</template>

<script>

export default {
    name: 'end-screen',
    components: {

    },
    data() {
        return {
            clicked: 0,

      
        };
    },
    mounted() {
      
    },
    methods: {

        next() {
            this.clicked++;
            },

        prev() {
            this.clicked--;
        },

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
    margin-top: 7rem;
    animation: floatAnimation 3s ease-in-out infinite;
}

@keyframes floatAnimation {
0% {
    transform: translateY(0);
}
50% {
    transform: translateY(-8px);
}
100% {
    transform: translateY(0);
}
}

.btnNext {
    position: absolute;
    border: none;
    cursor: pointer;   
    height: 5%;
    left: 10%;
    bottom: 10%;
    font-size: 2rem;
    color: #ffffff;
    border-radius: 100px;
    background-color: #ab66e7;
    z-index: 1;
    width: 7vw;
}

.btnNext-end {
    position: absolute;
    border: none;
    cursor: pointer;   
    height: 7%;
    left: 45%;
    bottom: 20%;
    font-size: 2.6rem;
    color: #ffffff;
    border-radius: 100px;
    background-color: rgb(148,112,181);
    width: 10vw;
  font-family: 'Heebo-Bold';
}

.btnNext-end,
.btnNext {
  animation: borderPulse 4000ms infinite ease-out;
}

.btnNext,
.btnNext-end:hover,
.btnNext,
.btnNext-end:focus {
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

.next {
  left: 10%;
  text-align: center;

} 

.gear {
  position: absolute;
  z-index: 0;
  height: 25rem;
  margin: 0 auto;
  border-radius: 50%;
  background: var(--stroke-color);
 
}
.gear:before{
  position: absolute;
  z-index: 2;
  content: "";
  border-radius: 50%;
  background: var(--main-color);
}
.gear:after {
  position: absolute; left: 25rem; top: 25rem;
  z-index: 3;
  content: "";
  width: 70rem; height: 70rem;
  border-radius: 50%;
  border: 5px solid var(--stroke-color);
  box-sizing: border-box;
  background: var(--main-color);
}
.gear.one {
  bottom: 17rem;
  right: 2rem;
  animation: clockwise 5s linear infinite;
}

.gear.two {
  bottom: 4rem;
  left: 76rem;
  animation: anticlockwise 5s linear infinite;
}

.gear.three {
    height: 30rem;
    bottom: 25rem;
    left: -3rem;
  animation: anticlockwise 5s linear infinite;

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





</style>
