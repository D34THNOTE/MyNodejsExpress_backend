# MyNodejsExpress_backend

This project is the backend-only version of my [TIN_project](https://github.com/D34THNOTE/TIN_Project) work, the scope of this project is limited to the back-end server handling communication with the database, it includes a stylized view on http://localhost:3000/ when running

To run:
1. Clone the repository
2. (While Docker application is running) Using command line type "docker-composte up" when in the directory that has this file(included in the repository)
3. Make sure that the created databases are running, specifically make sure that MySQL database on the port 3306 has been launched properly
4. While in the cloned repository run "npm start" command in the command line

The project should now be visible here: http://localhost:3000/

To log in use:
email: test@gmail.com
password: 123

When the local server is running we can send requests to the API, for example using the Postman application, the server works with GET, POST, PUT and DEL requests.

The addresses to send requests to:
localhost:3000/api/products - for Product model tab interaction
localhost:3000/api/orders - for Order tab interaction
localhost:3000/api/ordereds - for Ordered products tab interaction

Examples of requests:
- To view the list of all products we would send a GET request to the localhost:3000/api/products
- To view a specific record we would send a GET request to localhost:3000/api/products/1 - to view record with ID 1
- To create a new record we would send a POST request to localhost:3000/api/products with Body in JSON like:
{
    "name": "testAddProduct",
    "price": 69,
    "productionDate": "2021-09-09",
    "endDistributionDate": "2025-09-09"
}
- To update a product we would send a PUT request to localhost:3000/api/products/1(to updated the record with ID 1) and a body in JSON like:
{
    "name": "testUpdateProduct",
    "price": 1,
    "productionDate": "2022-04-28",
    "endDistributionDate": "2025-09-09"
}
- To delete a record we would send a DEL request to localhost:3000/api/products/1(to delete the record with ID 1)

Template JSON bodies for:
Order:
{
    "datePlaced": "2023-05-12",
    "clientContactInfo": "testEmail@test.icle",
    "shippingCompany": "whereWeDroppinBoyz",
    "premiumDelivery": 1
}
Ordered products:
{
    "quantity": 69,
    "ProductModel_IDproduct": 1,
    "Order_IDorder": 2
}


We can look at the results of our requests through the rendered view at http://localhost:3000/ or by logging into http://localhost:8183/index.php?route=/sql&pos=0&db=myDatabase&table=Orders using:
Server: mysql
Username: root
Password: root
