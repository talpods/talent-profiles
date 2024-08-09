import { GetItemCommand } from '@aws-sdk/client-dynamodb';
import dbClient from '../config/dbClient.js';
import { unmarshall } from '@aws-sdk/util-dynamodb';

class DynamoDBService {
  static async getItem(params) {
    const command = new GetItemCommand(params);
    const response = await dbClient.send(command);

    if (!response.Item) {
      return null;
    }

    return unmarshall(response.Item);
  }
}

export default DynamoDBService;
