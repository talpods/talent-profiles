import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { configs } from './configs.js';

const dbClient = new DynamoDBClient({
  region: configs.dbRegion,
});

export default dbClient;
