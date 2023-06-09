# Blockbuster Reborn - '*Because Netflix is so Last Season*' 🍿🎞

Get ready to feast your eyes on a cinematic smorgasbord with Blockbuster Reborn, the go-to streaming site that brings the joy of movie nights back to life. Browse through our vibrant virtual shelves, packed with blockbuster hits, indie darlings, and everything in between. Interact with fellow film aficionados in our bustling online community, and join us for unforgettable themed movie nights. Blockbuster Reborn is your one-stop shop for pure movie magic. 🪄🎬

#####  ⚠️ It is important to note that our project: Blockbuster Reborn, is solely intended for educational purposes and does not involve any commercial use of the Blockbuster, Amazon, HBO, Hulu, Netflix, or YouTube brand or material. We do not hold any rights to use their content or images. Our aim is to showcase our skills and knowledge in Full Stack Software Development.

## **Blockbuster Reborn Cast & Crew (Collaborators) 🎭**

<!--- ## Collaborators -->
- Leah Simon (Github: [nsleeah](https://github.com/nsleeah))
- Mohamed Abdi (Github: [mohincode](https://github.com/mohincode))
- Ramiro Richmand (Github: [ramirorichmand](https://github.com/ramirorichmand))
- Ryder Rashid (Github: [rrydderr](https://github.com/rrydderr))
- Thinesan Manoseelan (Github: [thinesan29](https://github.com/thinesan29))

## **Table of Contents** 📖

#### PART 1: Backend Blockbuster Reborn API

> #### Blockbuster Reborn Backend Presentation 🧑‍🎨🎥

> 1. Backend Project Description 💬
> 2. Backend Project Diagrams 🎨
> 3. Blockbuster Reborn API Backend Demo: CRUD Functionality 🧑‍💻
> 4. Blockbuster Reborn Backend Dependencies & Tech Stack 🤖

#### PART 2: Frontend Blockbuster Reborn React Application

> #### Blockbuster Reborn Frontend Presentation 🧑‍🎨🎥

> 5. Blockbuster Reborn Frontend Diagrams 🎨
> 6. Blockbuster Reborn Frontend Instructions to Run Application 🔢
> 7. Blockbuster Reborn Frontend Routes 🗺 
> 8. Blockbuster Reborn Frontend Demo 🧑‍💻
> 9. Blockbuster Reborn Frontend Dependencies & Tech Stack 🤖

#### PART 3: Thank You & Further Information 

> 10. Blockbuster Reborn Cast & Crew (Collaborators) Thank You Message 🙏🎥
> 11. Keeping up to date & collaboration 📌

## Blockbuster Reborn Backend Presentation 🧑‍🎨🎥

https://user-images.githubusercontent.com/122550071/230603106-461983da-00f7-4778-b9b2-248fba5444ee.mp4


## **_1. Backend Project Description 💬_**

<!--- ## Description --> 

This project is a Blockbuster Reborn API containing movies and TV shows within a 'movielist.' Each movie and TV show contains the title, cast, genre, language, rating and review.

The program allows the user to have a movie/TV show stored in their 'watchlist' as well as add their own rating and review for added personalisation.

The user is able to filter movies and TV shows based on cast, genre and language.

### Movie:
Movie Class contains the following information:
- id
- title
- duration
- rating
- cast
- watchList
- genre
- language

### Cast:
Cast Class contains the following information:
- id
- name
- age
- bio

### MovieCastMember:
MovieCastMember represents the connection between a movie, a cast member, and their character name.

### Genre:
The Genre enum class is used to filter movies based on their genre, and includes the following options:
- `ORGINALS`
- `TOP_RATED`
- `ACTION`
- `COMEDY`
- `DOCUMENTARIES`
- `HORROR`

### Language:
The Language enum class is used to filter movies based on their language, and includes the following options:
- `ENGLISH`
- `TAMIL`
- `SPANISH`
- `GERMAN`
- `KANNADA`
- `KOREAN`
- `HINDI`
<br />

## **_2. Backend Project Diagrams 🎨_**

### UML Diagram 
The UML Diagram shows the relationships and attributes of each model. 

*This can be found in the "Blockbuster Reborn UML Diagram Backend Final.png" file.*

<img src ="./Blockbuster Reborn Capstone UML Diagram Final.png" alt="UML Diagram" width="80%"/>


### Entity Relationship Diagram  
The Entity Relationship Diagram shows the relationship between each model in the database. 

*This can be found in the "Blockbuster Reborn Capstone ERD.png" file.*

<img src="./Blockbuster Reborn Capstone ERD Final.png" alt="Entity Relationship Diagram" width="80%"/>

<br />

## **_3. Blockbuster Reborn API Backend Demo: CRUD Functionality 🧑‍💻_**

<!--- ## How to use the API -->

<!-- Demo Goes Here -->
https://user-images.githubusercontent.com/122550071/230561091-51145ca7-480a-45af-855c-0b2ac89f179b.mp4

<br />

***Please also refer to the above video when using Postman 👆***

## How to run

**Open and run back-end API in IntelliJ:**

  1.	Clone API from GitHub (https://github.com/thinesan29/BNTA_Capstone_GroupProject):
        - In Terminal: `git clone git@github.com:thinesan29/BNTA_Capstone_GroupProject.git`
  3.	Create local database called “movies”: 
         -	In Terminal: `createdb movies`
  4.	Download and install IntelliJ
  5.	Open API in IntelliJ
  6.	Run API from `CapstoneBackEndAPIApplication` file:
        -	Check API is running by opening `http://localhost:8080` on your desktop browser.

#### To access the program, use `https://localhost:{port}/{endpoint}` - the default port is 8080.

Each model - Movie, Cast and MovieCastMember - have REST controllers that provide basic CRUD functionality, specifically Index, Show, Create, Update and Delete routes. The Movie and Cast models also have additional functionality, described below: 

### 3.1 GET (SHOW)

**3.1.1 GET All Movies**: <br>
``````
Method: GET 
Endpoint : /movies
URL: http://localhost:8080/movies
```````
This GET request retrieves all the movies available in the API.

**3.1.2 GET All Casts**: <br>
``````
Method: GET 
Endpoint : /casts
URL: http://localhost:8080/casts
```````
This GET request retrieves all the casts available in the API.

**3.1.3 GET Movie By Id**: <br>
``````
Method: GET 
Endpoint : /movies/1
URL: http://localhost:8080/movies/1
```````

This GET method retrieves a single Movie resource by its unique identifier (Id) specified in the URL path parameter. In this case, the Id is 1. The method returns the Movie object with all its associated properties such as the title,duration,watchList,review,rating,trailer,language and genre.

**3.1.4 GET Cast By Id**: <br>
``````
Method: GET 
Endpoint : /casts/1
URL: http://localhost:8080/casts/1
```````

This GET method retrieves a single Cast resource by its unique identifier (Id) specified in the URL path parameter. In this case, the Id is 1. The method returns the Cast object with all its associated properties such as the name,age and bio.

**3.1.5 GET Movies By Genre**: <br>
``````
Method: GET 
Endpoint : /movies/genre/ACTION
URL: http://localhost:8080/movies/genre/ACTION
```````
The endpoint is designed to retrieve all movies categorised under the action genre in the database.

This method can also be used to retrieve movies for other genres, such as Originals, Top-Rated, Comedy, Documentaries, and Horror. Please refer to the Genre (Enum) in the BackEnd Project Description for more information. 

Please note, anything not listed in the Genre (Enum) will not work.

**3.1.6 GET 5 Random Movies**: <br>
``````
Method: GET 
Endpoint : /movies/random
URL: http://localhost:8080/movies/random
```````

This GET method retrieves 5 random movies from the API everytime the URL link is refreshed.

<hr />

### 3.2 POST (CREATE)

**3.2.1 POST New Movie**:<br>
``````
Method: POST 
Endpoint : /movies
URL: http://localhost:8080/movies
```````

The request body must be a JSON object containing the title,duration,watchList,review,rating,trailer,language and genre. The language and genre enum values are all listed in the API BackEnd Project Description section. If the request is successful, it will respond with a status code of 201 (Created) and the newly created Movie object in the response body.

In Postman, select Body -> JSON -> raw  and enter the following for the request body: 
```````
{
    "id": 31,
    "title": "Spider-Man No Way Home",
    "duration": 166,
    "watchList": false,
    "review": "Good",
    "rating": 8,
    "trailer": "https://www.youtube.com/embed/JfVOs4VSpmA",
    "language": "ENGLISH",
    "genre": "ACTION"
}
```````
For example, in this request, the language enum value is "ENGLISH," and the genre enum is "ACTION." If you want to use other examples, please refer to the listed language and genre enum values in the BackEnd Project Description. Please note that anything not on the list will NOT work.

**3.2.2 POST New Cast**:<br>
``````
Method: POST 
Endpoint : /casts
URL: http://localhost:8080/casts
```````

The request body must be a JSON object containing the name, age, and bio. If the request is successful, it will respond with a status code of 201 (Created) and the newly created Cast object in the response body.

In Postman, select Body -> JSON -> raw  and enter the following for the request body: 
```````
{
    "id":58,
    "name":"Tom Holland",
    "age": 26,
    "bio":"Thomas Stanley Holland is an English actor. His accolades include a British Academy Film Award and three Saturn Awards."
}
```````

In this example, a new Cast member named "Tom Holland has been added to the API.

<hr />

### 3.3 PUT (UPDATE)

**3.3.1 PUT Update Movie**:
``````
Method: PUT 
Endpoint : /movies/31
URL: http://localhost:8080/movies/31
```````
This method updates a movie resource with ID 31 on the server. Request body contains JSON of the updated movie resource. If the update succeeds, the server will return a success response code (e.g. 200 OK) with the updated movie resource in the response body. If the update fails (e.g. incorrect movie ID), an appropriate error response code (e.g. 404 Not Found) will be returned with an error message. 


In Postman, select Body -> JSON -> raw  and enter the following for the request body:

```````
{
    "id": 31,
    "title": "Spider-Man No Way Home",
    "duration": 166,
    "watchList": false,
    "review": "Good",
    "rating": 8,
    "trailer": "https://www.youtube.com/embed/JfVOs4VSpmA",
    "language": "FRENCH",
    "genre": "ACTION",
    "movieCastMember": []
}
```````

The example updates the "language" property of the movie resource with ID 31 from "ENGLISH" to "FRENCH".

Similarly, other properties such as "title", "genre", "duration", etc. can also be updated using the same method. The request body should include a JSON representation of the updated resource with the modified properties.

**3.3.2 PUT Update Cast**:
``````
Method: PUT 
Endpoint : /casts/58
URL: http://localhost:8080/casts/58
```````
This method is used to modify the properties of a specific cast resource with ID 58. The request body should include a JSON representation of the updated cast resource, containing the properties to be changed. A successful update will return a success response code (e.g. 200 OK) with the updated cast resource in the response body. However, if the update fails (e.g. incorrect cast ID), an error response code (e.g. 404 Not Found) will be returned along with an error message.

In Postman, select Body -> JSON -> raw  and enter the following for the request body:

````
{
    "id":58,
    "name":"Tom Stanley Holland",
    "age": 26,
    "bio":"Thomas Stanley Holland is an English actor. His accolades include a British Academy Film Award and three Saturn Awards",
    "movieCastMembers": []

}
````

In the given example for updating the cast resource with ID 58, the "name" property is updated from "Tom Holland" to "Tom Stanley Holland". 

Similarly, other properties such as "age" and "bio" can also be updated using the same method. The request body should include a JSON representation of the updated resource with the modified properties.


<hr/>

### 3.4 DELETE

**3.4.1 DELETE Movie**: <br>
``````
Method: DELETE
Endpoint : /movies/31
URL: http://localhost:8080/movies/31
```````

This method deletes the movie resource with ID 31 from the server. If the deletion is successful, a success response code (e.g. 204 No Content) is returned with no response body. If the deletion fails, an appropriate error response code (e.g. 404 Not Found) is returned with an error message in the response body.

**3.4.2 DELETE Cast**: <br>
``````
Method: DELETE
Endpoint : /casts/58
URL: http://localhost:8080/casts/58
```````
This method is used to delete the cast resource with ID 58 from the server. If the deletion is successful, a success response code (e.g. 204 No Content) is returned with no response body. If the deletion fails, an appropriate error response code (e.g. 404 Not Found) is returned with an error message in the response body.

<hr />

## **_4. Blockbuster Reborn Backend Dependencies & Tech Stack 🤖_**

<!--- ## Dependencies -->
- Spring Web
- SpringBoot Devtools
- Spring Data JPA
- PostgreSQL

<!-- Add Tech Stack -->

<hr />

## Blockbuster Reborn Frontend Presentation 🧑‍🎨🎥


https://user-images.githubusercontent.com/122550071/230789786-8adf49d8-eed0-4c17-a0f0-bbb560e350e4.mp4



## **_5. Blockbuster Reborn Frontend Diagrams 🎨_**

### Wireframe Diagram 
Our Wireframe diagram was our initial visual representation of the Blockbuster Reborn website's layout and functionality, showing the position of elements, content and the user interface, but without the design and style elements. 

*This can be found in the "Blockbuster Reborn Wireframe Initial Diagram.png" file.*

<img src ="./Blockbuster Reborn Wireframe Initial Diagram.png" alt="Blockbuster Reborn Wireframe" width="100%"/>

### Component Diagram
Our Component diagram was our initial visual representation of how the different user interface elements such as the header, footer, search bar, and videos were related and interacted with each other to create the overall user experience.

*This can be found in the "Blockbuster Reborn Component Initial Diagram.png" file.*

<img src ="./Blockbuster Reborn Component Initial Diagram.png" alt="Blockbuster Reborn Component" width="85%"/>


## **_6. Blockbuster Reborn Frontend Instructions to Run Application 🔢_**
       
**Open and run front-end project in VSCode:** 

  1.	Clone project from GitHub (https://github.com/thinesan29/BNTA_Capstone_GroupProject)
        - In Terminal: `git clone https://github.com/thinesan29/BNTA_Capstone_GroupProject`
  2.	Install node modules: 
        -	In Terminal: `npm i` or `npm install` <br>
        **Note: If `npm i` doesn't automatically install react slick, react icons, react bootstrap, and react router, you can follow steps 3, 4, and 5. Otherwise, proceed to step 6.**
  3.  Install React Icons.<br>
        - In your terminal, perform the following command: `npm i react-icons`
  4.  Install React Slick.<br>
        - In your terminal, perform the following command: `npm i react-slick`
  5.   Install React Bootstrap.<br>
        - In your terminal, perform the following command: `npm i react-bootstrap`
  6.	Download and open VSCode
  7.	Run React App:
        -	In Terminal: `npm start`
        -	App should open automatically on browser
        -	Otherwise check app is running by opening `http://localhost:3000` on your desktop browser

## **_7. Blockbuster Reborn Frontend Routes 🗺_**

The following are the Routes available on the React app, configured using the React Router library after following the above instructions:

Landing Page: `http://localhost:3000/Home`

Logo Video: `http://localhost:3000`

My List: `http://localhost:3000/MyList`

Login: `http://localhost:3000/Login`

Admin: `http://localhost:3000/Admin`

- Admin Manage: `http://localhost:3000/Admin/Manage`

  - Admin Manage Movie: `http://localhost:3000/Admin/Manage/Movie`

  - Admin Manage Cast: `http://localhost:3000/Admin/Manage/Cast`

Subscribe: `http://localhost:3000/Subscribe`

Blockbuster Originals: `http://localhost:3000/Blockbuster_Originals`

Top Rated: `http://localhost:3000/Top_Rated`

Action: `http://localhost:3000/Action`

Comedy: `http://localhost:3000/Comedy`

Documentaries: `http://localhost:3000/Documentaries`

Horror: `http://localhost:3000/Horror`

<!-- Add in others as well -->

## **_8. Blockbuster Reborn Frontend React Application 🧑‍💻_**

https://blockbuster-reborn-fullstack-capstone.netlify.app/

Blockbuster Reborn is now live and accessible to users! Our streaming site has been deployed using Netlify, providing a seamless experience for all users. Enjoy the vast array of movies and TV shows available at your fingertips.

## **_9. Blockbuster Reborn Frontend Dependencies & Tech Stack 🤖_**
* CSS
* HTML
* JavaScript
* React
  * React Bootstrap
  * React Slick
  * React Icons
  * React Router

<hr />


## **_10. Blockbuster Reborn Cast & Crew (Collaborators) Thank You Message 🙏🎥_**

We've arrived at the end of our project, here's a little something from our team, roll the credits:

https://user-images.githubusercontent.com/122550071/230571517-094ed92b-fd1d-41fb-ad5d-c71ea5338087.mp4

<br />

## **_11. Further Information 📌_**

### If you would like to keep up to date with **Blockbuster Reborn** 🍿, our **future developments** 🤔 and perhaps **collaborate** 🤝, **please STAR** this repository 🌟 and/or feel free to **reach out to us**. 

### Thank you and have a Blockbuster day from the Blockbuster Reborn team! ☺️

<img src ="./Blockbuster Reborn Logo Github.png" alt="Blockbuster Reborn Logo" width="50%"/>


#### © Blockbuster Reborn, April 2023

