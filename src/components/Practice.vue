<template>
    <div id="practice">
     
        <div v-if="clicked===0" class="question-1">
            <p class = "question-title"> חשבו וענו: מה התופעה המתאימה לסימפטומים הבאים? </p>

            <div class="circle circle0" >
                <p> {{ symptoms[0] }} </p></div>
            
            <div class="circle circle1" >
                <p> {{ symptoms[1] }} </p></div>
            
            <div class="circle circle2" >
                <p> {{ symptoms[2] }} </p></div>
           
            <img class="arrow-for-example" src="@/assets/media/arrowForExample.png" alt="arrow">

            <div class="steps-container">

                <div class="step not-correct-ans" :style="wrongAnswer" @click="checkAnswer" :disabled="buttonClicked"> {{ phenomenons[0] }} </div>
                <div class="step correct-ans" :style="rightAnswer" @click="checkAnswer" :disabled="buttonClicked"> {{ phenomenons[1] }} </div>
                <div class="step not-correct-ans" :style="wrongAnswer" @click="checkAnswer" :disabled="buttonClicked"> {{ phenomenons[2] }} </div>

            </div>

            <div v-if="answerBg" class="answer-bg"></div>
            <div v-if="showExplanation" class="que-explanation">
                <h2 class="right-or-wrong"> {{ rightOrWrongAnswer }} </h2>
                <h3 > {{ ansExplainArray[0] }} </h3>
            </div>
        </div>

        <div v-if="clicked===1" class="question-2">
            <p class = "question-title"> חשבו וענו: האם המשפט הבא נכון או לא נכון?? </p>
            <h1 class=" question-text"> {{ queArray[0] }} </h1>
            <h1 class="question-text"> {{ queArray[1] }} </h1>

            <button class="correct-btn correct-ans" :style="rightAnswer" @click="checkAnswer" :disabled="buttonClicked"> נכון </button>
            <button class="not-correct-btn not-correct-ans" :style="wrongAnswer" @click="checkAnswer" :disabled="buttonClicked"> לא נכון </button>
            
            <div v-if="answerBg" class="answer-bg"></div>
            <div v-if="showExplanation" class="que-explanation">
                <h2 class="right-or-wrong"> {{ rightOrWrongAnswer }} </h2>
                <h3 > {{ ansExplainArray[1] }} </h3>
            </div>
        </div>

        <div v-if="clicked===2" class="question-1">
            <p class = "question-title"> חשבו וענו: מה התופעה המתאימה לסימפטומים הבאים? </p>

            <div class="circle circle0" >
                <p> {{ symptoms[3] }} </p></div>
            
            <div class="circle circle1" >
                <p> {{ symptoms[4] }} </p></div>
           
            <img class="arrow-for-example" src="@/assets/media/arrowForExample.png" alt="arrow">

            <div class="steps-container">

                <div class="step not-correct-ans" :style="wrongAnswer" @click="checkAnswer" :disabled="buttonClicked"> {{ phenomenons[0] }} </div>
                <div class="step not-correct-ans" :style="wrongAnswer" @click="checkAnswer" :disabled="buttonClicked"> {{ phenomenons[1] }} </div>
                <div class="step correct-ans" :style="rightAnswer" @click="checkAnswer" :disabled="buttonClicked"> {{ phenomenons[2] }} </div> 

            </div>

            <div v-if="answerBg" class="answer-bg"></div>
            <div v-if="showExplanation" class="que-explanation">
                <h2 class="right-or-wrong"> {{ rightOrWrongAnswer }} </h2>
                <h3 > {{ ansExplainArray[2] }} </h3>
            </div>
        </div>


        <div class="prev-next-btns">
            <button v-if="(clicked>=1 && clicked<=3) && buttonClicked" @click = "prev" class="prev btnNext"> חזור </button>
            <button v-if="clicked<2 && buttonClicked" @click = "next" class="next btnNext"> הבא </button>
        </div>
      
        <button v-if="clicked===2 && buttonClicked" class="btnNext" @click = "nextPage"> לסיכום </button>

    </div>
</template>

<script>

