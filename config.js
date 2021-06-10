const devConfig= {
    secretKey:"simplesecret",
    database:"store_test",
    user:"root",
    password:"",
    server:"localhost",
}

const prodConfig= {
    secretKey:"asdfsadvjadisnlvkcaq3",
    database:"alefsee1_dblab",
    user:"alefsee1_dblab",
    password:"48XPxbNk5Tw02Rwe",
    server:"185.147.160.4",
}

module.exports = process.env.NODE_ENV==='dev'?devConfig:prodConfig;