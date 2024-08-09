class TechnicalSkill {
  constructor(data) {
    this.sectionName = data.sectionName;
    this.skills = data.skills.map((skill) => skill);
  }
}

export default TechnicalSkill;
