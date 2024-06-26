<template>
    <div id="open-screen">
       <div class="loading">
          <div class="gears">
            <img class="gear one" src="@/assets/media/gear.png" alt="">
            <img class="gear two" src="@/assets/media/gear.png" alt="">
            <h1 class="lomdat text-title">לומדת</h1>
            <h1 class="aibud text-title">עיבוד</h1>
            <button class="btnNext" @click = "startTutorial"> התחל </button>l
          </div>
      </div>
    </div>
</template>


<script>
export default {
    name: "open-screen",
    components: {


    },
    data() {
        return {
        };
    },
    methods: {
    },
};


</script>


<style scoped>
#open-screen {
    background-size: 100% 100%;
    direction: rtl;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #fdeed5;
}


.logo-white {
    width: 10%;
    position: absolute;
    left: 20%;
}


.text-title {
  color:rgb(83, 82, 82);
  font-family: 'Heebo-Bold';
  font-size: 7.5rem;
  position: absolute;
  z-index: 1;
  bottom: 35%;
  /* floatAnimation 3s ease-in-out infinite; */
  /* animation: floatAnimation 3s  ease-in-out infinite; */
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
.btnNext {
    position: absolute;
    border: none;
    cursor: pointer;   
    height: 7%;
    left: 45%;
    bottom: 10%;
    font-size: 2.6rem;
    color: #ffffff;
    border-radius: 100px;
    background-color: #ff9505;
    width: 10vw;


}


.btnNext {
  animation: borderPulse 4000ms infinite ease-out;
}


.btnNext:hover,
.btnNext:focus {
  animation: borderPulse 4000ms infinite ease-out,  hoverShine 200ms;
}


.text-title{
  font-size: 6rem;
}


.lomdat {
  bottom: 52.5vh;
  right: 33vw;
}


.aibud {
  bottom: 33vh;
  right: 58vw;
}


/* Declare border pulse animation */
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
  height: 65vh;
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
  position: absolute; left: 25px; top: 25px;
  z-index: 3;
  content: "";
  width: 70px; height: 70px;
  border-radius: 50%;
  border: 5px solid var(--stroke-color);
  box-sizing: border-box;
  background: var(--main-color);
}
.gear.one {
  bottom: 18vh;
  right: 5vw;
}
.gear.two {
  top: 4vh;
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
/* @keyframes clockwiseError {
  0% { -webkit-transform: rotate(0deg);}
  20% { -webkit-transform: rotate(30deg);}
  40% { -webkit-transform: rotate(25deg);}
  60% { -webkit-transform: rotate(30deg);}
  100% { -webkit-transform: rotate(0deg);}
}
@keyframes anticlockwiseErrorStop {
  0% { -webkit-transform: rotate(0deg);}
  20% { -webkit-transform: rotate(-30deg);}
  60% { -webkit-transform: rotate(-30deg);}
  100% { -webkit-transform: rotate(0deg);}
}
@keyframes anticlockwiseError {
  0% { -webkit-transform: rotate(0deg);}
  20% { -webkit-transform: rotate(-30deg);}
  40% { -webkit-transform: rotate(-25deg);}
  60% { -webkit-transform: rotate(-30deg);}
  100% { -webkit-transform: rotate(0deg);}
} */



@-webkit-keyframes clockwise {
  0% { -webkit-transform: rotate(0deg);}
  100% { -webkit-transform: rotate(360deg);}
}
@-webkit-keyframes anticlockwise {
  0% { -webkit-transform: rotate(360deg);}
  100% { -webkit-transform: rotate(0deg);}
}
/* @-webkit-keyframes clockwiseError {
  0% { -webkit-transform: rotate(0deg);}
  20% { -webkit-transform: rotate(30deg);}
  40% { -webkit-transform: rotate(25deg);}
  60% { -webkit-transform: rotate(30deg);}
  100% { -webkit-transform: rotate(0deg);}
}
@-webkit-keyframes anticlockwiseErrorStop {
  0% { -webkit-transform: rotate(0deg);}
  20% { -webkit-transform: rotate(-30deg);}
  60% { -webkit-transform: rotate(-30deg);}
  100% { -webkit-transform: rotate(0deg);}
}
@-webkit-keyframes anticlockwiseError {
  0% { -webkit-transform: rotate(0deg);}
  20% { -webkit-transform: rotate(-30deg);}
  40% { -webkit-transform: rotate(-25deg);}
  60% { -webkit-transform: rotate(-30deg);}
  100% { -webkit-transform: rotate(0deg);}
} */
/* .gear.one {
    animation: clockwiseError 5s linear infinite;
}
.gear.two {
    animation: anticlockwiseError 5s linear infinite;
} */
.loading .gear.one, .loading .gear.three {
    animation: clockwise 5s linear infinite;
}
.loading .gear.two {
    animation: anticlockwise 5s linear infinite;
}
</style>
