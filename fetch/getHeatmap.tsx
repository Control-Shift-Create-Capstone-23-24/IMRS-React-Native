// @ts-ignore

import { DynamoDB } from 'aws-sdk';

const documentClient = new DynamoDB.DocumentClient({
    region: 'us-west-2',
    accessKeyId: process.env['AWS_ACCESS_KEY'],
    secretAccessKey: process.env['AWS_SECRET_KEY'],
});


<<<<<<< HEAD
        dynamodb.scan(params, (err, data) => {
            if (err) {
                console.error('Unable to scan the table:', err);
                reject(err);
            } else {
                const coordinates = data.Items.map(item => ({
                    latitude: item.Latitude.N,
                    longitude: item.Longitude.N,
                    status: item.Status.S,
                }));
                resolve(coordinates);
                console.log(coordinates)
            }
        });
    });
=======
export async function getHeatmap() {
    let params = {
        TableName: 'Locations',
    };

    let scanResults = [];
    let items;
    do {
        items = await documentClient.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey = items.LastEvaluatedKey;
    } while (typeof items.LastEvaluatedKey != "undefined");

    const coordinates = scanResults.map(item => ({
        latitude: item.Latitude,
        longitude: item.Longitude,
        status: item.Status,
        user: item.Username
    }));

    console.log("From scan: ", coordinates);
    return coordinates;
>>>>>>> 10c87ae (test crashing app)
}