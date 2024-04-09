/*
    Author: Thong Nguyen
*/

//IMAGE URLS
const M3_URL              = "https://hips.hearstapps.com/hmg-prod/images/2024-bmw-m3-110-1674509061.jpg?crop=0.760xw:0.642xh;0.0641xw,0.243xh&resize=2048:*";
const PORSCHE_CANYENN_URL = "https://media.ed.edmunds-media.com/porsche/cayenne/2024/oem/2024_porsche_cayenne_4dr-suv_base_fq_oem_1_600.jpg";
const G63_URL             = "https://hips.hearstapps.com/hmg-prod/images/2025-mercedes-amg-g63-exterior-102-6601c60516ddc.jpg?crop=0.563xw:0.635xh;0.200xw,0.245xh&resize=768:*";
const GT3RS_911           = "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uAVbsqYSIZ5yPewSQLCvNzxLE%25GXoq1S9yr6FObMFswRAyYib32yl3URN%25GcCW1TG87hXuci60yM";
const C63_AMG             = "https://www.motortrend.com/uploads/2022/12/011-2024-mercedes-amg-c-63-s-e-performance-first-drive-1.jpg";
const SF90_FERRARI        = "https://cdn.motor1.com/images/mgl/qkk7zv/s3/novitec-ferrari-sf90-stradale-2022.jpg";
const ROMA_FERRARI        = "https://hips.hearstapps.com/hmg-prod/images/2023-ferrari-roma-101-1667589567.jpg?crop=0.603xw:0.601xh;0.235xw,0.304xh&resize=768:*";
const GTS812_FERRARI      = "https://cdn.ferrari.com/cms/network/media/img/resize/5d70e7d4ee5f7e58630608ed-d-2.0-812gts-dynamic-focuson?";
const SPY918_PORSCHE      = "https://www.motortrend.com/uploads/sites/11/2014/04/2015-Porsche-918-Spyder-front-three-quarter-in-motion-032.jpg";
const M5_BMW              = "https://www.motortrend.com/uploads/2022/10/2023-BMW-M5-exterior-8.jpg";
const X3M_BMW             = "https://hips.hearstapps.com/hmg-prod/images/2023-bmw-x3-m-competition-109-6491b6e75c497.jpg?crop=0.821xw:0.615xh;0.0433xw,0.274xh&resize=1200:*"
const MEC_MAYBACH         = "https://media.ed.edmunds-media.com/mercedes-benz/maybach/2022/oem/2022_mercedes-benz_maybach_sedan_s-580-4matic_fq_oem_1_1600.jpg";
const MEC_EQS             = "https://www.cnet.com/a/img/resize/126414b323d88d8b70290e85e75c79bfba4b117e/hub/2021/10/07/a86d0f38-ac35-42f5-951b-1357fbd6df33/mercedes-benz-eqs-580-2022-736710-2.jpg?auto=webp&fit=crop&height=900&width=1200";
const PORSCHE_MACAN       = "https://hips.hearstapps.com/hmg-prod/images/2024-porsche-macan-s-102-6514924138123.jpg?crop=0.516xw:0.387xh;0.297xw,0.473xh&resize=1200:*";
const PORSCHE_PANAMERA    = "https://www.cnet.com/a/img/resize/af19510d2f631827ed2eaf39c93c7760be03f73c/hub/2020/08/25/25edabba-f534-4397-bd7e-9bb2aba39465/panamera-promo.jpg?auto=webp&width=1920";
const PORSCHE_944         = "https://images-porsche.imgix.net/-/media/39A7D394E7F84EE38894D06E659301F0_7D57F98CF3CD44B3ACCA494404542AA4_022-content-chapter_16-9_modell-944?w=999&q=85&auto=format";
const FERRARI_F40         = "https://hips.hearstapps.com/hmg-prod/images/1991-ferrari-f40-103-1593201414.jpg";
const X7_BMW              = "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-x7-101-65d51e47938f4.jpg?crop=0.783xw:0.587xh;0.0830xw,0.341xh&resize=1200:*";
const MEC_GLC300          = "https://cdn.jdpower.com/JDPA_2020%20Mercedes-Benz%20GLC%20300%20Black%20Front%20Quarter%20View.jpg";
const MEC_GLE             = "https://di-uploads-pod1.dealerinspire.com/mercedesbenzofmilwaukeenorth/uploads/2023/07/2024-Mercedes-Benz-GLE.jpg";

