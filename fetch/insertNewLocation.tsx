
// Import AWS SDK and types
import {Lambda} from 'aws-sdk';


const lambda = new Lambda({
    region: 'us-west-2',
    accessKeyId: process.env['AWS_ACCESS_KEY'],
    secretAccessKey: process.env['AWS_SECRET_KEY'],
});

export const insertNewLocation = async (latitude: string, longitude: string, status: string, username: string): Promise<any> => {
    const params = {
        FunctionName: 'InsertNewLocation', // Update with your Lambda function name
        Payload: JSON.stringify({
            key1: latitude,
            key2: longitude,
            key3: status,
            key4: username,
        })
    }
    try {
        try {
            const result = await lambda.invoke(params).promise();
            // Parse the result from the Lambda function
            return JSON.parse(result.Payload as string);
        } catch (error) {
            console.error('Error invoking the Lambda function insertNewAccount:', error);
            throw error;
        }
    }
    catch (error) {
        console.error('Error invoking Lambda function:', error);
        throw error;
    }
}
