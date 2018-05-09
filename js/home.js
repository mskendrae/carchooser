function processForm() {
    // your code goes here

 console.log("it works at top");
 //here is the maps
 let formValues = new Map();
          formValues.set("color", document.getElementById("color").value);
          formValues.set("make", document.getElementById("make").value);
          formValues.set("model", document.getElementById("model").value);
          formValues.set("type", document.getElementById("type").value);
          formValues.set("year", document.getElementById("year").value);

let searchResults=[];
let radioCheck = document.querySelector('input[name = "findBy"]:checked').value;
  if (radioCheck == "color") {
      searchResults = cars.filter((myCar) => {return myCar.color == formValues.get("color")});

  }    else if (radioCheck == "make") {
            searchResults = cars.filter((myCar) => {return myCar.make == formValues.get("make")});

    }    else if (radioCheck == "model") {
              searchResults = cars.filter((myCar) => {return myCar.make == formValues.get("model")});

    }    else if (radioCheck == "year") {
              searchResults = cars.filter((myCar) => {return myCar.make == formValues.get("year")});
    } else {
            searchResults = cars.filter((myCar) => {return myCar.make == formValues.get("type")});
        }

    let carHtml = "";
    for (let i=0; i < searchResults.length; i++){
        let formattedCar =
          `<ul>
          <li>Make: ${searchResults[i].make}</li>
          <li>Model: ${searchResults[i].model}</li>
          <li>Year: ${searchResults[i].year}</li>
          <li>Color: ${searchResults[i].color}</li>
          <li>Type: ${searchResults[i].type}</li>
          </ul>`;
          carHtml += formattedCar
        }


  document.getElementById("output").innerHTML = carHtml;




}

//
// Car Data
//
let cars = [
    {
        make: "Chevrolet",
        model: "Malibu",
        year: "2018",
        color: "red",
        type: "sedan"
    },
    {
        make: "Chevrolet",
        model: "Impala",
        year: "2012",
        color: "black",
        type: "sedan"
    },
    {
        make: "Subaru",
        model: "CrossTrek",
        year: "2016",
        color: "blue",
        type: "hatchback"
    },
    {
        make: "Ford",
        model: "Focus",
        year: "2009",
        color: "yellow",
        type: "hatchback"
    },
    {
        make: "Chevrolet",
        model: "Cruze",
        year: "2005",
        color: "black",
        type: "sedan"
    },
    {
        make: "Subaru",
        model: "WRX",
        year: "2013",
        color: "blue",
        type: "sedan"
    },
    {
        make: "Subaru",
        model: "BRZ",
        year: "2018",
        color: "red",
        type: "coupe"
    },
    {
        make: "Honda",
        model: "Odyssey",
        year: "2015",
        color: "green",
        type: "mini-van"
    },
    {
        make: "Honda",
        model: "Pilot",
        year: "2018",
        color: "black",
        type: "SUV"
    },
    {
        make: "Ford",
        model: "Explorer",
        year: "2010",
        color: "blue",
        type: "SUV"
    },
    {
        make: "Cheverolet",
        model: "Tahoe",
        year: "2017",
        color: "black",
        type: "SUV"
    },
    {
        make: "Dodge",
        model: "Viper",
        year: "2016",
        color: "red",
        type: "coupe"
    },
    {
        make: "Dodge",
        model: "Caravan",
        year: "2018",
        color: "silver",
        type: "mini-van"
    },
    {
        make: "Dodge",
        model: "Neon",
        year: "2001",
        color: "red",
        type: "sedan"
    },
    {
        make: "Ford",
        model: "Mustang",
        year: "2018",
        color: "red",
        type: "coupe"
    },
    {
        make: "Cadillac",
        model: "CTX",
        year: "2018",
        color: "white",
        type: "sedan"
    },
    {
        make: "Honda",
        model: "Civic",
        year: "2018",
        color: "silver",
        type: "sedan"
    },
    {
        make: "Honda",
        model: "CRV",
        year: "2012",
        color: "white",
        type: "SUV"
    }











]
