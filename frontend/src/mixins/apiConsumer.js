const apiConsumer = {
    data() {
        return {
            response: {},
            data: {},
            message: ""
        }
    },
    methods: {
        get(url, hook = () => { }) {
            hook()
        },
        post(url, payload, hook = () => { }) {
            this.axios.post(url, payload)
                .then(response => { 
                    this.response = "Ok";
                    this.data = response.data;
                    this.message = "Success";
                })
                .catch(e => {
                    this.message = e.response.data.message;
                })
            hook()
        }
    }
}

export default apiConsumer
