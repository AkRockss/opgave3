Vue.createApp({
    data() {
        return {
            word: null,
            words: [],
        
        }
    },

    methods: {

        manipulate(word) {
           
            this.words.push(word)
            this.words.push(word.toLowerCase())
            this.words.push(word.toUpperCase())
        
        },


    }

    }).mount("#app")