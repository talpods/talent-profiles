import DynamoDBService from '../services/dynamoDBService.js';
import ModelsMapper from '../helpers/modelsMapper.js';
import ProfileService from '../services/profileService.js';

jest.mock('../services/dynamoDBService.js');
jest.mock('../helpers/modelsMapper.js');

describe('Profile Service Testing cases', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getProfile function tests', () => {
    it('should return mapped profile data if profile is found', async () => {
      const slug = 'Monish';
      const params = {
        TableName: 'techsphere_talentProfiles',
        Key: {
          pk: { S: 'talentProfile' },
          sk: { S: `talentProfile#${slug}` },
        },
      };

      const profile = {
        pk: 'talentProfile',
        sk: `talentProfile#${slug}`,
        about: { firstName: 'Monish' },
      };
      const mappedProfile = { about: { firstName: 'Monish' } };

      DynamoDBService.getItem.mockResolvedValue(profile);
      ModelsMapper.mapProfileData.mockReturnValue(mappedProfile);

      const result = await ProfileService.getProfile(slug);

      expect(DynamoDBService.getItem).toHaveBeenCalledWith(params);
      expect(ModelsMapper.mapProfileData).toHaveBeenCalledWith(profile);
      expect(result).toEqual(mappedProfile);
    });

    it('should return null if profile is not found', async () => {
      const slug = 'Monish';
      const params = {
        TableName: 'techsphere_talentProfiles',
        Key: {
          pk: { S: 'talentProfile' },
          sk: { S: `talentProfile#${slug}` },
        },
      };

      DynamoDBService.getItem.mockResolvedValue(null);

      const result = await ProfileService.getProfile(slug);

      expect(DynamoDBService.getItem).toHaveBeenCalledWith(params);
      expect(ModelsMapper.mapProfileData).not.toHaveBeenCalled();
      expect(result).toBeNull();
    });
  });
});
