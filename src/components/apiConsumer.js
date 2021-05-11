const apiConsumer = {
    data() {
        return {
            response: {},
            errors: []
        }
    },
    methods: {
        get(url, hook = () => { }) {
            hook()
        },
        post(url, payload, hook = () => { }) {
            this.axios.post(url, payload)
                .then(response => { this.response = "Ok" })
                .catch(e => {
                    this.errors.push(e)
                })
            hook()
        }
    }
}

export default apiConsumer
