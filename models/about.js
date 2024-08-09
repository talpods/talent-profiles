class About {
  constructor(data) {
    this.photo = data.photo;
    this.userName = data.userName;
    this.firstName = data.firstName;
    this.secondNameInitials = data.secondNameInitials;
    this.level = data.level;
    this.seniority = data.seniority;
    this.specialization = data.specialization;
    this.scoresheetLink = data.scoresheetLink;
    this.bases = {
      city: data.bases.cityState,
      country: data.bases.country,
    };

    this.yearsOfExperience = parseInt(data.yearsExperience);
    this.domainExperience = data.domainExperience.map((item) => item);
    this.keyStrengths = data.keyStrengths.map((item) => item);
    this.uniqueness = data.uniqueness.map((item) => item);
    this.summary = data.summary;
    this.languages = data.languages.map((item) => ({
      name: item.name,
      proficiencyLevel: item.proficiencyLevel,
    }));
  }
}

export default About;
