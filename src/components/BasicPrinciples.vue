<template>
<div id="basic-principles-page">
    <div v-if="clicked===0" class="what-is-ibud explain-bg">
                <p class = "talk-text">מהו עיבוד? </p>
                <p class ="explain-text"> {{ explainArray[0] }} </p>
    </div>

    <div v-if="clicked===1" class="why-ibud">
        <p class = "talk-text why-title"> מדוע קיים שלב העיבוד? </p>

        <div class="circles-container">

        <div class="circle circle0">
            <p> {{ circlesArray[0] }} </p></div>
        
        <div class="circle circle1">
            <p> {{ circlesArray[1] }} </p></div>
        
        <div class="circle circle2">
            <p> {{ circlesArray[2] }} </p></div>
        
       </div>
    </div>

    <div v-if="clicked===2" class="ibud-targets explain-bg">
                <p class = "talk-text"> מטרת שלב העיבוד </p>
                <p class = "explain-text"> {{ explainArray[1] }} </p>
    </div>

<div class="prev-next-btns">
    <button v-if="clicked<=2" class="btnNext prev" @click = "prev"> חזור </button>
    <button v-if="clicked<2" class="btnNext next" @click = "next"> הבא </button>  
</div>

<button v-if="clicked===2" class="btnNext" @click = "nextPage"> המשך </button>
</div>
    
</template>

<script>
export default {
    name: "basic-principles",
    props: ["titleIndex"],
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
            ]

        };
    },
    methods: {
        next() {
            this.clicked++;
            },
        prev() {
            this.clicked--;
        },

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
    color: #E58338;
    font-size: 3rem;
    border-radius: 10px;
    top: 10%;
    text-decoration: none;
    position: relative;
    cursor: default;
}
.why-title {
    text-align: center;
}
.talk-text:hover {
    color: #E58338;
}

.talk-text:before {
    content: "";
    position: absolute;
    width: 40%;
    height: 2px;
    bottom: 0;
    right: 30%;
    background-color: #E58338;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
}

.talk-text:hover:before {
    visibility: visible;
    transform: scaleX(1);
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
    left: 45%;
    bottom: 10%;
    font-size: 2rem;
    color: #ffffff;
    border-radius: 100px;
    background-color: #ff9505;
    width: 7vw;
}

.prev {
    left: 58%;
    bottom: 25%;
}

.next {
    left: 35%;
    bottom: 25%;
}


.btnNext {
  animation: borderPulse 4000ms infinite ease-out;
}


.btnNext:hover,
.btnNext:focus {
  animation: borderPulse 4000ms infinite ease-out,  hoverShine 200ms;
}

@keyframes growShrink {
  0% {
  /* bottom: 30%; */
    font-size: 10rem;
  }
  50% {
  /* bottom: 32%; */
    font-size: 12rem;
  }
  100% {
  /* bottom: 30%; */
    font-size: 10rem;
  }
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
    background-color: #ff950596;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    color: rgb(79, 77, 77);    
    display: flex; 
    align-items: center; 
    justify-content: center;
     box-shadow: 15px 15px 20px -20px rgba(0, 0, 0, 0.4);
}

.circle p {
    padding: 5%;
}

.circle0 {
    /* background-color: #ff950596; */
    background-color: #FF9505;
}

.circle1 {
    background-color: #ffab06;
}

.circle2 {
    background-color: #ffb359;
}


</style>