class Experience {
  constructor(data) {
    this.companyName = data.companyName;
    this.workSummary = data.summary;
    this.companyDomain = data.companyDomain;
    this.companyIndustry = data.companyIndustry;
    this.companyBusinessActivity = data.companyBusinessActivity;
    this.candidatesUniqueAchievement = data.candidatesUniqueAchievement;

    this.location = {
      city: data.location.cityState,
      country: data.location.country,
    };
    this.positions = data.positions.map((position) => ({
      title: position.title,
      startDate: position.startDate,
      endDate: position.endDate,
      note: position.note,
      employmentType: position.employmentType,
    }));
    this.projects = data.projects.map((project) => ({
      projectName: project.projectName,
      link: project.link,
      description: project.description,
      technologies: project.technologies.map((tech) => tech),
      responsibilities: project.responsibilities.map((item) => item),
    }));
    this.responsibilitiesAndAccomplishments =
      data.responsibilitiesAndAccomplishments.map((item) => item);
    this.toolsAndTechnologies = data.toolsAndTechnologies.map((item) => item);
  }
}

export default Experience;
