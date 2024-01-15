import AWS from 'aws-sdk';

// For Testing
const newItem = { id: '123', name: 'Example Item' };
const getKey = { id: '123' };
const queryExpression = 'id = :targetId';
const queryValues = { ':targetId': '123' };
const scanExpression = 'attribute_exists(name)'; // Corrected to a valid DynamoDB expression
const scanValues = { ':targetValue': 'example' };
const region = 'us-east-1';
const version = 'latest';

// Moved 'params' inside the methods to avoid conflicts and ensure each method has relevant parameters

export class Requester {
    region;
    tableName;
    version;
    dynamodb;

    constructor(region, tableName, version) {
        this.region = region;
        this.tableName = tableName;
        this.version = version;
        AWS.config.update({region: this.region});
        this.dynamodb = new AWS.DynamoDB({apiVersion: this.version});
    }

    put() {
        const params = {
            TableName: this.tableName,
            Item: AWS.DynamoDB.Converter.marshall(newItem) // Convert JavaScript object to DynamoDB format
        };

        this.dynamodb.putItem(params, (err, data) => {
            if (err) {
                console.error('Error requesting a Put Method', err);
            } else {
                console.log('Put operation successful', data);
            }
        });
    }

    get(p: { value: { S: string }; Key: string }[]) {
        const params = {
            TableName: this.tableName,
            Key: AWS.DynamoDB.Converter.marshall(getKey) // Convert JavaScript object to DynamoDB format
        };

        this.dynamodb.getItem(params, (err, data) => {
            if (err) {
                console.error('Error getting item from DynamoDB', err);
            } else {
                console.log('Get operation successful', data);
            }
        });
    }

    scan() {
        const params = {
            TableName: this.tableName,
            FilterExpression: scanExpression,
            ExpressionAttributeValues: AWS.DynamoDB.Converter.marshall(scanValues) // Convert JavaScript object to DynamoDB format
        };

        this.dynamodb.scan(params, (err, data) => {
            if (err) {
                console.error('Error scanning DynamoDB', err);
            } else {
                console.log('Scan operation successful', data);
            }
        });
    }

    query() {
        const params = {
            TableName: this.tableName,
            KeyConditionExpression: queryExpression,
            ExpressionAttributeValues: AWS.DynamoDB.Converter.marshall(queryValues) // Convert JavaScript object to DynamoDB format
        };

        this.dynamodb.query(params, (err, data) => {
            if (err) {
                console.error('Error querying DynamoDB', err);
            } else {
                console.log('Query operation successful', data);
            }
        });
    }
}
