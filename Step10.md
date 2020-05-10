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


