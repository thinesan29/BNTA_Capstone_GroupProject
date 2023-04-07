# Blockbuster Reborn -'Because Netflix is so Last Season' 🍿🎞 (Work in Progress)

Get ready to feast your eyes on a cinematic smorgasbord with Blockbuster Reborn, the go-to streaming site that brings the joy of movie nights back to life. Browse through our vibrant virtual shelves, packed with blockbuster hits, indie darlings, and everything in between. Interact with fellow film aficionados in our bustling online community, and join us for unforgettable themed movie nights. Blockbuster Reborn is your one-stop shop for pure movie magic.

<!-- Presentation Goes Here -->

### This README will be split into two parts, the first containing the backend API and the second containing the frontend REACT application

## **TABLE OF CONTENTS** 📖

> 1. Backend Project Description
> 2. Backend Diagrams
> 3. Backend Technologies
> 4. Backend Dependencies
> 5. Blockbuster Reborn API
<!--- # Blockbuster Reborn Backend Project -->

## **_1. Backend Project Description_**

<!--- ## Description --> 

This project is a Bookkeeper API containing movies and TV shows within a 'movielist.' Each movie and TV show contains the title, cast, genre, language, rating and review.

The program allows the user to have a movie/TV show stored in their 'watchlist' as well as add their own rating and review for added personalisation.

The user is able to filter movies and TV shows based on cast, genre and language.

### Movie:
Movie contains an id, title, run time, rating, cast, watchlist, genre and language. 

### Cast:
Cast contains an id, age, bio and name.

### MovieCastMember:
MovieCastMember contains the movie, cast and character name.

<br />

## **_2. Backend Project Diagrams_**

### Class Diagram 
The class diagram shows the relationships and attributes of each model. It can be found in the "UML Diagram Backend Final.png" file.

<img src ="./UML Diagram Backend Final.png" alt="class diagram" width="80%"/>


### Entity Relationship Diagram  
The entity relationship diagram shows the relationship between each model in the database. It can be found in the "Blockbuster Reborn Capstone ERD.png" file.

<img src="./Blockbuster Reborn Capstone ERD Final.png" alt="Entity Relationship Diagram" width="80%"/>

<br />

## **_3. Backend Tech Stack_**


<!--- ## Tech Stack -->

The technologies used for this project are:
- Intellij IDEA, running JDK 17
- Spring Boot
- PostgreSQL 
- Postman

<br />

## **_4. Blockbuster Reborn API_**


<!--- ## How to use the API -->

<!-- Demo Goes Here -->

Please also refer to the above video when using Postman

### RESTful route endpoints

## How to run

**Open and run back-end API in IntelliJ:**

  1.	Clone API from GitHub (git@github.com:thinesan29/BTNA_Capstone_Project.git):
        - In Terminal: `git clone git@github.com:thinesan29/BTNA_Capstone_Project.git`
  3.	Create local database called “movies_api”: 
         -	In Terminal: `createdb movies`
  4.	Download and install IntelliJ
  5.	Open API in IntelliJ
  6.	Run API from `CapstoneBackEndAPIApplication` file:
        -	Check API is running by opening `http://localhost:8080` on your desktop browser.

#### To access the program, use `https://localhost:{port}/{endpoint}` - the default port is 8080.

Each model - Movie, Cast and MovieCastMember - have REST controllers that provide basic CRUD functionality, specifically Index, Show, Create, Update and Delete routes. The Movie and Cast models also have additional functionality, described below: 

- INDEX: 
  - `GET http://localhost:8080/movies` returns all books in JSON format and can be accessed via web browser
  - This method is available for all other models

- SHOW:
  - `GET http://localhost:8080/movies/{movieId}` returns movies with unique id = {id} and can be accessed via web browser

- CREATE:
  - `POST http://localhost:8080/movies` creates a movie with a unique id, and returns the created movie. 
  - Attributes of this new movie must be sent within the request body in Postman.

- UPDATE:
  - `PUT http://localhost:8080/movies/{movieId}` updates movies with unique id = {id} and returns the updated book. 
  - All attributes, changed or not, must be included in the request body in Postman.

- DELETE:
  - `DELETE http://localhost:8080/movies/{movieId}` deletes movie with unique id = {id}. 
  - This must be done in Postman. If delete request is successful, Http status 202 - no content - is returned.
  
### Filters and Sort
  
The movie model contains filters and a sort that allow the user to narrow their search. Filters can be applied based on genre and language. Movie can also be sorted by cast, rating and review.

<br />

## **_5. Blockbuster Reborn Dependencies_**

