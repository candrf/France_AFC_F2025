Getting Started
1.	After cloning the repo, navigate to Class3_Assignments/Capstone
2.	Open the backend folder in a new terminal window
      a.	Run the command: docker-compose up -d
      b.	Run the command: ./gradlew bR
3.	Open the frontend folder in a new terminal window
      a.	Run the command: npm install
      b.	Run the command: npm run dev
4.	Notes about running the app:
      a.	Docker container is set to run on port 5432, please ensure that port is available.
      b.	Backend server is setup to use port 8080. All of the API calls and file paths to images are hardcoded with the base url ‘http://localhost :8080’. Please make sure this port is available.
      c.	Frontend is setup to run on port 5173. This is the only allowed origin in the CorsConfig for the backend, so please make sure this port is available.
      d.	The database is seeded with 10 pre-made widgets. Additionally, there are only 5 available colors and two available lifecycle statuses, which are also seeded through the flyway migration.
      API Documentation
1.	Adding a new widget
      a.	Adding new widgets are done through a POST request at http://localhost8080/api/widgets
      b.	The API takes a JSON object as the request body, here is an example:
      {"name":"Doohicky",
      "blurb":"demo widget added",
      "rating":0,
      "quantity":1,
      "price":0.04,
      "slug":"doohicky",
      "createdAt":"2025-11-13T21:07:06.067Z",
      "updatedAt":"2025-11-13T21:07:06.068Z",
      "imageUrl":"http://localhost:8080/static/magnifying-glass.png",
      "color":{"id":1,label":"Red","code":"C001","hex":"#ff0000"},
      "lifecycle":{"id":1,"status":"active"}}


2.	Fetching all widgets
      a.	Getting all widgets is done through a GET request at http://localhost:8080/api/widgets
      b.	The data returned as an array of widgets, with the same structure as the example above.
3.	Editing a widget
      a.	Editing a widget is done through a PATCH request at http://localhost:8080/api/widgets/{id}
      b.	The id path variable should be the id of the widget stored in the database, this is used to reference what widget to update.
      c.	The request body is a widget DTO sent as JSON that looks like this:
      {"id":11,
      "name":"Doohickyedit",
      "blurb":"demo widget added edited",
      "rating":0,
      "quantity":1,
      "price":0.04,
      "slug":"doohicky edited",
      "createdAt":"2025-11-13T21:07:06.067",
      "updatedAt":"2025-11-13T21:18:43.961Z",
      "imageUrl":"http://localhost:8080/static/magnifying-glass.png",
      "color":{"id":3,"label":"Blue","code":"C003","hex":"#0000ff"},
      "lifecycle":{"id":2,"status":"inactive"}}
4.	Deleting a widget
      a.	Deleting is done through a DELETE request at http://localhost:8080/api/widgets/{id}
      b.	Like with editing, the widget id is used to map it to its related primary key in the backend. No data is returned on delete except a no content response code.
5.	Uploading an image
      a.	Uploading an image is done through a POST request at http://localhost8080/api/upload
      b.	The request body takes a file and is of content type “multipart/form-data”
      c.	The response is a string for the URL the file is stored at, for example:  “http://localhost:8080/static/filename.jpg”
      d.	Notes about image storage:
      i.	Images are stored locally in the backend at /uploads folder
      ii.	The static resource config file is set up to serve files at http://localhost:8080/static/...
      iii.	This URL is stored in the imageUrl field for each widget
