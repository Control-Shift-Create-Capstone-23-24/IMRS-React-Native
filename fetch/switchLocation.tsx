// Import AWS SDK and types
import {Lambda} from 'aws-sdk';

const lambda = new Lambda({
    region: 'us-west-2',
    //store keys to .env file as AWS_ACCESS_KEY_ID=your_access_key_id /n AWS_SECRET_ACCESS_KEY=your_secret_access_key and use dotenv to load in app
    accessKeyId: process.env['AWS_ACCESS_KEY'],
    secretAccessKey: process.env['AWS_SECRET_KEY'],
});

export const switchLocation = async (color: string | null, latitude: number | null, longitude: number | null): Promise<any> => {
    console.log()
    const params = {
        FunctionName: 'switchLocationDynamoDB', // Update with your Lambda function name
        Payload: JSON.stringify({
            key1: color,
            key2: latitude,
            key3: longitude
        }),
    };

    try {
        const result = await lambda.invoke(params).promise();
        // Parse the result from the Lambda function
        return JSON.parse(result.Payload as string);
    } catch (error) {
        console.error('Error invoking the Lambda function switchLocation:', error);
        throw error;
    }
};