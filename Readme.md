To Run the tasks

Step 1
  Give the command npm i
  To run the Project , give the command : node index

Step 2
   Create a category using API to create category before testing any other API.

APIs

1. Creating a category

http://localhost:3000/categories/create
 METHOD: POST
 req.body example:{
    "name": "Sports"
 }

2. Listing categories

http://localhost:3000/categories/list
METHOD: GET

3. Create an Article

http://localhost:3000/articles/create

METHOD: POST

req.body should be in form data
req.body example: 
  
heading:Heading 3
readTime:two hour
description:API to test create article api in formData test2
categories:["64cf7819fdb82628187a79c8","64cf7851fdb82628187a79ca"]     //ids of categories 
imagePath:
isVerified:true
isNewest:true
isTrending:true

4. List Articles

 http://localhost:3000/articles/list-articles

 METHOD: GET


5.List articles based on a category

http://localhost:3000/articles/category/:categoryId

METHOD: GET

example: http://localhost:3000/articles/category/64cf7819fdb82628187a79c8

6. List articles based on multiple categories

http://localhost:3000/articles/categories/:categoryIds


METHOD: GET

 Example: http://localhost:3000/articles/categories/64cf7819fdb82628187a79c8,64cf7851fdb82628187a79ca


7. Editing an Article

http://localhost:3000/articles/edit-article/:articleId

METHOD: PUT

Example:http://localhost:3000/articles/edit-article/64cfcde355c69619b8db28ad 

Example of req.body: {
    "heading": "My article"
}
   
8. Removing an article

 http://localhost:3000/articles/remove-article/:articleId

 METHOD: DELETE

 Example:  http://localhost:3000/articles/remove-article/64cf895746458702feb392ab





 






