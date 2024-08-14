var uri = "https://restcountries.com/v3.1/all";
// Initialize New XMLHttpRequest instance
var newInstance = new XMLHttpRequest();
newInstance.open("GET", uri);
newInstance.send();
newInstance.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    var countries = JSON.parse(this.response);
     var filteredCountries = countries.filter(countries=>countries.population>200000 );
    console.log(filteredCountries);
    
  }
};
newInstance.onerror = function (error) {
  console.log("Error occured", error);
};