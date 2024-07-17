<template>
  
  <div id="preparation-page">


הכנה לשיחת משוב
פליפ קארדס?








        <!-- <div class="prev-next-btns">
            <button v-if="clicked>=1 && clicked<=2" @click = "prev" class="prev btnNext"> חזור </button>
            <button v-if="clicked<2" @click = "next" class="next btnNext"> הבא </button>
        </div> -->

        
        <button class="btnNext" @click = "nextPage"> לתרגול </button>

  </div>

</template>

<script>
export default {
    name: "preparation",

    data() {
        return {
            clicked: 0,
            arrayFront: ['', '', '',''],
            arrayBack: ['', '', '', ''],

        };
    },

    methods: {
        next() {
            this.clicked++;
            },

        prev() {
            this.clicked--;
        },


        src(name) {
            return new URL(`../assets/media/${name}`, import.meta.url).href
        },

        nextPage() {
            this.$emit('next-page');
        }
        },


}
</script>

<style scoped>




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