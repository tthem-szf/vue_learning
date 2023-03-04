const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Nap',
      lastName: 'Kap',
      url: 'https:www.google.com',
      raw_html: `<a href="https:www.google.com" target="_blank">Google</a>`,
      age: 20,
    }
  },
  methods: {

    increaseAge() {
      this.age++;
    },
    inputChange(msg, event) {
      // event.preventDefault();
      // console.log(msg);
      this.lastName = event.target.value;
    }
  },
  computed: {
    fullName() {
      console.log('全名又被调用啦！');
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    age() {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    }
  }
}).mount('#app');


// setTimeout(() => {
//   vm.firstName = 'John';
// }, 3000)

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'John',
//       lastName: 'Snow'
//     }
//   }
// }).mount('#secondApp');