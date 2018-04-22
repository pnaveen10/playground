var mqtt = require('mqtt');
var fs = require('fs');
//var client  = mqtt.connect('mqtt://localhost:1883', {username: 'mosquitto', password: 'mosquitto'});
var client  = mqtt.connect('mqtt://test.mosquitto.org:1883');

client.on('connect', function () {
  client.subscribe('test-flowupdate');
})

client.on('message', function (topic, message) {
    if (message) {
        fs.writeFile("/home/sasi/temp/test.json", message.toString(), function(err) {
            if(err) {
                return console.log(err);
                console.log("The file was saved!");
            }
        });
    }

 //   client.end()
})
