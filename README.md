## Book record management system
This is book record backend API application

## Routes and Endpoints

# /users
POST:Create a new user
GET :Get all the list of users


### /users /(id)
GET: get the user by id
PUT: Update a user by id
DELETE: delete a user by their id (check he/she has issue book)&&(Is there any fine to be collected)

### /users/subscription-details/(id)
GET: Get uer subscription details
Date of subscription
Valid till
Fine any



### /books
GET :get all books
POST: create/add a new book


### /books/(id)
GET:get a book by id
PUT:update a book by id

### /books/issued
GET:get all issued books

### /books/issued with fine
GET:get all issued books with fine

# Subscription type
>>>basic =3 months <br/>
>>>standard =6 months <br/>
>>>premium =12 months <br/>







### commands
...npm init <br/>
...npm i express <br/>
...npm i nodemon --save-dev <br/>
