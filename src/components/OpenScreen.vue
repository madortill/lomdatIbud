<template>
  <div id="open-screen">
    <div class="loading">
      <div class="gears">
        <img class="gear one" src="@/assets/media/gear2.png" alt="gear1" />
        <img class="gear two" src="@/assets/media/gear2.png" alt="gear2" />
        <h1 class="lomdat text-title">לומדת</h1>
        <h1 class="aibud text-title">עיבוד</h1>
        <button class="btnNext" @click="startTutorial">התחל</button>
      </div>
      <div class="toPackageBtn" @click="toPackage">חזרה למארז</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "open-screen",
  components: {},
  data() {
    return {};
  },
  methods: {
    startTutorial() {
      this.$emit("next-page");
    },
    toPackage() {
      window.location.href = "https://madortill.github.io/MentoringPackage/";
    },
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
  background-color: #ebdef8;
}

.text-title {
  color: rgb(83, 82, 82);
  font-family: "Heebo-Bold";
  font-size: 7.5rem;
  position: absolute;
  z-index: 1;
  /* bottom: 35%; */
}

.btnNext {
  position: absolute;
  border: none;
  cursor: pointer;
  height: 5rem;
  left: 55rem;
  bottom: 5rem;
  font-size: 2.6rem;
  color: #ffffff;
  border-radius: 100px;
  background-color: rgb(148, 112, 181);
  width: 12rem;
  font-family: "Heebo-Bold";
}

.btnNext {
  animation: borderPulse 4000ms infinite ease-out;
}

.btnNext:hover,
.btnNext:focus {
  animation: borderPulse 4000ms infinite ease-out, hoverShine 200ms;
}

.text-title {
  font-size: 5.5rem;
}

.lomdat {
  bottom: 34rem;
  right: 39.5rem;
}

.aibud {
  bottom: 17rem;
  right: 67rem;
}

/* Declare border pulse animation */
@keyframes borderPulse {
  0% {
    box-shadow: inset 0px 0px 0px 5px rgba(255, 255, 255, 0.4),
      0px 0px 0px 0px rgba(255, 255, 255, 1);
  }
  35% {
    box-shadow: inset 0px 0px 0px 3px rgba(117, 117, 255, 0.2),
      0px 0px 0px 10px rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: inset 0px 0px 0px 5px rgba(255, 255, 255, 0.4),
      0px 0px 0px 0px rgba(255, 255, 255, 1);
  }
  75% {
    box-shadow: inset 0px 0px 0px 3px rgba(117, 117, 255, 0.2),
      0px 0px 0px 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: inset 0px 0px 0px 5px rgba(255, 255, 255, 0.4),
      0px 0px 0px 0px rgba(255, 255, 255, 1);
  }
}

@keyframes hoverShine {
  0% {
    background-image: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  50% {
    background-image: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  100% {
    background-image: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0.4) 100%
    );
  }
}

.gear {
  position: relative;
  z-index: 0;
  height: 42rem;
  margin: 0 auto;
  border-radius: 50%;
  background: var(--stroke-color);
}
.gear:before {
  position: absolute;
  z-index: 2;
  content: "";
  border-radius: 50%;
  background: var(--main-color);
}
.gear:after {
  position: absolute;
  left: 25rem;
  top: 25rem;
  z-index: 3;
  content: "";
  width: 70rem;
  height: 70rem;

  border-radius: 50%;
  border: 5px solid var(--stroke-color);
  box-sizing: border-box;
  background: var(--main-color);
}
.gear.one {
  bottom: 12rem;
  right: 8.5rem;
}
.gear.two {
  top: 5rem;
  left: 7rem;
}
/* .gear .bar {
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
} */

@keyframes clockwise {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes anticlockwise {
  0% {
    -webkit-transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
  }
}

@-webkit-keyframes clockwise {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes anticlockwise {
  0% {
    -webkit-transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
  }
}

.loading .gear.one,
.loading .gear.three {
  animation: clockwise 5s linear infinite;
}
.loading .gear.two {
  animation: anticlockwise 5s linear infinite;
}

.toPackageBtn {
  background-image: url(@/assets/media/circle.svg);
  background-size: 100% 100%;
  height: 8rem;
  width: 8rem;
  text-align: center;
  align-content: center;
  color: #ebebeb;
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  filter: drop-shadow(0 5px 7px rgba(0, 0, 0, 0.2));
  animation-play-state: paused;
  font-size: 1.3rem;
}

.toPackageBtn:hover {
  height: 9rem;
  width: 9rem;
}
</style>
