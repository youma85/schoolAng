# Step 10

**Create Auth Page**

>ng g c auth

create the auth component and its routes 

**Handling form input**

Handle user input

**set up json auth server**

https://www.npmjs.com/package/json-server-auth

create server routes file with the following content:

```
{
  "users": 660,
  "classrooms": 660,
  "students": 660
}
```

Run the server with:

>json-server-auth src/app/utils/db.json -r src/app/utils/routes.json

add users array to db file

**Sing up request**

Create auth service

and create a method that send a Post request to server:

In the auth component use the method created to sign up

**Add a loading spinner**

Add a material progress spinner

**Error Handling**

**Login request**

create a method that send a Post request to firebase

In the auth component use the method created to sign in

**Creating & storing user**
 
create a new class user

When login or signing up store user data returned by the api

**manage navbar according to authentication**

display links in navbar according to user status

**Adding the Token to Outgoing Requests**

get the stored token and add it to the requests

**Attaching the Token with an Interceptor**

create a new service to attach the token to a request

**Adding logout**

add button logout 

**Adding auto login**

Store user in localStorage in order to verify if the user is already authenticated




