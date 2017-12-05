export class VisData {
  public dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
  constructor() {}

  public generate() {
    var data = [];
    for (var i = 0; i < 25; i++) {
      var newNumber = Math.floor(Math.random() * 30);
      data.push(newNumber);
    }
    return data;
  }
}
