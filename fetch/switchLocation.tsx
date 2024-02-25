// Import AWS SDK and types
import {Lambda} from 'aws-sdk';

// for now hard code your accessKeyID and SecretAcessKey
const lambda = new Lambda({
    region: 'us-west-2',
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
        console.error('Error invoking Lambda function:', error);
        throw error;
    }
};