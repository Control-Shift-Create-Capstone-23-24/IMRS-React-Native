
// Import AWS SDK and types
import {Lambda} from 'aws-sdk';


const lambda = new Lambda({
    region: 'us-west-2',
    accessKeyId: process.env['AWS_ACCESS_KEY'], 
    //store keys to .env file as AWS_ACCESS_KEY_ID=your_access_key_id /n AWS_SECRET_ACCESS_KEY=your_secret_access_key and use dotenv to load in app
    secretAccessKey: process.env['AWS_SECRET_KEY'],
});

export const insertNewAccount = async (password: string, username: string): Promise<any> => {
    const params = {
        FunctionName: 'PutItemNewAccountDynamoDB', // Update with your Lambda function name
        Payload: JSON.stringify({
             key1: username,
             key2: password,

            //Deleteme Used for testing
            // key1: '',
            // key2: "password",
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