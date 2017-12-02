export class VisData {

  constructor() {}

  public generate() {
    var data = [];
    for (var i = 0; i < 25; i++) {            //Loop 25 times
      var newNumber = Math.random() * 30;   //New random number (0-30)
      data.push(newNumber);              //Add new number to array
    }
    return data;
  }
}
