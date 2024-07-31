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
                <button class="calculate-btn" @click="clickedCalculator" :class="{'click-me' : !showAnsCalculator}"> {{ calculatorBtnText }} </button>
                
            </div>
            <div class="calc-bg"></div>
            <h2 v-if="showAnsCalculator" class="ans-calculator"> {{ definitionArray[1] }} </h2>
        </div>


        <div v-if="clicked===2" class="example">
            <p class = "example-title"> לדוגמה...</p>

            <div class="circle circle0" >
                <p> {{ circlesArray[0] }} </p></div>
            
            <div class="circle circle1" >
                <p> {{ circlesArray[1] }} </p></div>
            
            <div class="circle circle2" >
                <p> {{ circlesArray[2] }} </p></div>
           

            <img class="arrow-for-example" src="@/assets/media/arrowForExample.png" alt="arrow">

            <div class = "example-text"> תנועות ידיים לא ממחישות </div>

            <img class="example-right" src="@/assets/media/exampleRight.png" alt="right">
            <img class="example-left" src="@/assets/media/exampleLeft.png" alt="left">

            <div class="symptoms"> סימפטומים </div>
            <div class="phenomenon"> תופעה </div>

        </div>

        <div v-if="clicked===3" class="wording">
            <p class = "talk-text"> ניסוח תופעה </p>

            <div  class="logout">  </div>
            <div class="doorway" :class="{'grow' : growAnimation}" >  

                <p> {{ arrayWording[2] }} </p>
                <p class="body-explanation" v-if="explainBody"> {{ arrayWording[3] }} </p>


                <button v-if="showButton" @click="moveToSummary"> ואז... </button>
            </div>


            <div  class="door" @click="openDoor" :class="{'open-door' : openDoorAnimation}">
                    <p> {{ arrayWording[0] }}</p>
                    <p class="opening-explanation"> {{ arrayWording[1] }} </p>
                        <span></span>
            </div>
            
            <div v-if="showOpening" class="wording-text-container">
                <h2 class="opening"> {{ arrayWording[0] }} </h2>
            <img class="arrow-for-wording" src="@/assets/media/arrowForExample.png" alt="arrow">

                <h2 class="body"> גוף </h2>
            <img class="arrow-for-wording" src="@/assets/media/arrowForExample.png" alt="arrow">

                <h2 class="sum"> סיכום </h2>
            </div>
            


        </div>

        <div v-if="clicked===4" class="wording-steps">
            <p class = "steps-title"> שלבי ניסוח תופעה </p>

                <div class="steps-container">

                    <div class="step"> {{ arraySteps[0] }} </div>
                    <div class="step"> {{ arraySteps[1] }} </div>
                    <div class="step"> {{ arraySteps[2] }} </div>
                    <div class="step"> {{ arraySteps[3] }} </div>
                    <div class="step"> {{ arraySteps[4] }} </div>
                    <div class="step"> {{ arraySteps[5] }} </div>

                </div>

                <div class="numbers-container">

                    <img class="num" src="@/assets/media/1.png" alt="1">
                    <img class="num" src="@/assets/media/2.png" alt="2">
                    <img class="num" src="@/assets/media/3.png" alt="3">
                    <img class="num" src="@/assets/media/4.png" alt="4">
                    <img class="num" src="@/assets/media/5.png" alt="5">
                    <img class="num" src="@/assets/media/6.png" alt="6">

                </div>
            
           
        </div>


        <div v-if="clicked===5" >
            <p class = "title"> נגדיר תופעה תוך הקפדה על ארבעת הכללים הבאים: </p>
            <div class="flip-card-container">
            <div v-for="( item, index) in arrayFront" :key="index" :class="['flip-card', this.onStart]">
                <div class="flip-card-inner" :style="`--hue: ${index * 8 + 270 }deg`">
                    <div class="flip-card-front">
                        <img :src="src(item)" class="imgFront">
                    </div>
                    <div class="flip-card-back">
                        <h1 class="textBack">{{ arrayBack[index] }} </h1>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div v-if="clicked===6" >
            <p class = "title-for-6"> כעת נעבור לנושא הבא: הכנה לשיחת המשוב </p>
        </div>

        <div class="prev-next-btns">
            <button v-if="clicked>=1 && clicked<=6" @click = "prev" class="prev btnNext"> חזור </button>
            <button v-if="clicked<6" @click = "next" class="next btnNext"> הבא </button>
        </div>

        
        <button v-if="clicked===6" class="btnNext" @click = "nextPage"> המשך </button>
    </div>
</template>