export default {
    name: 'practice',
    components: {

    },
    data() {
        return {
            clicked: 0,

            symptoms: [' סדר לא הגיוני ',
                ' זמן לא מנוהל טוב ',
                ' חוסר בסיכום השיעור ',

                ' חוסר בחיזוק החניכים ',
                ' לא הייתה הפניית שאלות '
            ],

            phenomenons: [' טכניקות מסירה לא ממחישות ',
                ' מבנה שיעור שגוי ולא מאורגן ',
                ' חוסר בהפעלת החניכים '
            ],

            queArray: [ 'אתם חונכים בשלב העיבוד ושמתם לב כי במהלך התצפית, לנחנך היו תנועות גוף סגורות, קול דיבור חלש וחוסר בקשר עין.',
                ' התופעה הנגזרת מכך היא: טכניקות מסירה לא ממחישות. '
             ],

            ansExplainArray: [' סדר לא הגיוני, זמן לא מנוהל טוב וחוסר בסיכום השיעור הם סימפטומים של התופעה: מבנה שיעור שגוי ולא מאורגן ',
                ' תנועות גוף סגורות, קול דיבור חלש וחוסר בקשר עין הם סימפטומים של התופעה: טכניקות מסירה לא ממחישות. ',
                ' חוסר בחיזוק החניכים ואי הפניית שאלות הם סימפטומים של התופעה: חוסר בהפעלת חניכים. '
            ],

            classAnswer: '',
            rightAnswer: '',
            wrongAnswer: '',
            rightOrWrongAnswer: '',

            answerBg: false,
            showExplanation: false,
            buttonClicked: false,

        };
    },
    
    methods: {
        nextPage() {
            this.$emit('next-page');
        },

        next() {
            this.clicked++;
            this.buttonClicked = false;
            this.rightAnswer = '';
            this.wrongAnswer = '';
            this.showExplanation = false;
            this.answerBg = false;

            },
        prev() {
            this.clicked--;
        },

        checkAnswer(event) {
            if (!this.buttonClicked) {
  
            if(event.target.className.includes('not-correct-ans') ) {
                this.showExplanation = true;
                this.rightAnswer = 'background-color: #82BF56; color:white;';
                this.wrongAnswer = 'background-color: #E74C3C; color:white;';
                this.rightOrWrongAnswer = 'תשובה לא נכונה';
                this.answerBg = true;

            } else if(event.target.className.includes('correct-ans')) {
                this.showExplanation = true;
                this.rightAnswer = 'background-color: #82BF56; color:white;';
                this.wrongAnswer = 'background-color: #E74C3C; color:white;';
                this.rightOrWrongAnswer = 'תשובה נכונה!';
                this.answerBg = true;

            }
        }
        setTimeout(() => {
                    this.buttonClicked = true;
                }, 800);
        },
    },
}
</script>



<style scoped>

.question-title {
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

.steps-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    height: 35vh;
    bottom: 18rem;
    left: 20rem;
    opacity: 0;
    animation: fadeInAnimation ease 5s;
    animation-delay: 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.step {
    margin-top: 2rem;
    width: 30rem;
    height: 5rem;
    background-color: #e5a5f5;
    color: #000000;
    text-align: center;
    font-size: 1.5rem;
    line-height: 5rem;
    font-family: "Heebo-Bold";
    border-radius: 5rem;
    box-shadow: 0px 4px 0px 0px #000000;
    cursor: pointer;
}
.step:hover {
    animation: hoverShine 200ms;
    background-color: #eea7e8;
}

.step:active {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
  box-shadow: 0px 1px 0px 0px;
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

.question {
    text-align: center;
}

.question-text {
    margin-top: 5rem;
    text-align: center;
    width: 55rem;
    margin-right: auto;
    margin-left: auto;


}

.que-text {
    text-align: center;
    margin-top: 5rem;
}

.correct-btn {
    border-radius: 5rem;
    position: absolute;
    top: 38rem;
    right: 42rem;
    height: 5rem;
    width: 10rem;
    font-family: "Heebo";
    font-size: 1.5rem;
    box-shadow: 0px 5px 0px 0px #000000;
    cursor: pointer;
    background-color: #f2c4fd;
}

.not-correct-btn {
    border-radius: 5rem;
    position: absolute;
    top: 38rem;
    left: 42rem;
    height: 5rem;
    width: 10rem;
    font-family: "Heebo";
    font-size: 1.5rem;
    box-shadow: 0px 5px 0px 0px #000000;
    cursor: pointer;
    background-color: #f2c4fd;
}

.correct-btn:hover,
.not-correct-btn:hover {
    animation: hoverShine 200ms;
    transform: scale(1.1);

}

.correct-btn:active,
.not-correct-btn:active {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
  box-shadow: 0px 1px 0px 0px;
}

.right-or-wrong {
    font-family: "Heebo-Bold";
}

.que-explanation {
    position: absolute;
    background-color: #fff;
    width: 100%;
    height: 15%;
    top: 38rem;
    text-align: center;
  box-shadow: 0px 5px 5px 0px;
  animation: fadeInUp;
  animation-duration: 2s;
  transform-origin: top center;
  z-index: 3;
}

@keyframes fadeInUp {
from {opacity: 0;
    transform: translate3d(0, 100%, 0)}
  to {opacity: 1;
    transform: translate3d(0, 0, 0)}
}

.answer-bg {
    width: 150%;
    height: 150%;
    position: absolute;
    z-index: 1;
    top: -40%;
    /* right: -80%; */
    background-color: #03030369;
}



/* כפתור לסיום */
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
    z-index: 5;
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
