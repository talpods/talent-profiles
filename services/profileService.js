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
    return {
      TableName: this.TableName,
      Key: {
        pk: { S: 'talentProfile' },
        sk: { S: `talentProfile#${slug}` },
      },
    };
  }
}

export default ProfileService;
