import { configs } from '../config/configs.js';
import { formatSlug } from '../helpers/utils.js';
import ProfileService from '../services/profileService.js';

export const getProfile = async (req, res, next) => {
  try {
    const slug = req.params.slug;
    const profile = await ProfileService.getProfile(formatSlug(slug));

    if (!profile) {
      return res.render('error', { message: 'Profile not found' });
    }

    return res.render('profile', { profile, imagesSrc: configs.imagesSrc });
  } catch (error) {
    return next(error);
  }
};
