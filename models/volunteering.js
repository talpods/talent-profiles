class Volunteering {
  constructor(data) {
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.activityName = data.nameOfVolunteeringActivity;
    this.location = {
      city: data.location.cityState,
      country: data.location.country,
    };
    this.type = data.type;
    this.description = data.description;
  }
}

export default Volunteering;
