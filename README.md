# geocode_app
Developed a dynamic web application that allows users to share and explore recipes locally or from around the world.

Interactive Mapping: maps page used the Google Maps API, where recipes, using longitude and latitude data, are represented as pins. As users adjust the map's zoom level or bounds, corresponding recipe posts dynamically update on the sidebar.

Developed a dashboard view empowering users to visualize databases insights globally or by country. Leveraged the Chart.js library to render various charts, providing analysis of data metrics such as popular cuisines, common ingredients, and posted recipes. 

Location-Based Filtering: Integrated with the Google Maps API to retrieve the user's current location. Leveraging reverse geocoding, the app extracts neighborhood, city, state, county, and country details. Users can then filter recipe posts based on their preferred proximity. 

Authentiaction: 
Utilized JWT (JSON Web Token) for authentication for login and authentication. 

## How It's Made:
Utilized a MERN (MongoDB, Express.js, React.js, Node.js) stack along with Typescript, Tailwind, and the React Router Dom library.
Leveraged Google Maps Api, Google's Geocoding API, and Chart.js.
Used JWT and Bcrypt.js for authentication.


