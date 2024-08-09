import About from "../models/about.js";
import AdditionalProject from "../models/additionalProject.js";
import Award from "../models/award.js";
import Education from "../models/education.js";
import Experience from "../models/experience.js";
import Recommendation from "../models/recommendation.js";
import Volunteering from "../models/volunteering.js";
import TechnicalSkill from "../models/technicalSkill.js";
import Course from "../models/course.js";
import ModelsMapper from "../helpers/modelsMapper.js";

jest.mock("../models/about.js");
jest.mock("../models/additionalProject.js");
jest.mock("../models/award.js");
jest.mock("../models/education.js");
jest.mock("../models/experience.js");
jest.mock("../models/recommendation.js");
jest.mock("../models/volunteering.js");
jest.mock("../models/technicalSkill.js");
jest.mock("../models/course.js");

describe("Models Mapper testing cases", () => {
  describe("mapProfileData function testing", () => {
    it("should map profile data to model instances correctly", () => {
      const profile = {
        about: { summary: "test summary" },
        additionalProjects: [
          { projectName: "Project 1" },
          { projectName: "Project 2" },
        ],
        awardsCertificates: [{ title: "Award 1" }],
        courses: [{ provider: "Provider 1" }],
        educations: [{ institutionName: "University" }],
        experiences: [{ companyName: "Company 1" }],
        recommendations: [{ name: "Recommender 1" }],
        volunteering: [{ nameOfVolunteeringActivity: "volunteering 1" }],
        technicalSkills: ["Skill 1", "Skill 2"],
      };

      ModelsMapper.mapProfileData(profile);

      expect(About).toHaveBeenCalledWith(profile);
      expect(AdditionalProject).toHaveBeenCalledWith(
        profile.additionalProjects[0]
      );
      expect(AdditionalProject).toHaveBeenCalledWith(
        profile.additionalProjects[1]
      );
      expect(Award).toHaveBeenCalledWith(profile.awardsCertificates[0]);
      expect(Course).toHaveBeenCalledWith(profile.courses[0]);
      expect(Education).toHaveBeenCalledWith(profile.educations[0]);
      expect(Experience).toHaveBeenCalledWith(profile.experiences[0]);
      expect(Recommendation).toHaveBeenCalledWith(profile.recommendations[0]);
      expect(Volunteering).toHaveBeenCalledWith(profile.volunteering[0]);
      expect(TechnicalSkill).toHaveBeenCalledWith(profile.technicalSkills[0]);
    });

    it("should handle empty models correctly", () => {
      const profile = {
        summary: "test summary",
        firstName: "test name",
        additionalProjects: [],
        awardsCertificates: [],
        courses: [],
        educations: [],
        experiences: [],
        recommendations: [],
        volunteering: [],
        technicalSkills: [],
      };

      const result = ModelsMapper.mapProfileData(profile);

      expect(result.additionalProjects).toEqual([]);
      expect(result.awards).toEqual([]);
      expect(result.courses).toEqual([]);
      expect(result.educations).toEqual([]);
      expect(result.experiences).toEqual([]);
      expect(result.recommendations).toEqual([]);
      expect(result.volunteerings).toEqual([]);
      expect(result.technicalSkills).toEqual([]);
    });
  });
});