//OBJECTS
const car1  = new Car("Mercedes G63"      , "Mercedes", "Blue"  , "2024" , G63_URL);
const car2  = new Car("BMW M3"            , "BMW"     , "Green" , "2023" , M3_URL);
const car3  = new Car("Porsche Cayenne"   , "Porsche" , "Blue"  , "2022" , PORSCHE_CANYENN_URL);
const car4  = new Car("Porsche 911 GT3 RS", "Porsche" , "White" , "2018" , GT3RS_911);
const car5  = new Car("Mercedes C63 AMG"  , "Mercedes", "Black" , "2020" , C63_AMG);
const car6  = new Car("Ferrari SF90"      , "Ferrari" , "Red"   , "2024" , SF90_FERRARI);
const car7  = new Car("Ferrari Roma"      , "Ferrari" , "Grey"  , "2023" , ROMA_FERRARI );
const car8  = new Car("Ferrari GTS 812"   , "Ferrari" , "Black" , "2015" , GTS812_FERRARI);
const car9  = new Car("Porsche Spyder 918", "Porsche" , "Grey"  , "2014" , SPY918_PORSCHE);
const car10 = new Car("BMW M5"            , "BMW"     , "Red"   , "2020" , M5_BMW);
const car11 = new Car("BMW X3M"           , "BMW"     , "Blue"  , "2024" , X3M_BMW);
const car12 = new Car("Mercedes Maybach"  , "Mercedes", "Black" , "2021" , MEC_MAYBACH);
const car13  = new Car("Mercedes EQS"      , "Mercedes", "White" , "2022", MEC_EQS);
const car14  = new Car("Porsche Macan"     , "Porsche" , "Blue"  , "2024", PORSCHE_MACAN);
const car15  = new Car("Porsche Panamera"  , "Porsche" , "Orange", "2021", PORSCHE_PANAMERA);
const car16  = new Car("Porsche 944"       , "Porsche" , "White" , "1982", PORSCHE_944);
const car17  = new Car("Ferrari F40"       , "Ferrari" , "Red"   , "1991", FERRARI_F40);
const car18  = new Car("BMW X7"            , "BMW"     , "Blue"  , "2025", X7_BMW);
const car19  = new Car("Mercedes GLC 300"  , "Mercedes", "Black" , "2020", MEC_GLC300 );
const car20  = new Car("Mercedes GLE"      , "Mercedes", "Black" , "2024", MEC_GLE);


//ORIGINAL GARAGE (the garage of cars that are currently available for users)
let originalCollection = 
[
    car1,
    car2,
    car3,
    car4,
    car5,
    car6,
    car7,
    car8,
    car9,
    car10,
    car11,
    car12
];


//ADDITIONAL GARAGE (the garage of cars that are not available for users unless that want to add more cars from it)
let additionalCollection =
[
    car13,
    car14,
    car15,
    car16,
    car17,
    car18,
    car19,
    car20
];


//RETRIEVE GARAGE (the garage of deleted cars that is used to retrieve cars back when users accidentally delete one)
let retrieveGarage = 
[
    //This is initialized to contain nothing since there will be new car elements pushed when users delete car
];


//TOTAL GARAGE (the garage of total cars from three garages: originalCollection, additionalCollection, retrieveGarage)
let totalGarage =
[

];


generateTotalGarage(); //generate the garage of cars from originalCollection, additionalCollection, and retrieveGarage
console.log(totalGarage);

//SORT collection from model in descending order (newest to oldest)
originalCollection.sort((a, b) => b.model - a.model);


// FUNCTIONS

function showCars() //This function show the cars to users
{
    const carContainer = document.getElementById("car-container");
    carContainer.innerHTML = "";
    const templateCar = document.querySelector(".car"); // get the first element from class car
    
    for (let i = 0; i < originalCollection.length; i++) // the number of cars depend on the number of titles
    {             
        //initializations
        let carName = originalCollection[i].name;
        let brand   = originalCollection[i].brand;
        let color   = originalCollection[i].color;
        let model   = originalCollection[i].model;
        let image   = originalCollection[i].URL;

        const car = templateCar.cloneNode(true);                  //copy the template car
        editCarContent(car, carName, brand, color, model, image); //call function to edit car information
        carContainer.appendChild(car);                            //add new car to the container
    }
    
}

