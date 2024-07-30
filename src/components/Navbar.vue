<template>
    <div id="navbar">
        <div class="container">
            <nav>
                <ul>
                    <li :class="{ active: titleIndex === 0, disabled: 0 > maxNavPos }" @click="chosenTitle(0)">עקרונות יסוד</li>
                    <li :class="{ active: titleIndex === 1, disabled: 1 > maxNavPos }" @click="chosenTitle(1)">תהליך עיבוד התצפית</li>
                    <li :class="{ active: titleIndex === 2, disabled: 2 > maxNavPos }" @click="chosenTitle(2)">הכנה לשיחת משוב</li>
                    <li :class="{ active: titleIndex === 3, disabled: 3 > maxNavPos }" @click="chosenTitle(3)">תרגול מסכם</li>
                </ul>
            </nav>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'navbar',
    props: ["titleIndex", "maxNavPos"],
    data() {
        return {

        };
    },
    methods: {
        chosenTitle(index) {
            if (index <= this.maxNavPos) {
                this.$emit('chosen-title', index);
            }
        },
    },
};
</script>
  
<style scoped>
.container {
    height: 10vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    margin-top: 2%;
}

* {
    margin: 0;
    box-sizing: border-box;
    z-index: 2;
}

nav {
    background: #fff;
    border-radius: 50px;
    box-shadow: 0 15px 20px -20px rgba(0, 0, 0, 0.4);

}

nav ul li {
    padding: 0;
    list-style: none;
    display: inline-block;
    padding: 5px 50px;
    margin: 10px;
    font-size: 1.2rem;
    font-weight: 500;
    color: #777;
    position: relative;
    z-index: 2;
    cursor: default;
    transition: color 0.5s;
}

nav ul li.active {
    background: #ab66e7 !important;
    border-radius: 30px;
    color: white;
}

nav ul li:not(.disabled):hover {
    background: #c170ff8e;
    cursor: pointer;
    border-radius: 30px;
}

.disabled {
    cursor: default;
}
</style>
  