<!--- ## Dependencies -->
- Spring Web
- SpringBoot Devtools
- Spring Data JPA
- PostgreSQL
--------
## **_6. Blockbuster Reborn Collaborators_**

<!--- ## Collaborators -->
- Mohamed Abdi (Github: [mohincode](https://github.com/mohincode))
- Thinesan Manoseelan (Github: [thinesan29](https://github.com/thinesan29))
- Leah Simon (Github: [nsleeah](https://github.com/nsleeah))
- Ramiro Richmand (Github: [ramirorichmand](https://github.com/ramirorichmand))
- Ryder Zane Rashid (Github: [rrydderr](https://github.com/rrydderr))



<!-- Presentation Goes Here -->

### This README will be split into two parts, the first containing the backend API and the second containing the frontend REACT application

## **TABLE OF CONTENTS** 📖 <!-- idk about this -->

> 1. Backend Project Description
> 2. Backend Diagrams
> 3. Backend Technologies
> 4. Backend Dependencies
> 5. Blockbuster Reborn API
<!--- # Blockbuster Reborn Backend Project -->

## **_1. Backend Project Description_**

<!--- ## Description --> 

This project is a Bookkeeper API containing movies and TV shows within a 'movielist.' Each movie and TV show contains the title, cast, genre, language, rating and review.

The program allows the user to have a movie/TV show stored in their 'watchlist' as well as add their own rating and review for added personalisation.

The user is able to filter movies and TV shows based on cast, genre and language.

### Movie:
Movie contains an id, title, run time, rating, cast, watchlist, genre and language. 

### Cast:
Cast contains an id, age, bio and name.

### MovieCastMember:
MovieCastMember contains the movie, cast and character name.

<br />

## **_2. Backend Project Diagrams_**

### Class Diagram 
The class diagram shows the relationships and attributes of each model. It can be found in the "UML Diagram Backend Final.png" file.

<img src ="./UML Diagram Backend Final.png" alt="class diagram" width="80%"/>


### Entity Relationship Diagram  
The entity relationship diagram shows the relationship between each model in the database. It can be found in the "Entity Relationship Diagram Final Backend.png" file.

<img src="./Entity Relationship Diagram Final Backend.png" alt="entity relationship diagram" width="80%"/>

<br />

## **_3. Backend Tech Stack_**


<!--- ## Tech Stack -->

The technologies used for this project are:
- Intellij IDEA, running JDK 17
- Spring Boot
- PostgreSQL 
- Postman

<br />

## **_4. Blockbuster Reborn API_**


<!--- ## How to use the API -->

<!-- Demo Goes Here -->

Please also refer to the above video when using Postman

### RESTful route endpoints

#### To access the program, use `https://localhost:{port}/{endpoint}` - the default port is 8080.

Each model - Movie, Cast and MovieCastMember - have REST controllers that provide basic CRUD functionality, specifically Index, Show, Create, Update and Delete routes. The Movie and Cast models also have additional functionality, described below: 

- INDEX: 
  - `GET http://localhost:8080/movies` returns all books in JSON format and can be accessed via web browser
  - This method is available for all other models

- SHOW:
  - `GET http://localhost:8080/movies/{movieId}` returns movies with unique id = {id} and can be accessed via web browser

- CREATE:
  - `POST http://localhost:8080/movies` creates a movie with a unique id, and returns the created movie. 
  - Attributes of this new movie must be sent within the request body in Postman.

- UPDATE:
  - `PUT http://localhost:8080/movies/{movieId}` updates movies with unique id = {id} and returns the updated book. 
  - All attributes, changed or not, must be included in the request body in Postman.

- DELETE:
  - `DELETE http://localhost:8080/movies/{movieId}` deletes movie with unique id = {id}. 
  - This must be done in Postman. If delete request is successful, Http status 202 - no content - is returned.
  
### Filters and Sort
  
The movie model contains filters and a sort that allow the user to narrow their search. Filters can be applied based on genre and language. Movie can also be sorted by cast, rating and review.

<br />

## **_5. Blockbuster Reborn Dependencies_**

<!--- ## Dependencies -->
- Spring Web
- SpringBoot Devtools
- Spring Data JPA
- PostgreSQL
--------
## **_6. Blockbuster Reborn Collaborators_**

<!--- ## Collaborators -->
- Mohamed Abdi (Github: [mohincode](https://github.com/mohincode))
- Thinesan Manoseelan (Github: [thinesan29](https://github.com/thinesan29))
- Leah Simon (Github: [nsleeah](https://github.com/nsleeah))
- Ramiro Richmand (Github: [ramirorichmand](https://github.com/ramirorichmand))
- Ryder Zane Rashid (Github: [rrydderr](https://github.com/rrydderr))

