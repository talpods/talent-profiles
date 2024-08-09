class AdditionalProject {
  constructor(data) {
    this.projectName = data.projectName;
    this.link = data.link;
    this.description = data.description;
    this.technologies = data.technologies.map((item) => item);
    this.responsibilities = data.responsibilities.map((item) => item);
  }
}

export default AdditionalProject;
