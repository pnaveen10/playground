var mqtt = require('mqtt');
//var client  = mqtt.connect('mqtt://localhost:1883', {username: 'mosquitto', password: 'mosquitto'});
var client  = mqtt.connect('mqtt://test.mosquitto.org:1883');

client.on('connect', function () {
  client.subscribe('presence');
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
 // client.end()
})
