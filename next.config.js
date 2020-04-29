require('dotenv').config();

module.exports = {
    env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        API_ENDPOINT: process.env.API_ENDPOINT,
        APP_ENV: process.env.APP_ENV,
        APP_DEBUG: process.env.APP_DEBUG,
        DEFAULT_LANG: process.env.DEFAULT_LANG,
        SOCKET_PORT: process.env.SOCKET_PORT,
        REDIS_HOST: process.env.REDIS_HOST,
        REDIS_PORT: process.env.REDIS_PORT,
        REDIS_PASSWORD: process.env.REDIS_PASSWORD
    },
}
