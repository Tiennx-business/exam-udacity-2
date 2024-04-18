# udacity-tweets-app

This is a simple tweeter like application server.

***
## Getting Setup

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```bash
npm install
```
>_tip_: **npm i** is shorthand for **npm install**

***

## Running the Server Locally
To run the server locally in developer mode, open terminal and run:

`npm dev` or `node server`

***
## Important Files and Project Structure

The source code for this demo resides in the ./src directory.

#### Test URL
'http://localhost:8080/

## Curl commands

#### Get filteredimage by id
curl --location 'http://localhost:8080/filteredimage/1'

#### Get list of filteredimage
curl --location 'http://localhost:8080/filteredimage'

#### Get list of filteredimage filtered by author
curl --location 'http://localhost:8080/filteredimage?author=Michael'

#### Create a new filteredimage
curl --location 'http://localhost:8080/filteredimage' \
--header 'Content-Type: application/json' \
--data '{
    "author": "Elisabeth",
    "text": "This is the cutest puppy I have ever seen!",
    "imgUrl": ""
}'


## Setup Eb enviroment
1. eb init (setup eb application)
- set SSH key and ID
2. eb create (setup eb enviroment)
3. URL eb
-  "http://exam-udacity-2-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg"

4. Capture screen 
- src/images