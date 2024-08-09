import About from '../models/about.js';
import AdditionalProject from '../models/additionalProject.js';
import Award from '../models/award.js';
import Education from '../models/education.js';
import Experience from '../models/experience.js';
import Recommendation from '../models/recommendation.js';
import Volunteering from '../models/volunteering.js';
import TechnicalSkill from '../models/technicalSkill.js';
import Course from '../models/course.js';
class ModelsMapper {
  static mapProfileData(profile) {
    const about = new About(profile);
    const additionalProjects = profile.additionalProjects.map((project) => new AdditionalProject(project));
    const awards = profile.awardsCertificates.map((award) => new Award(award));
    const courses = profile.courses.map((course) => new Course(course));
    const educations = profile.educations.map((education) => new Education(education));
    const experiences = profile.experiences.map((experience) => new Experience(experience));
    const recommendations = profile.recommendations.map((recommendation) => new Recommendation(recommendation));
    const volunteerings = profile.volunteering.map((volunteer) => new Volunteering(volunteer));
    const technicalSkills = profile.technicalSkills.map((skill) => new TechnicalSkill(skill));

    return {
      about,
      additionalProjects,
      awards,
      educations,
      experiences,
      recommendations,
      volunteerings,
      technicalSkills,
      courses,
    };
  }
}

export default ModelsMapper;
