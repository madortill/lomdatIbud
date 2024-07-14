<template>
<div id="basic-principles-page">
    <div v-if="clicked===0" class="what-is-ibud explain-bg">
                <p class = "talk-text">מהו עיבוד?</p>
                <p class ="explain-text"> {{ explainArray[0] }} </p>
    </div>

    <div v-if="clicked===1" class="why-ibud">
        <p class = "talk-text why-title"> מדוע קיים שלב העיבוד? </p>

            <!-- <div v-if="showArrowToClick" class="click-this"> -->
            <!-- </div>     -->

        <!-- <div class="circles-container"> -->
            

            <div class="circle circle0" >
                <p> {{ circlesArray[0] }} </p></div>
            
            <div class="circle circle1" >
                <p> {{ circlesArray[1] }} </p></div>
            
            <div class="circle circle2" >
                <p> {{ circlesArray[2] }} </p></div>
            
       <!-- </div> -->

    </div>

    <div v-if="clicked===2" class="explain-bg">
                <p class = "talk-text"> מטרת שלב העיבוד </p>
                <p class = "explain-text"> {{ explainArray[1] }} </p>
          
                <!-- <img src="@/assets/media/target.png" class="target-img"> -->
    </div>

    <div v-if="clicked===3" class="question">
        <p class = "talk-text"> שאלת וידוא הבנה </p>
        <div class="question-text">
            <h3> חשבו וענו : האם המשפט הבא נכון או לא נכון? </h3>
            <h1 > בשלב העיבוד אני אוספת נתונים רבים כגון ציטוטים ותיאורים. </h1>
            <button class="correct-btn" :style="wrongAnswer" @click="checkAnswer" :disabled="buttonClicked"> נכון </button>
            <button class="not-correct-btn" :style="rightAnswer" @click="checkAnswer" :disabled="buttonClicked"> לא נכון </button>
            
            <h3 v-if="showExplanation" class="que-explanation"> הסבר </h3>
        </div>
        

    </div>

<div class="prev-next-btns">
     <button v-if="clicked>=1 && clicked<=3" @click = "prev" class="prev btnNext"> חזור </button>
     <button v-if="clicked<3" @click = "next" class="next btnNext"> הבא </button>
</div>

<button v-if="clicked===3" class="btnNext" @click = "nextPage"> המשך </button>
</div>
    
</template>

<script>
export default {
    name: "basic-principles",
    data() {
        return {
            clicked: 0,
            basic1: true,
            basic2: false,
            basic3: false,
            explainArray: [ 'עיבוד הוא שלב אשר מתרחש בו ניתוח הנתונים שאספנו במהלך התצפית והפקתם למידע בעל משמעות.',
                'מציאת דפוסי התנהגות שכיחים ו/או קריטיים הניתנים לשינוי במשוב.'
            ],
            circlesArray: [
                'התצפית הינה אוסף של עובדות',
                'העיבוד מעניק משמעות חדשה לסיטואציה',
                'החונך לא יכול לזכור הכל מדף התצפית'
            ],
            showExplanation: false,
            buttonClicked: false,
            rightAnswer: '',
            wrongAnswer: '',

        };
    },
    methods: {
        next() {
            this.clicked++;
            },
        prev() {
            this.clicked--;
        },

        checkAnswer(event) {
            if (!this.buttonClicked) {
            if(event.target.className === 'correct-btn') {
                this.showExplanation = true;
                this.wrongAnswer = 'background-color: #E74C3C; color:white;';

            } else if(event.target.className === 'not-correct-btn') {
                this.showExplanation = true;
                this.rightAnswer = 'background-color: #82BF56; color:white;';
            }
        }
        this.buttonClicked = true;
        },

        // openCircles() {
        // this.firstCircleDisplay = 'none';
        // this.circleDisplay = 'flex';
        // this.showArrowToClick = false;
        // this.circle0Animation = 'slideRight 1s ease-in';
        // },

        nextPage() {
            this.$emit('next-page');
        }
        },
      
    };

</script>

<style scoped>

.explain-bg {
    position: absolute;
    width: 40%;
    height: 60%;
    left: 30%;
    bottom: 20%;
    background: #fff;
    border-radius: 3rem;
    box-shadow: 0 15px 20px -20px rgba(0, 0, 0, 0.4);
    text-align: center;
   
}

.explain-text {
    font-size: 2.1rem;
    padding: 10% 7% 2%;
    color: rgb(79, 77, 77);
    margin: 0%;
}



 .talk-text {
    margin: 3%;
    animation: floatAnimation 3s ease-in-out infinite;
    color: #ab66e7;
    font-size: 3rem;
    border-radius: 10px;
    top: 10%;
    text-decoration: none;
    position: relative;
    cursor: default;
    font-family: 'Heebo-Bold';

}
.why-title {
    text-align: center;
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

.circles-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 3rem;
}

.circle {
    border-radius: 100%;
    height: 20rem;
    width: 20rem;
    bottom: 30%;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    color: rgb(79, 77, 77);    
    display: flex; 
    align-items: center; 
    justify-content: center;
    box-shadow: 15px 15px 20px -20px rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease-in-out;

    
}
.circle:hover {
    transform: scale(1.1);
}



.circle p {
    padding: 5%;
}


.circle0 {
    background-color: #b97edb;
    position: absolute;
    right: 20%;
    animation: slideRight 1s ease-in;
}
@keyframes slideRight {
    0% {
        transform: translateX(-400px);
    }
    100% {
        transform: translateX(0);
    }
}
.circle1 {
    background-color: #c998e6;
    position: absolute;
    align-self: center;
    left: 41.5%;
}

.circle2 {
    background-color: #d7b9e9;
    position: absolute;
    left: 20%;
    animation: slideLeft 1s ease-in;
}
@keyframes slideLeft {
    0% {
        transform: translateX(400px);
    }
    100% {
        transform: translateX(0);
    }
}

 .target-img {
    width: 25rem;
    position: absolute;
    bottom: 5rem;
    right: 43rem;
    /* animation: swing ease-in-out 1.3s infinite alternate; */
}



@keyframes swing {
    0% { transform: rotate(3deg); }
    100% { transform: rotate(-4deg); }
}


.question {
    text-align: center;
}

.question-text {
    position: absolute;
    width: 40%;
    height: 40%;
    left: 30%;
    bottom: 30%;
    background: #fff;
    border-radius: 3rem;
    box-shadow: 0 15px 20px -20px rgba(0, 0, 0, 0.4);
    text-align: center;
    /* align-content: center; */
    
}

.correct-btn {
    position: absolute;
    right: 10rem;
    height: 4rem;
    width: 7rem;
    font-family: "Heebo-Bold";
    font-size: 1.5rem;

}

.not-correct-btn {
    position: absolute;
    left: 10rem;
    height: 4rem;
    width: 7rem;
    font-family: "Heebo-Bold";
    font-size: 1.5rem;
}

.que-explanation {
    position: absolute;
    bottom: 27rem;
    right: 23rem;
    animation: drop 0.5s ease forwards;
}

@keyframes drop {

0% {

  opacity:0;

}

70% {
  transform: translateY(30rem);
}
100% {
  transform: translateY(25rem);
  opacity: 1;
}
}

</style>