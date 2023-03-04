let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,

    }
  },
  computed: {
    purpleToggle() {
      return { purple: this.isPurple };
    }
  }
}).mount('#app')