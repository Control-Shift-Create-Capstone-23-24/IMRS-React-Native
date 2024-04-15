
// const WebSocket = require('ws');

// const WebSocketEndpoint = 'wss://w1nthfyrli.execute-api.us-west-2.amazonaws.com/production/';

// const webSocket = new WebSocket(WebSocketEndpoint);

// webSocket.onopen = function(event) {
//     console.log('WebSocket connection established');
// };

// webSocket.onmessage = function(event) {
//     const message = event.data;
//     console.log('Message received:', message);
// };

// webSocket.onclose = function(event) {
//     console.log('WebSocket connection closed');
// };

// webSocket.onerror = function(event) {
//     console.error('WebSocket error:', event);
// };

const WebSocket = require('ws');

// Define the WebSocket endpoint URL
const webSocketEndpoint = 'wss://3rkw9ldyf6.execute-api.us-west-2.amazonaws.com/Inprogress/';

// Create a WebSocket client
const webSocket = new WebSocket(webSocketEndpoint);

// Handle successful connection
webSocket.on('open', function open() {
    console.log('WebSocket connection established');
});

// Handle messages from the server
webSocket.on('message', function incoming(data) {
    console.log('Received new item:', data);
});

// Handle WebSocket connection errors
webSocket.on('error', function error(err) {
    console.error('WebSocket error:', err);
});

// Handle WebSocket connection closing
webSocket.on('close', function close() {
    console.log('WebSocket connection closed');
});


