<template>
    <div id="practice">
     
        תרגול
      
        <button class="btnNext" @click = "nextPage"> לסיום </button>

    </div>
</template>

<script>

export default {
    name: 'practice',
    components: {

    },
    data() {
        return {
            
        };
    },
    // mounted() {
    //     setTimeout(() => {
    //         this.showClose = true;
    //     }, 23500);
    // },
    methods: {
        nextPage() {
            this.$emit('next-page');
        }
    },
}
</script>



<style scoped>




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
</style>
