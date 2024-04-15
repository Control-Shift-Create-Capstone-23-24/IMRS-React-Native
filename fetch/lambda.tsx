import { Lambda } from 'aws-sdk';

// Define the interface for the Lambda function payload
interface LambdaPayload {
    username: string;
    password: string;
}

const lambda = new Lambda({
    region: 'us-west-2',
    //store keys to .env file as AWS_ACCESS_KEY_ID=your_access_key_id /n AWS_SECRET_ACCESS_KEY=your_secret_access_key and use dotenv to load in app
    accessKeyId: process.env['AWS_ACCESS_KEY'],
    secretAccessKey: process.env['AWS_SECRET_KEY'],
});

export const invokeLambdaFunction = async (payload: LambdaPayload) => {
    try {
        const params = {
            FunctionName: 'UsernamePasswordVerifyDynamoDB', // Replace with your actual Lambda function name
            InvocationType: 'RequestResponse', // Synchronous invocation
            Payload: JSON.stringify(payload), // Convert the payload to a string
        };

        const response = await lambda.invoke(params).promise();

        // Parse the response from the Lambda function
        const data = JSON.parse(response.Payload as string);

        // Log or handle the data returned from the Lambda function
        console.log('Lambda function response:', data);
    } catch (error) {
        console.error('Error invoking Lambda function:', error);
    }
};
