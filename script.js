
// console.log("Hello, is this working);

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable library to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyEK6kGdjhMyfXSV" }).base(
  "appxN7EXAeflh9BBi"
);

//get the "songs" table from the base, select ALL the records, and specify the functions that will receive the data
base("name").select({}).eachPage(gotPageOfName, gotAllName);

// an empty array to hold our book data
const name = [];

// callback function that receives our data
function gotPageOfName(records, fetchNextPage) {
  console.log("gotPageOfName()");
  // add the records from this page to our songs array
    name.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllName(err) {
  console.log("gotAllName()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call function to show the songs
  consoleLogName();
  showName();
}

// just loop through the books and console.log them
function consoleLogName() {
    console.log("consoleLogName()");
    name.forEach((name) => {
      console.log("Name:", name);
    });
  }
  
  // loop through the books, create an h2 for each one, and add it to the page
  function showName() {
    console.log("showName()");
    name.forEach((name) => {

        var songContainer = document.createElement("div");
        songContainer.classList.add("name-container");
        document.querySelector(".container").append(nameContainer);
      

        // add song titles to out song container
        var songName = document.createElement("h1");
        songName.classList.add("name");
        songName.innerText = name.fields.name;
        songContainer.append(Name);

        // add artists to our song container
        var notes = document.createElement("h1");
        notes.classList.add("notes");
       notes.innerText =name.fields.notes;
        notesContainer.append(notes);

        // add description to our song container
        var notes = document.createElement("p");
        notesDescription.classList.add("notes-description");
        notesDescription.innerText = notes.fields.description;
        notesContainer.append(notesDescription);

        // add image to song container
        var Image = document.createElement("img");
        Image.classList.add("image");
        Image.src = song.fields.song_image[0].url;
        Container.append(Image);


        // get genre field from airtable
        // loop through the array and add each genre
        // as a class to the song container

        var typesGenre = types.fields.genre;
        typesGenre.forEach(function(genre) {
        typesContainer.classList.add(genre);
    });


        // add event listener to filter
        // to add an active class to our song
        var filterMeat = document.querySelector('.meat');
        filterMeat.addEventListener("click", function(){

        if (nameContainer.classList.contains("meat")){    
            nameContainer.style.background = "orange";
        } else {
            nameContainer.style.background = ("white");
        }
        })

        var filterVegan = document.querySelector('.vegan');
        Vegan.addEventListener("click", function(){
            if (nameContainer.classList.contains("vegan")){    
                nameContainer.style.background = "green";
            } else {
                nameContainer.style.background = ("white");
            }
        })

        var filterSalty = document.querySelector('.salty');
        filterSalty.addEventListener("click", function(){
            if (nameContainer.classList.contains("salty")){    
                nameContainer.style.background = "gblue";
            } else {
                nameContainer.style.background = ("white");
            }
        })

        var filterSweet = document.querySelector('.sweet');
        filterSweet.addEventListener("click", function(){
            if (nameContainer.classList.contains("sweet")){    
                nameContainer.style.background = "pink";
            } else {
                songContainer.style.background = ("white");
            }
        })

        var filterSpicy = document.querySelector('.spicy');
        filterSpicy.addEventListener("click", function(){
            if (nameContainer.classList.contains("spicy")){    
                nameContainer.style.background = "red";
            } else {
                songContainer.style.background = ("white");
            }
        })

        var filterSteamed = document.querySelector('.steamed');
        filterSteamed.addEventListener("click", function(){
            if (nameContainer.classList.contains("steamed")){    
                nameContainer.style.background = "yellow";
            } else {
                nameContainer.style.background = ("white");
            }
        })
        var filterFried = document.querySelector('.fried');
        filterFried.addEventListener("click", function(){
            if (nameContainer.classList.contains("fried")){    
                nameContainer.style.background = "brown";
            } else {
                nameContainer.style.background = ("white");
            }
        })

        var filterReset = document.querySelector('.js-reset');
        filterReset.addEventListener("click", function(){
            songContainer.style.background = "white";
            
        })









        
        // add event listener
        // when user clicks on song container
        // image and description appear or disappear
        songContainer.addEventListener("click", function(){
            songDescription.classList.toggle("active");
            songImage.classList.toggle("active");

        })



    });
  }