function editCarContent(car, newTitle, newBrand, newColor, newModel, newImageURL) //This function edits the information for each car
{
    car.style.display = "block";

    const carHeader = car.querySelector("h2");
    carHeader.textContent = newTitle;

    const carImage = car.querySelector("img");
    carImage.src = newImageURL;
    carImage.alt = newTitle + " Poster";

    //Fill in car information of brand, color, and model
    const carInformation = car.querySelectorAll("li"); // Array of brand, color, model
    carInformation.forEach((li, index) => {            //loop through the number of <li>
        switch(index)  //position of <li>
        {
            case 0: li.textContent = newBrand;
                break;
            case 1: li.textContent = newColor;
                break;
            case 2: li.textContent = newModel;
                break;
        }
    });
}

function removeLastCar() //This function removes a car
{
    retrieveGarage.push(originalCollection[originalCollection.length - 1]);
    originalCollection.pop(); //remove last item in titles array
    showCars();               //call shows again to refresh
}

function addCars() //This function adds a car from additionalCollection
{
    if(additionalCollection.length > 0) //if cars are still available from the garage before adding
    {
        originalCollection.push(additionalCollection[additionalCollection.length - 1]); //add the last element of additional car array to the original array
        additionalCollection.pop(); //delete the last element of additional car array to not replicate it later
        showCars();                                  
    }
    else
    {
        alert("We ran out of cars sorry!!");

    }
}

function retrievePreviousCar() //This function retrieve the previous deleted car
{
    if (retrieveGarage.length > 0)
    {
        console.log(retrieveGarage[retrieveGarage.length - 1]);
        originalCollection.push(retrieveGarage[retrieveGarage.length - 1]); //add the last element of additional car array to the original array
        retrieveGarage.pop();                                              //delete the last element of additional car array to not replicate it later
        showCars(); 
    }
    else //if user has not deleted any car
    {
        alert("You have not removed any cars!")
    }
}


function filterCar(category) //function filter search car based on car brands: BMW, Mercedes, Porsche, and Ferrari
{
    let type = category;
    let filterGarage = [];
    let temporaryGarage;

    //Testing
    console.log("filterCar has been ran"); 
    console.log(type);
    console.log(totalGarage);

    if (type == 'all') //if user wants to go back to default garage, which is before they filter
    {
        showCars();
    }
    else //users want to filter car brands
    {
        for (let car of totalGarage) //loop through cars inside the totalGarage
        //car is an element that has Car data type, so we can call its properties easily
        {
            if (car.brand.toLowerCase().includes(type)) //convert car brand to lower case & check if the brand is the type user filers
            {
                filterGarage.push(car); //adding car elements to filterGarage
            }
        }

        console.log(filterGarage);
        
        //Holding temporary value for originalCollection before changed
        temporaryGarage = originalCollection;
        originalCollection = filterGarage;
        console.log(originalCollection);

        showCars(); //show the collection of filtered cars
        console.log("filtered car loaded");

        originalCollection = temporaryGarage; //reset originalCollection back to its initial collection
        filterGarage = []; //reset  filterGarage for later use of filterCar()
        }
}

function generateTotalGarage() //This function generates cars for the totalGarage
{
    for (let carNum = 0; carNum < originalCollection.length; carNum++) //looping through cars in originalCollection
    {
        totalGarage.push(originalCollection[carNum]);
    }
    
    for (let carNum = 0; carNum < additionalCollection.length; carNum++) //looping through cars in additionalCollection
    {
        totalGarage.push(additionalCollection[carNum]);
    }
    
    for (let carNum = 0; carNum < retrieveGarage.length; carNum++) //looping through cars in retrieveGarage
    {
        totalGarage.push(retrieveGarage[carNum]);
    }
}

document.addEventListener("DOMContentLoaded", showCars); // This calls the showCars() function when the page is first loaded


//FUNCTION OBJECTS

function Car (name, brand, color, model, URL)
{
    this.name  = name;
    this.brand = brand;
    this.color = color;
    this.model = model;
    this.URL   = URL;
}
