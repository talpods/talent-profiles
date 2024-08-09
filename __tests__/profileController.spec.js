import ProfileService from '../services/profileService.js';
import * as profileController from '../controllers/profileController.js';
import { configs } from '../config/configs.js';

jest.mock('../services/profileService.js');

describe('Profile Controller Testing', () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      params: {
        slug: 'faisal-minawi',
      },
    };
    res = {
      render: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the profile if found', async () => {
    const profileData = {
      pk: 'testPK',
      sk: 'testSK',
      about: { firstName: 'Faisal' },
    };
    ProfileService.getProfile.mockResolvedValue(profileData);

    await profileController.getProfile(req, res);

    expect(ProfileService.getProfile).toHaveBeenCalledWith('faisalminawi');
    expect(res.render).toHaveBeenCalledWith('profile', { profile: profileData, imagesSrc: configs.imagesSrc });
  });

  it('should render error page if profile not found', async () => {
    ProfileService.getProfile.mockResolvedValue(null);

    await profileController.getProfile(req, res);

    expect(ProfileService.getProfile).toHaveBeenCalledWith('faisalminawi');
    expect(res.render).toHaveBeenCalledWith('error', {
      message: 'Profile not found',
    });
  });

  it('should send 500 status code and error message on exception', async () => {
    const errorMessage = 'Something went wrong';
    const error = new Error(errorMessage);

    ProfileService.getProfile.mockRejectedValue(error);

    await profileController.getProfile(req, res, next);

    expect(ProfileService.getProfile).toHaveBeenCalledWith('faisalminawi');
    expect(next).toHaveBeenCalledWith(error);
  });
});
