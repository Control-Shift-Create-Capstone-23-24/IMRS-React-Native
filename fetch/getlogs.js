const WebSocket = require('ws');

const WebSocketEndpoint = 'wss://w1nthfyrli.execute-api.us-west-2.amazonaws.com/production/';

const webSocket = new WebSocket(WebSocketEndpoint);

webSocket.onopen = function(event) {
    console.log('WebSocket connection established');
};

webSocket.onmessage = function(event) {
    const message = event.data;
    console.log('Message received:', message);
};

webSocket.onclose = function(event) {
    console.log('WebSocket connection closed');
};

webSocket.onerror = function(event) {
    console.error('WebSocket error:', event);
};

