const { error } = require('console');
const cron = require('cron')
const https = require('https')

const backend = 'https://ledger-backend-1vzk.onrender.com' 

const jb = new cron.CronJob('*/14 * * * *',()=>{

    console.log('restarting server');
    https.get(backend,(res)=>{
        if(res.statusCode == 200){
            console.log("server restarted")
        }else {
            console.error('failed to restart server')
        }
    }).on('error',(error)=>{
        console.error('Error during restart')
    })
})

jb.start()
