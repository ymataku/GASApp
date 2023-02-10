Vue.createApp({
    el: '#app',
    data() {
        return {
            message: 'Hello Axios',
        }
    },
    mounted(){
        axios.get('https://script.google.com/macros/s/AKfycbwIyRZDO4aFIQ8pLlyQBjJ2wI7S6IBXMbh70uk6AUf_geJMowFqq4EaFbzO3P4tpTU/exec')
        .then(Response => this.message = Response.data)
        .catch(error => console.log('error' + error))
    }
}).mount('#app')