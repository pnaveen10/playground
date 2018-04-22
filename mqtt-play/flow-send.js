var mqtt = require('mqtt');
var fs = require('fs');
//var client  = mqtt.connect('mqtt://localhost:1883', {username: 'mosquitto', password: 'mosquitto'});
var client  = mqtt.connect('mqtt://test.mosquitto.org:1883');

client.on('connect', function () {
    fs.readFile('/home/sasi/.node-red/flows_sasi-t470.json', 'utf8', function(err, contents) {
        console.log(contents);
        client.publish('test-flowupdate', contents);
    });
})

client.on('message', function (topic, message) {
    // message is Buffer
        console.log(message.toString());
 // client.end()
})
