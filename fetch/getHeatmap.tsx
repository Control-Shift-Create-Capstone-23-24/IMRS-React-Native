import { DynamoDB } from 'aws-sdk';

const dynamodb = new DynamoDB({
    region: 'us-west-2',
    accessKeyId: process.env['AWS_ACCESS_KEY'],
    secretAccessKey: process.env['AWS_SECRET_KEY'],
});

export function getHeatmap() {
    return new Promise((resolve, reject) => {
        const params = {
            TableName: 'Locations',
        };

        dynamodb.scan(params, (err, data) => {
            if (err) {
                console.error('Unable to scan the table:', err);
                reject(err);
            } else {
                const coordinates = data.Items.map(item => ({
                    latitude: item.Longitude.N,
                    longitude: item.Latitude.N,
                    status: item.Status.S,
                }));
                resolve(coordinates);
                console.log(coordinates)
            }
        });
    });
}