import {DynamoDB, Lambda} from 'aws-sdk';

const lambda = new Lambda({
    region: 'us-west-2',
    accessKeyId: process.env['AWS_ACCESS_KEY'],
    secretAccessKey: process.env['AWS_SECRET_KEY'],
});

export const createDynamoDBTable = async (tableName: string): Promise<any> => {
    const params = {
        FunctionName: 'CreateDynamoDBTable',
        Payload: JSON.stringify({
            tableName: tableName,
        }),
    };

    try {
        const result = await lambda.invoke(params).promise();
        return JSON.parse(result.Payload as string);
    } catch (error) {
        console.error('Error invoking the Lambda function:', error);
        throw error;
    }
};
