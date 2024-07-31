<template>
    <div id="end-screen">

        <div v-if="clicked===0" class="summary">

          <p class = "talk-text"> סיכום </p>

          <h1 class="sent1"> {{ summaryArray[0] }} </h1>
          <h1 class="sent2"> {{ summaryArray[1] }} </h1>
          <h1 class="sent3"> {{ summaryArray[2] }} </h1>
          <h1 class="sent4"> {{ summaryArray[3] }} </h1>


          <img class="gear one" src="@/assets/media/newGear.png" alt="gear1">
          <img class="gear two" src="@/assets/media/newGear2.png" alt="gear2">
          <img class="gear three" src="@/assets/media/newGear3.png" alt="gear3">

            <button @click = "next" class="next btnNext"> לסיום </button>

        </div>

        <div v-if="clicked===1" class="end">
        <h1 class="finale-text"> כל הכבוד! 
            <br>
            סיימת את לומדת העיבוד!
        </h1>

        <button @click="closeWindow" class="btnNext-end"> סגירה </button>

          <img class="gear one" src="@/assets/media/newGear.png" alt="gear1">
          <img class="gear two" src="@/assets/media/newGear2.png" alt="gear2">
          <img class="gear three" src="@/assets/media/newGear3.png" alt="gear3">


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

            summaryArray: [' במהלך הלומדה עברנו על השלב הרביעי במעגל החניכה, שלב ה"עיבוד". ',
              ' למדנו על מטרות ותהליך העיבוד, וכיצד מגדירים ומנסחים תופעה. ',
              ' הלומדה הבאה היא הלומדה האחרונה: בנושא "משוב". ',
              ' בהצלחה!!! '
            ]

      
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

<style scoped>

#end-screen {
  text-align: center;
}

.talk-text {
    margin: 2rem;
    animation: floatAnimation 3s ease-in-out infinite;
    color: #ab66e7;
    font-size: 4rem;
    border-radius: 10px;
    text-decoration: none;
    position: relative;
    cursor: default;
    font-family: 'Heebo-Bold';
}

@keyframes floatAnimation {
0% {
    transform: translateY(0);
}
50% {
    transform: translateY(-1rem);
}
100% {
    transform: translateY(0);
}
}

.talk-text:hover {
    color: #ab66e7;
}

.talk-text:before {
    content: "";
    position: absolute;
    width: 40%;
    height: 2px;
    bottom: 0;
    right: 30%;
    background-color: #ab66e7;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
}

.talk-text:hover:before {
    visibility: visible;
    transform: scaleX(1.5);
}

h1 {
  animation: fadeInUp;
  animation-duration: 2s;
  transform-origin: top center;
  line-height: 5rem;
}

.sent2 {
  opacity: 0;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}
.sent3 {
  opacity: 0;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
.sent4 {
  opacity: 0;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  font-family: "Heebo-Bold";
}

@keyframes fadeInUp {
from {opacity: 0;
    transform: translateY( 100rem)}
  to {opacity: 1;
  }
}

.end {
  animation: fadeIn;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
from {opacity: 0;
  }
  to {opacity: 1;
  }
}

.finale-text {
  text-align: center;
    color: rgb(148,112,181);
    font-family: "Heebo-Bold";
    font-size: 5rem;
    margin-top: 8rem;
    line-height: 8rem;
    animation: floatAnimation 3s ease-in-out infinite;
}

@keyframes floatAnimation {
0% {
    transform: translateY(0);
}
50% {
    transform: translateY(-1rem);
}
100% {
    transform: translateY(0);
}
}

.btnNext {
  position: absolute;
    border: none;
    cursor: pointer;   
    height: 4rem;
    left: 10rem;
    bottom: 6rem;
    font-size: 2rem;
    color: #ffffff;
    border-radius: 100px;
    background-color: #ab66e7;
    z-index: 1;
    width: 8rem;
}

.btnNext-end {
    position: absolute;
    border: none;
    cursor: pointer;   
    height: 5rem;
    left: 52rem;
    bottom: 15rem;
    font-size: 2.6rem;
    color: #ffffff;
    border-radius: 100px;
    background-color: rgb(148,112,181);
    width: 12rem;
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
  left: 10rem;
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
  height: 32rem;
  bottom: 11rem;
  right: 1rem;
  animation: clockwise 5s linear infinite;
}

.gear.two {
  bottom: 0.5rem;
  left: 75rem;
  animation: anticlockwise 5s linear infinite;
}

.gear.three {
    height: 30rem;
    bottom: 25rem;
    left: 1rem;
  animation: anticlockwise 5s linear infinite;
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
