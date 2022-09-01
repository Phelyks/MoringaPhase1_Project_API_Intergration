// const for URL => JAAS API

const rapidApiApiUrl = "https://arjunkomath-jaas-json-as-a-service-v1.p.rapidapi.com/";


// Objects using RapidAPI authorization for headers and headers in content

const rapidApiRequestHeaders = {
    'X-RapidAPI-Host': 'arjunkomath-jaas-json-as-a-service-v1.p.rapidapi.com'
  , 'X-RapidAPI-Key': '7xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  , 'Content-Type': 'application/json'
};

//Variable Store ID

let studentId = "";

// Student ID Examples

const student = {
    name: "John"
    , surname: "Doe"
    ,age: 18
};

// POST request on axioa from the connected Library

axios.post(rapidApiApiUrl, student,{
    headers: rapidApiRequestHeaders
})

//Handle a successful response from the server

    .then(response => {
        //Getting data from response containing the needed data on the server
        const data = response.data;
        console.log("data", data);

        //Save the unique id from the server for the object

        studentId = data._id;
    })

    //Catch and print errors if any

    .catch(error => console.error("On create student error", error));