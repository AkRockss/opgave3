Vue.createApp({
    data() {
        return {
            word: "",
            lower: "",
            upper: "",
            word1: null,
            words: []
        
        }
    },

    methods: {

        manipulate(word) {
            this.words = []
            this.words.push(this.word1)
            this.words.push(this.word1.toLowerCase())
            this.words.push(this.word1.toUpperCase())
        },

        manipulate2() {
        
            this.lower = this.word.toLowerCase()
            this.upper = this.word.toUpperCase()
        }

        


    }

    }).mount("#app")