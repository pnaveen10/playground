var mqtt = require('mqtt');
var dateTime = require('node-datetime');
//var client  = mqtt.connect('mqtt://localhost:1883', {username: 'mosquitto', password: 'mosquitto'});

var client  = mqtt.connect('mqtt://test.mosquitto.org:1883');

function publishTime() {
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    client.publish('presence', formatted);
}

setInterval(publishTime, 1000);

client.on('connect', function () {
  client.subscribe('updates')
  client.publish('presence', 'Hello mqtt')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
 // client.end()
})
