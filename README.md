# connect_chef
Developed a dynamic web application that allows users to share and explore recipes locally or from around the world.

Location-Based Filtering: Integrated with the Google Maps API to retrieve the user's current location. Leveraging reverse geocoding, the app extracts neighborhood, city, state, county, and country details. Users can then filter recipe posts based on their preferred proximity. 
<img width="1676" alt="Screenshot 2024-06-05 at 10 51 40 AM" src="https://github.com/kpesaran/connect_chef/assets/95396160/a1b5eb4e-343f-4a59-9d88-fa2720f47060">


Interactive Mapping: maps page used the Google Maps API, where recipes, using longitude and latitude data, are represented as pins. As users adjust the map's zoom level or bounds, corresponding recipe posts dynamically update on the sidebar.
<img width="1667" alt="Screenshot 2024-06-05 at 10 53 44 AM" src="https://github.com/kpesaran/connect_chef/assets/95396160/4624b363-eb1f-4e1e-85c6-aac46d51d84a">
<img width="1665" alt="Screenshot 2024-06-05 at 10 54 25 AM" src="https://github.com/kpesaran/connect_chef/assets/95396160/a0490379-1eaf-481e-b3f8-b99ab9263479">



Developed a dashboard view empowering users to visualize databases insights globally or by country. Leveraged the Chart.js library to render various charts, providing analysis of data metrics such as popular cuisines, common ingredients, and posted recipes. 
<img width="1666" alt="Screenshot 2024-06-05 at 10 55 28 AM" src="https://github.com/kpesaran/connect_chef/assets/95396160/ec6b795f-3664-4388-aab9-9c8e03f75050">



Authentiaction: 
Utilized JWT (JSON Web Token) for authentication for login and authentication. 

<img width="1034" alt="image" src="https://github.com/kpesaran/connect_chef/assets/95396160/f27cd59b-3610-4dfe-82f7-e57db24d022c">


## How It's Made:
Utilized a MERN (MongoDB, Express.js, React.js, Node.js) stack along with Typescript, Tailwind, and the React Router Dom library.
Leveraged Google Maps Api, Google's Geocoding API, and Chart.js.
Used JWT and Bcrypt.js for authentication.


