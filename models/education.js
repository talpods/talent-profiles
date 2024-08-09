class Education {
  constructor(data) {
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.institutionName = data.institutionName;
    this.location = {
      city: data.location.cityState,
      country: data.location.country,
    };
    this.level = data.level;
    this.major = data.major;
    this.gpa = data.scoreGPA;
  }
}

export default Education;
