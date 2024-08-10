class Person {
    constructor( name = "",email = "", addres = "", phoneNo ) {
      this.name = name;
      this.email = email;
      this.addres  = addres;
      this.phoneNo = phoneNo
    } 
    }
  
    const details= new Person(
      "mightguy",
        "mightguy012@gmail.com",
        "headen leaf village",
        1234567890
    ) 
    
    console.log( details);