<script>
export default {
    name: "process",
    props: ['whereBeen'],

    data() {
        return {
            clicked: 0,

            definitionArray: [' כיצד נגדיר תופעה? ',
                ' עלינו לנתח את הסימפטומים ולמצוא מכנה משותף או מספר מכנים משותפים. לאחר מכן נוכל להבין מה התופעה. ',
            ],
            arrayFront: ['positivity.svg', 'objective.svg', 'target.svg','list.svg'],
            arrayBack: ['חיוביות', 'אובייקטיביות', 'דיוק', 'פירוט'],

            arrayWording: ['פתיחה',
            'תיאור כללי של התופעה',
            'גוף',
            'דוגמאות, עובדות (סימפטומים)',
            'סיכום',
            'המחשת צורך לתופעה'],

            arraySteps: ['קריאת התצפית פעמיים ברצף',
                'סימון רישומים רלוונטיים',
                'סיווג סימפטומים לפי תחומים',
                'מציאת תופעות לשימור ולשיפור',
                'בחירת תופעות להעלאה במשוב',
                'השערת המקור לתופעות',
            ],

            circlesArray: ['ידיים בכיסים',
                'ידיים קרובות מדי לגוף',
                'ידיים משולבות'
            ],

            index: 0,
            onStart: 'start',



            showArrow1: false,
            showArrow2: false,

            showIbudDiv: false,
            showMashovDiv: false,

            upHere: false,

            ideaIconSrc: '@/assets/media/ideaIcon-noColor.png',

            calculatorBtnText: ' לחצו כאן! ',
            showAnsCalculator: false,
            slideAwayAnimation: false,

            openDoorAnimation: false,
            showOpening: false,
            showSum: false,
            growAnimation: false,
            explainBody: false,
            showButton: true,

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
            if(this.clicked===5) {
                setTimeout(() => {
                    this.onStart = 'off';
                }, 100);
            };
            this.onStart = 'start';
            },
        prev() {
            this.clicked--;
            if(this.clicked===5) {
                setTimeout(() => {
                    this.onStart = 'off';
                }, 100);
            };
            this.onStart = 'start';
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
            this.calculatorBtnText = '';
           
        },

        openDoor() {
            this.openDoorAnimation = true;
            this.explainBody = true;
            this.showOpening = true;
        },

        moveToSummary() {
            this.arrayWording[2] = this.arrayWording[4];
            this.arrayWording[3] = this.arrayWording[5];
            this.showButton = false;
            this.showSum = true;
            // setTimeout(() => {
            //         this.growAnimation = true;
            //     }, 2000);
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


/* כותרות */

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

h3 {
    font-size: 1.5rem;
}
p {
    text-align: center;
}

.title-for-6 {
    text-align: center;
    font-size: 4rem;
    font-family: 'Heebo-Bold';
    margin-top: 15rem;
    animation: floatAnimation 3s ease-in-out infinite;
}

/* תהליך עיבוד התצפית */

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


/* הגדרת תופעה */

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


/* לדוגמה */

.example-title {
    text-align: center;
    font-size: 2rem;
    font-family: 'Heebo-Bold';
    position: relative;
    top: 2rem;
}

.circle {
    border-radius: 100%;
    height: 15rem;
    width: 15rem;
    bottom: 30%;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    color: rgb(79, 77, 77);    
    display: flex; 
    align-items: center; 
    justify-content: center;
    box-shadow: 15px 15px 20px -20px rgba(0, 0, 0, 0.4);
    animation: fadeInAnimation ease 4s;
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
.circle p {
    padding: 5%;
}

.circle0 {
    background-color: #b97edb;
    position: absolute;
    top: 32%;
    right: 22%;
    
}

.circle1 {
    background-color: #c998e6;
    position: absolute;
    align-self: center;
    top: 37%;
    right: 32%;
}

.circle2 {
    background-color: #d7b9e9;
    position: absolute;
    top: 49%;
    right: 21%;
}

.arrow-for-example {
    position: absolute;
    top: 45%;
    right: 45%;
    width: 15rem;
    opacity: 0;
    animation: fadeInAnimation ease 5s;
    animation-delay: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.example-text {
    position: absolute;
    margin: 2%;
    top: 40%;
    width: 20%;
    left: 20%;
    opacity: 0;
    /* animation: floatAnimation 3s ease-in-out infinite; */
    color: #ab66e7;
    font-size: 4rem;
    border-radius: 10px;
    text-decoration: none;
    cursor: default;
    font-family: 'Heebo-Bold';
    animation: fadeInAnimation ease 5s;
    animation-delay: 4s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
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

.example-right {
    position: absolute;
    height: 20rem;
    right: 16%;
    top: 37%;
    opacity: 0;
    animation: fadeInAnimation ease 5s;
    animation-delay: 6s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.example-left {
    position: absolute;
    height: 20rem;
    left: 18%;
    top: 37%;
    opacity: 0;
    animation: fadeInAnimation ease 5s;
    animation-delay: 6s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.symptoms {
    position: absolute;
    opacity: 0;
    top: 51.5%;
    right: 5%;
    font-size: 2rem;
    font-family: 'Heebo-Bold';
    animation: floatAnimation 3s ease-in-out infinite, fadeInAnimation 5s ease 8s 1 forwards;
}

.phenomenon {
    position: absolute;
    opacity: 0;
    top: 51.5%;
    left: 10%;
    font-size: 2rem;
    font-family: 'Heebo-Bold';
    animation: floatAnimation 3s ease-in-out infinite, fadeInAnimation 5s ease 8s 1 forwards;
}

/* ניסוח תופעה */

.logout {
  margin: auto;
  border: 1rem solid lightgray;
  position: relative;
  width: 17.5rem;
  height: 19.5rem;
  /* cursor: pointer; */
}


 .doorway {
  position: fixed;
  width: 17.5rem;
  height: 19.5rem;
  background-color: #fff;
  text-align: center;
  font-family: "Heebo-Bold";
font-size: 2rem;
 /* line-height: 4rem; */
 vertical-align: middle;
 top: 20rem;
 right: 51.3rem;

}

.doorway p {
  width: 14rem;
}


.doorway button {
    cursor: pointer;
    position: relative;
    bottom: 3rem;
    left: 1.5rem;
    width: 4rem;
    box-shadow: 0px 2px 0px 0px #000000;
    border-radius: 5rem;
    font-family: "Heebo";
    background-color: #f2c4fd;

}

.doorway button:hover {
    animation: hoverShine 200ms;
}

 .door {
  transition: transform 0.1s;
  transform-style: preserve-3d;
  transform-origin: 0% 0%;
  width: 100%;
  height: 100%;
  transform: perspective(900) rotateY(0deg);
  -webkit-transform: perspective(900) rotateY(0deg);
  background-color: #c35dff;
 position: relative;
 text-align: center;
 font-family: "Heebo-Bold";
font-size: 3rem;
 /* line-height: 10rem; */
 width: 17.5rem;
  height: 19.5rem;
  cursor: pointer;
  bottom: 23.5rem;
 right: 51.3rem;
}
.door p {
    padding-top: 4rem;
    margin-bottom: -4rem;
}
.opening-explanation {
    font-family: "Heebo";
    font-size: 2rem;
}

.wording-text-container {
    font-size: 1.5rem;
    display: flex;
    position: absolute;
    top: 70%;
    right: 38%;
    font-family: "Heebo-Bold";
    align-items: center;
    opacity: 0;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

}
.arrow-for-wording {
    height: 4rem;
}

 .open-door{
    transform: perspective(900) rotateY(75deg);
  -webkit-transform: perspective(900) rotateY(75deg);
  transition: all 2s ease-in-out;
}
.door span {
  position:  absolute;
  width: 1rem;
  height: 1rem;
  border-radius:50%;
  display:block;
  background-color: lightgray;
  top:8.5rem;
  left:15rem
}

.body-explanation {
    text-align: center;
    line-height: 5rem;
    font-family: "Heebo";
    font-size: 2rem;
}

.grow {
    animation: growAnimation 2.5s ease forwards;
    z-index: 1;
font-size: 3rem;

}

@keyframes growAnimation {
    from {
        /* width: 10rem;
        height: 10rem; */
    }
    to {
    box-shadow: 0 15px 20px -20px rgba(0, 0, 0, 0.4);
    border-radius: 3rem;

        transform: scaleY(1.1);
        width: 100rem;

        right: 10rem;

    }
}


/* שלבים */


.steps-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    height: 80vh;
    bottom: 1rem;
    animation: fadeInAnimation ease 5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.step {
    margin-top: 2rem;
    width: 40rem;
    height: 5rem;
    background-color: #f2c4fd;
    color: #000000;
    text-align: center;
    font-size: 1.5rem;
    line-height: 5rem;
    font-family: "Heebo-Bold";
    border-radius: 5rem;
    box-shadow: 0 15px 20px -20px rgba(0, 0, 0, 0.4);
    cursor: default;
}
.step:hover {
    animation: hoverShine 200ms;
    background-color: #dc94ee;
}

.steps-title {
    position: absolute;
    right: 7%;
    top: 20%;
    width: 25rem;
    font-family: "Heebo-Bold";
    font-size: 3rem;
    animation: floatAnimation 3s ease-in-out infinite;
}

.numbers-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    height: 85vh;
    right: 32vw;
    bottom: 2rem;
    animation: fadeInAnimation ease 5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.num {
    width: 6rem;
    height: 6rem;
}



/* כרטיסים מתהפכים */

.title {
    text-align: center;
    font-size: 2rem;
    font-family: 'Heebo-Bold';
    position: relative;
    top: 2rem;
    animation: floatAnimation 3s ease-in-out infinite;
}

.flip-card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    left: 16%;
    height: 50%;
    bottom: 24%;
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
}

.flip-card-back {
    /* background-color: #ab66e7; */
    background-color: hsl(var(--hue), 75%, 60%);
    border-radius: 30px;
    font-size: 1.5rem;
    color: white;
    transform: rotateY(180deg);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
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



/* כפתורים */

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