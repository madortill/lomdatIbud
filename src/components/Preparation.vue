<template>
  
  <div id="preparation-page">

    <div v-if="clicked===0">
        <p class = "title"> בעת ההכנה לשיחת המשוב, החונך יתמקד בדברים הבאים: </p>

        <div  class="flip-card-container">
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



        <div v-if="clicked===1" >
            <p class = "title-for-1"> מוכנים לתרגל?? </p>
        </div>


        <div class="prev-next-btns">
            <button v-if="clicked===1" @click = "prev" class="prev btnNext"> חזור </button>
            <button v-if="clicked===0" @click = "next" class="next btnNext"> הבא </button>
        </div>

        
        <button v-if="clicked===1" class="btnNext" @click = "nextPage"> לתרגול </button>

  </div>

</template>

<script>
export default {
    name: "preparation",

    data() {
        return {
            clicked: 0,
            arrayFront: ['pheno.svg', 'amount.svg', 'brain.svg'],
            arrayBack: ['תופעות עיקריות', 'כמות תופעות', 'הכנה עצמית'],
            onStart: 'start',

        };
    },

    mounted() {
            setTimeout(() => {
                this.onStart = 'off';
            }, 100);
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

/* כרטיסים מתהפכים */

.flip-card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    left: 17%;
    height: 50%;
    bottom: 22%;
}

.flip-card {
    background-color: transparent;
    border-radius: 100% ;
    width: 22rem;
    height: 22rem;
    perspective: 1000px;
    margin: 2rem;
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
    border-radius: 100%;
    color: black;
}

.flip-card-back {
    background-color: hsl(var(--hue), 75%, 60%);
    border-radius: 100%;
    color: white;
    font-size: 1.5rem;
    transform: rotateY(180deg);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.imgFront {
    width: 70%;
    position: absolute;
    left: 17%;
    top: 13%;
}

.over-me {
    position: absolute;
    top: 70%;
    right: 10%;
    font-size: 1.2rem;
    color: #5f5a5a;
}

.textBack {
    padding: 5%;
}


/* כותרת */

.title-for-1 {
    text-align: center;
    font-size: 4rem;
    font-family: 'Heebo-Bold';
    margin-top: 15rem;
    animation: floatAnimation 3s ease-in-out infinite;
}

.title {
    text-align: center;
    font-size: 2rem;
    font-family: 'Heebo-Bold';
    position: relative;
    top: 2rem;
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


/* כפתורים */

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
    width: 8rem;
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
    left: 100rem;
  text-align: center;
}

.next {
  left: 10rem;
  text-align: center;

} 
</style>