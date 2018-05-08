const rp = require('request-promise');

function installNodeModule(nodeModule) {
    let options = apiPostOptions();
    options.uri = 'http://127.0.0.1:1880/nodes';
    options.body.module = nodeModule;

    return rp(options);
}

function installNodeModules(nodeModules) {
    foreach(let)
}

const modulesList = ['node-red-dashboard', 'node-red-node-email'];

function apiPostOptions() {
    return {
        method: 'POST',
        uri: '',
        body: {},
        json: true // Automatically stringifies the body to JSON
    }
}

function apiGetOptions() {
    return {
        uri: '',
        json: true
    }
}

// async function heyTest() {
//     let options1 = {
//         uri: 'https://jsonplaceholder.typicode.com/posts/1/comments',
//         json: true
//     };

//     let options2 = {
//         uri: 'https://jsonplaceholder.typicode.com/posts/1',
//         json: true
//     };

//     const req1 = rp(options1);
//     // .then(function(response) {
//     //     // console.log(response);
//     //     console.log('option1\n\n');
//     // });

//     const req2 = rp(options2);
//     // .then(function(response) {
//     //     // console.log(response);
//     //     console.log('option2\n\n');
//     // });

//     return Promise.all([req1, req2]);
// }

// heyTest().then(function(resp) {
//     console.log("final response:\n");
//     console.log(JSON.stringify(resp));
// });