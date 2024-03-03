// Import AWS SDK and types
import {Lambda} from 'aws-sdk';

// for now hard code your accessKeyID and SecretAcessKey
const lambda = new Lambda({
    region: 'us-west-2',
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
        return JSON.parse(result.Payload as string);
    } catch (error) {
        console.error('Error invoking Lambda function:', error);
        throw error;
    }
};
