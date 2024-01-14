import { DynamoDB } from 'aws-sdk';

export class DynamoDBService {
    private dynamoDb: DynamoDB.DocumentClient;

    constructor() {
        this.dynamoDb = new DynamoDB.DocumentClient();
    }

    async createItem(tableName: string, item: any): Promise<any> {
        const params = {
            TableName: tableName,
            Item: item
        };

        try {
            const data = await this.dynamoDb.put(params).promise();
            return data;
        } catch (error) {
            console.error('Error creating item:', error);
            throw error;
        }
    }

    async getItem(tableName: string, key: any): Promise<any> {
        const params = {
            TableName: tableName,
            Key: key
        };

        try {
            const data = await this.dynamoDb.get(params).promise();
            return data.Item;
        } catch (error) {
            console.error('Error fetching item:', error);
            throw error;
        }
    }

    async updateItem(tableName: string, key: any, updateExpression: string, expressionAttributeValues: any): Promise<any> {
        const params = {
            TableName: tableName,
            Key: key,
            UpdateExpression: updateExpression,
            ExpressionAttributeValues: expressionAttributeValues,
            ReturnValues: "UPDATED_NEW"
        };

        try {
            const data = await this.dynamoDb.update(params).promise();
            return data;
        } catch (error) {
            console.error('Error updating item:', error);
            throw error;
        }
    }

    async deleteItem(tableName: string, key: any): Promise<any> {
        const params = {
            TableName: tableName,
            Key: key
        };

        try {
            const data = await this.dynamoDb.delete(params).promise();
            return data;
        } catch (error) {
            console.error('Error deleting item:', error);
            throw error;
        }
    }
}