var uri = "https://restcountries.com/v3.1/all"; // "https://jsonplaceholder.typicode.com/todos/";
// Initialize New XMLHttpRequest instance
var newInstance = new XMLHttpRequest();
newInstance.open("GET", uri);
newInstance.send();
newInstance.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    var countries = JSON.parse(this.response);
    countries.forEach((country) =>
        console.log(country.USD.name,)
      );
    
     ;
    
  }
};
newInstance.onerror = function (error) {
  console.log("Error occured", error);
};