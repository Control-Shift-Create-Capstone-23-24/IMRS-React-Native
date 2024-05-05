// @ts-ignore

import { DynamoDB } from 'aws-sdk';

const documentClient = new DynamoDB.DocumentClient({
    region: 'us-west-2',
    accessKeyId: process.env['AWS_ACCESS_KEY'],
    secretAccessKey: process.env['AWS_SECRET_KEY'],
});

interface Coordinates {
    latitude: number;
    longitude: number;
    status: string;
    user: string;
}

export async function getHeatmap() {
    let params = {
        TableName: 'Locations',
    };

    let scanResults:any = [];
    let items;
    do {
        items = await documentClient.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey = items.LastEvaluatedKey;
    } while (typeof items.LastEvaluatedKey != "undefined");

    const coordinates: Coordinates[] = scanResults.map(item => ({
        latitude: parseFloat(item.Latitude),
        longitude: parseFloat(item.Longitude),
        status: item.Status,
        user: item.Username
    }));

    console.log("From scan: ", coordinates);
    return coordinates;
}