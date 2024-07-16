<template>
    <div id="process-page">

        <div v-if="clicked===0" class="process-first">
            <div class="idea-icon" @mouseover="upHere = true" @mouseleave="upHere = false"></div>
            <p v-if="upHere" class="what-to-do-text"> לחצו על החץ השחור כדי לגלות את השלב הבא </p>
            <div class="tazpit">
                <p class = "talk-text"> תצפית</p>
                <h3> איסוף סימפטומים </h3>
            </div>
            <img v-if="showArrow1" src="@/assets/media/arrowForProcess3.svg" alt="arrow" class="arrow1" @click="showIbud">

            <div v-if="showIbudDiv" class="ibud">
                <p class = "talk-text"> עיבוד </p>
                <h3> מציאת תופעות וחשיבה על דרכי התמודדות </h3>
            </div>
            <img  v-if="showArrow2" src="@/assets/media/arrowForProcess3.svg" alt="arrow" class="arrow2" @click="showMashov">

            <div v-if="showMashovDiv" class="mashov" >
                <p class = "talk-text"> משוב </p>
                <h3> מציאת המקור לתופעות ובחירת דרכי התמודדות </h3>
            </div>
        </div>

        <div v-if="clicked===1" class="definition">
            <p class = "definition-title talk-text"> הגדרת תופעה</p>
           
            <div class="calculator" :class="{'slide-away' : slideAwayAnimation}">
                <h3 class="how-calculator" > {{ definitionArray[0] }} </h3>
                <button class="calculate-btn" @click="clickedCalculator" :class="{'click-me' : !showAnsCalculator}"> לחצו כאן! </button>
                
            </div>
            <div class="calc-bg"></div>
            <h2 v-if="showAnsCalculator" class="ans-calculator"> {{ definitionArray[1] }} </h2>
        </div>


        <div v-if="clicked===2" class="">
            <p class = "talk-text"> לדוגמה...</p>
           
        </div>


        <div v-if="clicked===3" class="flip-card-container">
            <div v-for="( item, index) in arrayFront" :key="index" :class="['flip-card', this.onStart]">
                <div class="flip-card-inner" :style="`--hue: ${index * 20 }deg`">
                    <div class="flip-card-front">
                        <img :src="src(item)" class="imgFront">
                    </div>
                    <div class="flip-card-back">
                        <h1 class="textBack">{{ arrayBack[index] }} </h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="prev-next-btns">
            <button v-if="clicked>=1 && clicked<=4" @click = "prev" class="prev btnNext"> חזור </button>
            <button v-if="clicked<4" @click = "next" class="next btnNext"> הבא </button>
        </div>

        

        <button v-if="clicked===4" class="btnNext" @click = "nextPage"> המשך </button>
    </div>
</template>

<script>
export default {
    name: "process",
    data() {
        return {
            clicked: 0,

            definitionArray: [' כיצד נגדיר תופעה? ',
                ' עלינו לנתח את הסימפטומים ולמצוא מכנה משותף או מספר מכנים משותפים. לאחר מכן נוכל להבין מה התופעה. ',
            ],
            arrayFront: ['', '', '',''],
            arrayBack: ['חיוביות', 'אובייקטיביות', 'דיוק', 'פירוט'],
            index: 0,
            onStart: 'start',



            showArrow1: false,
            showArrow2: false,

            showIbudDiv: false,
            showMashovDiv: false,

            upHere: false,

            ideaIconSrc: '@/assets/media/ideaIcon-noColor.png',

            showAnsCalculator: false,
            slideAwayAnimation: false,


        };
    },

    mounted() {
        setTimeout( () => {
            this.showArrow1 = true;
        }, 1500);
    },

    methods: {
        next() {
            this.clicked++;
            if(this.clicked===3) {
                setTimeout(() => {
                    this.onStart = 'off';
                }, 100);
            };
            },
        prev() {
            this.clicked--;
            if(this.clicked===3) {
                setTimeout(() => {
                    this.onStart = 'off';
                }, 100);
            };
        },

        showIbud() {
            this.showIbudDiv = true;
            setTimeout( () => {
            this.showArrow2 = true;
        }, 2000);
        },
        showMashov() {
            this.showMashovDiv = true;
        },
        clickedCalculator() {
            this.slideAwayAnimation = true;
        this.showAnsCalculator = true;
           
        },


        src(name) {
            return new URL(`../assets/media/${name}`, import.meta.url).href
        },

        nextPage() {
            this.$emit('next-page');
        }
        },
      
    };

</script>


<style scoped>
h3 {
    font-size: 1.5rem;
}
p {
    text-align: center;
}

.what-to-do-text {
    position: absolute;
    top: 12rem;
    right: 51rem;
}

