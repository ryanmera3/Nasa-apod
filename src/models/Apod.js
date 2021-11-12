export class Apod {
  constructor(data){
    this.id = data.id
    this.date = data.date
    this.media = data.media_type
    this.url = data.url
    this.explanation = data.explanation
  }
}