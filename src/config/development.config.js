var config = {
    env: 'development',
    api: {
        base_url: 'http://192.168.1.10:8031/api',
        defaultRequest: {
            headers: {
                'X-Requested-With': 'rest.js',
                'Content-Type': 'application/json'
            }
        }
    },
    social: {
        facebook: '',
        twitter: '',
        github: ''
    },
    debug: true
}

module.exports = config
