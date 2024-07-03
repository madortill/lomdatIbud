<template>
<div id="basic-principles-page">
    <div v-if="clicked===0" class="what-is-ibud explain-bg">
                <p class = "talk-text">מהו עיבוד? </p>
                <p class ="explain-text"> {{ explainArray[0] }} </p>
    </div>

    <div v-if="clicked===1" class="why-ibud">
        <p class = "talk-text why-title"> מדוע קיים שלב העיבוד? </p>

            <div v-if="showArrowToClick" class="click-this">
                <img src="src/assets/media/arrow.png" class="click-this-arrow">
                <p class="click-this-text"> לחצו על העיגול </p>
            </div>    

        <div class="circles-container">
            
            <div class="circle first-circle" :style="{ display: firstCircleDisplay }" @click="openCircles">  </div>

            <div class="circle circle0" :style="{ display: circleDisplay , animation: circle0Animation}">
                <p> {{ circlesArray[0] }} </p></div>
            
            <div class="circle circle1" :style="{ display: circleDisplay }">
                <p> {{ circlesArray[1] }} </p></div>
            
            <div class="circle circle2" :style="{ display: circleDisplay }">
                <p> {{ circlesArray[2] }} </p></div>
            
       </div>

    </div>

    <div v-if="clicked===2" class="ibud-targets explain-bg">
                <p class = "talk-text"> מטרת שלב העיבוד </p>
                <p class = "explain-text"> {{ explainArray[1] }} </p>
                <!-- <img src="src/assets/media/target.png" class="target-img"> -->
                <!-- <img src="src/assets/media/target2.png" class="target-img"> -->
                <img src="src/assets/media/target3.png" class="target-img">


    </div>

<div class="prev-next-btns">
     <i v-if="clicked>=1 && clicked<=2" @click = "prev" class="arrow right prev"></i>
     <i v-if="clicked<2" @click = "next" class="arrow left next"></i>
</div>

<button v-if="clicked===2" class="btnNext" @click = "nextPage"> המשך </button>
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

            firstCircleDisplay: 'flex',
            circleDisplay:'none',
            showArrowToClick: true,

            circle0Animation: '',

        };
    },
    methods: {
        next() {
            this.clicked++;
            },
        prev() {
            this.clicked--;
        },

        openCircles() {
        this.firstCircleDisplay = 'none';
        this.circleDisplay = 'flex';
        this.showArrowToClick = false;
        this.circle0Animation = 'slideRight 1s ease-in';

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
    font-family: 'Heebo-Bold';

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



.arrow {
  border: solid #ff9505;
  border-width: 0 0.4rem 0.4rem 0;
  display: inline-block;
  padding: 0.8%;
  position: absolute;
  bottom: 25%;
  cursor: pointer;
}

.arrow:hover {
    animation: grow 0.2s ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
   
}

@keyframes grow {
    from {
        border-width: 0 0.4rem 0.4rem 0;
    }
    to {
        border-width: 0 0.6rem 0.6rem 0;
    }
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  left: 62%;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  left: 37%;
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
    transition: all 0.3s ease-in-out;

    /* animation: slide 1s ease-in; */
}
.circle:hover {
    transform: scale(1.1);
}


.circle p {
    padding: 5%;
}

.first-circle {
    background-color: #ffd196;
     /* animation: growShrink 2s ease-in-out infinite; */
     cursor: pointer;
     margin-right: 3rem;
}
.first-circle:hover {
    box-shadow: 0 0 20px 20px #ffc259; 
}

.circle0 {
    background-color: #ffba60;
    display: none;
}

.circle1 {
    background-color: #ffc67b;
    display: none;
}

.circle2 {
    background-color: rgb(255, 209, 154);
    display: none;

}

@keyframes growShrink {
  0% {
    height: 20rem;
    width: 20rem;
  }
  50% {
    height: 20.7rem;
    width: 20.7rem;
  }
  100% {
    height: 20rem;
    width: 20rem;
  }
}

.click-this-arrow {
    width: 5rem;
    position: absolute;
    bottom: 35rem;
    right: 42rem;
    transform: rotate(190deg);
}

.click-this-text {
    position: absolute;
    bottom: 36rem;
    right: 38rem;
}


@keyframes slideRight {
    0% {
        transform: translateX(-500px);
    }
    100% {
        transform: translateX(0);
    }
}

/* .target-img {
    width: 25rem;
    position: absolute;
    top: 4rem;
    right: 53rem;
} */

 .target-img {
    width: 55rem;
    position: absolute;
    bottom: 5rem;
    right: 50rem;
    animation: swing ease-in-out 1.3s infinite alternate;
}

@keyframes swing {
    0% { transform: rotate(3deg); }
    100% { transform: rotate(-4deg); }
}


</style>