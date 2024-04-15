// Import AWS SDK and types
import {Lambda} from 'aws-sdk';

const lambda = new Lambda({
    region: 'us-west-2',
    //store keys to .env file as AWS_ACCESS_KEY_ID=your_access_key_id /n AWS_SECRET_ACCESS_KEY=your_secret_access_key and use dotenv to load in app
    accessKeyId: process.env['AWS_ACCESS_KEY'],
    secretAccessKey: process.env['AWS_SECRET_KEY'],
});

export const verifyLogin = async (password: string, username: string): Promise<any> => {
    console.log('Verifying login with username:', username, 'and password:', password)
    const params = {
        FunctionName: 'UsernamePasswordVerifyDynamoDB', // Update with your Lambda function name
        Payload: JSON.stringify({
            key1: username,
            key2: password,
        }),
    };

    try {
        const result = await lambda.invoke(params).promise();
        // Parse the result from the Lambda function
        //  return JSON.parse(result.Payload as string);
        return result.Payload;
    } catch (error) {
        console.error('Error invoking Lambda function UsernamePasswordVerifyDynamoDB:', error);
        throw error;
    }
};