.idea-icon {
    background-image: url(@/assets/media/ideaIcon-noColor.png);
    background-size:100% 100% ;
    background-repeat: no-repeat;
    position: absolute;
    width: 6rem;
    height: 5rem;
    right: 57rem;
    top: 7rem;
    cursor: pointer;
}

.idea-icon:hover {
    background-image: url(@/assets/media/ideaIcon-color.png);
}

.tazpit {
    position: absolute;
    right: 20rem;
    top: 15rem;
    text-align: center;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
.arrow1 {
    position: absolute;
    width: 15rem;
    right: 31rem;
    top: 20rem;
    rotate: -10deg;
    z-index: 1;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
.arrow1:hover,
.arrow2:hover {
    transform: scale(1.1);
    cursor: pointer;
}
.ibud {
    position: absolute;
    right: 45rem;
    top: 22rem;
    text-align: center;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
.arrow2 {
    position: absolute;
    width: 15rem;
    right: 69rem;
    top: 27rem;
    rotate: -15deg;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.mashov {
    position: absolute;
    right: 75rem;
    top: 30rem;
    text-align: center;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.definition-title {
    text-align: center;
}


.calculator {
    background-image: url(@/assets/media/calculator2.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    width: 40rem;
    height: 40rem;
    right: 40rem;
    top: 14rem;
    z-index: 2;
}

.calc-bg {
    background-color: #ebdef8;
    width: 50rem;
    height: 25rem;
    position: fixed;
    z-index: 1;
    right: 75rem;
    top: 20rem;
}


.how-calculator {
    line-height: 6rem;
  font-family: "Heebo-Bold";

    transform: rotate(-17deg);
    position: absolute;
    top: 7.5rem;
    right: 15.5rem;
}

.calculate-btn {
    position: absolute;
    height: 7.3rem;
    width: 4rem;
    right: 7.5rem;
    top: 20.5rem;
    cursor: pointer;
    background-color: rgb(229,105,139);
    border: none;
    border-radius: 0.5rem;
    rotate: -20deg;
    box-shadow: -8px 8px 0px 0px rgba(186,17,86);
    font-size: 1.2rem;
}

.click-me {
    animation: clickMeAnimation ease 2s infinite;
}

@keyframes clickMeAnimation {
    0% {
        font-size: 1.2rem;
    }
    50% {
        font-size: 1.5rem;
    }
    100% {
        font-size: 1.2rem;
    }
}


.calculate-btn:hover {
    background-color: rgb(240, 137, 164);
}

.calculate-btn:active {
    transform: translate(-8px, 8px);
  -webkit-transform: translate(-8px, 8px);
  box-shadow: -1px 1px 0px 0px rgba(186,17,86);
}

.slide-away {
    animation: slideAway 2s ease forwards;
}

@keyframes slideAway {
    0% {
        transform: none;
    }
    100% {
        transform: translateX(-42%);
    }
    
}




.ans-calculator {
    position: absolute;
    width: 35rem;
    text-align: center;
    right: 30rem;
    top: 20rem;
    line-height: 5rem;
    padding: 2rem;
    padding-left: 10rem;
    animation: fadeInLeft ease 3s;
    background: #fff;
    border-radius: 3rem;
    box-shadow: 0 15px 20px -20px rgba(0, 0, 0, 0.4);
    text-align: center;
}

@keyframes fadeInLeft {
from {opacity: 0;
    transform: translate3d(-30%, 0, 0)}
  to {opacity: 0.9;
    transform: translate3d(0, 0, 0)}
}

 .talk-text {
    margin: 2%;
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
    transform: translateY(-8px);
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


.flip-card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    left: 18%;
    height: 50%;
    bottom: 25%;
}

.flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
    margin: 10px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
}

.flip-card:hover .flip-card-front, .flip-card.start .flip-card-front{
    transform: rotateY(180deg);
}

.flip-card:hover .flip-card-back, .flip-card.start .flip-card-back{
    transform: rotateY(360deg)
}

.flip-card-front,
.flip-card-back {
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: hsl(var(--hue), 75%, 60%);
    border-radius: 30px;
    color: black;
    /* cursor: pointer; */
}

.flip-card-back {
    background-color: #7B2CBF;
    border-radius: 30px;
    color: rgb(84, 82, 82);
    transform: rotateY(180deg);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    /* cursor: pointer; */
}

.imgFront {
    width: 60%;
    position: absolute;
    left: 20%;
    top: 20%;
}

.over-me {
    position: absolute;
    top: 70%;
    right: 10%;
    font-size: 1.2rem;
    color: #5f5a5a;
    /* animation: floatAnimation 3s ease-in-out infinite; */
}

.textBack {
    padding: 5%;
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
    width: 7vw;
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

.prev {
  left: 84%;
  text-align: center;
}

.next {
  left: 10%;
  text-align: center;

} 
</style>