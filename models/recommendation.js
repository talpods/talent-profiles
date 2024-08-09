class Recommendation {
  constructor(data) {
    this.recommenderName = data.recommenderName;
    this.recommenderRelation = data.recommenderRelation;
    this.recommenderImg = data.recommenderImg;
    this.recommendation = data.recommendationText;
    this.recommendationDate = data.recommendationDate;
  }
}
export default Recommendation;
