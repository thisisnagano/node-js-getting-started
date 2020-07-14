require("appdynamics").profile({
 controllerHostName: 'apm-demo-dynamics-5940.saas.appdynamics.com',
 controllerPort: 443,

 // If SSL, be sure to enable the next line
 controllerSslEnabled: true,
 accountName: 'apm-demo-dynamics-5940',
 accountAccessKey: '8lxkegqvcs4f',
 applicationName: 'apm-demo-dynamics',
 tierName: 'webtier',
 nodeName: 'process' // The controller will automatically append the node name with a unique number
});

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
