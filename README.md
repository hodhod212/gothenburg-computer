This is how to make migration:
dotnet ef migrations add InitialCreate -o Migrations ---------
For starting the projekt use: dotnet watch run  ----------
How to start client app:
First open a terminal THEN 
cd client THEN npm i THEN npm start
# -
If you start the API project in vs code you will get this url: http://localhost:5000
# -
If you start the API project in visual studio then you will get this url: https://localhost:44364
# - 
Just now we use this url to get products from api to client app in  starter\client\src\features\catalog\ProductDetails.tsx and starter\client\src\features\catalog\Catalog.tsx but we will need to use this url in more places when our project growing. Just now we have just one databse table to start with.
# -
Just now we have cors policy to allow http://localhost:3000 and http://localhost:3001 in  starter\WebAPI\Startup.cs so if you start your your react project in other port you need to allow the port in Startup.cs
