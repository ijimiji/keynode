const apiConsumer = {
    data() {
        return {
            response: {},
            hook: () => {}
        }
    },
    methods: {
        get(payload, hook) {
            hook()
        }
    }
}

export default apiConsumer
