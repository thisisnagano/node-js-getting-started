const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  require("appdynamics").profile({
  controllerHostName: 'apm-demo-dynamics-5940.saas.appdynamics.com',
  controllerPort: 443,
  controllerSslEnabled: true,      // Set to false if controllerPort is not SSL enabled
  accountName: 'apm-demo-dynamics-5940',
  accountAccessKey: '8lxkegqvcs4f', //required
  applicationName: 'apm-demo-dynamics', // Enter a name for your application
  tierName: 'SampleNodejs-webtier',   // Enter custom defined tier name
  nodeName: 'SampleHeroku-dyno',   // Enter custom defined node name
 });
