# Creating an Express Server
1. Create Directory 
2. Create index.js
3. Initialize NPM, yarn or pnpm 
4. Install the Express package
5. Write Server application in index.js
6. Start server

# syntax
```JS
app.Method(path, callback-Function)
```
	Path:- defines the route for which the middleware function is triggered
	callback:- It can bed one or more function that process the request that has been made to the server. 

# HTTP Methods
## GET Method
Retrieves information from the specified resource, and should only be used to request data(not modify it).

## POST Method
Sends data to the server for processing, usually resulting in a change in the server state or side effects on the server. 

## PUT Method 
Updates a current resource or creates it if it doesn't exist, with the client providing a complete and updated copy of the resources.

## PATCH Method 
Updates parts of an existing resource, with the client providing only the parts of the resource that need to be updated. 

## Delete Method
Removes the specific resource from the server.

# MiddleWare
Middleware functions are functions that have access to the `req` object, `res` object and `next` middleware function in the application's request-response cycle.  

Express Middleware can use 
 - Application-level Middleware
 - Router-level Middleware
 - Error-handling Middleware
 - Built-in Middleware
 - Third-party Middleware 
