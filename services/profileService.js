import DynamoDBService from './dynamoDBService.js';
import ModelsMapper from '../helpers/modelsMapper.js';
import { configs } from '../config/configs.js';

class ProfileService {
  static TableName = configs.usersTableName;
  static async getProfile(slug) {
    const queryParams = this._generateQueryParams(slug);
    const profile = await DynamoDBService.getItem(queryParams);

    if (!profile) {
      return null;
    }

    return ModelsMapper.mapProfileData(profile);
  }

  static _generateQueryParams(slug) {
    let paramKeys = {
      pk: { S: 'talentProfile' },
      sk: { S: `talentProfile#${slug}` },
    }
    if(configs.stage === 'prod'){
      paramKeys = {
        PK: { S: 'talentProfile' },
        SK: { S: `talentProfile#${slug}` },
      }
    }
    return {
      TableName: this.TableName,
      Key: paramKeys,
    };
  }
}

export default ProfileService;
