Project Name - "ECOMMERCE"

Frontend (ReactJS):

Description:
The frontend of our e-commerce platform, developed with React, promises an engaging shopping experience. Users can seamlessly explore a diverse range of products, benefit from dynamic cart management, and track orders in real-time. Additionally, the platform boasts a personalized shopping experience with dedicated shop pages for each seller.

Key Features:
Dynamic Cart Management:
Explore products effortlessly and manage your cart dynamically for a frictionless shopping experience.

Personalized Shop Pages:
Enjoy a personalized shopping journey with dedicated shop pages for sellers, fostering enhanced engagement and product discovery.

Real-time Order Tracking:
Track orders in real-time, offering visibility into order statuses for a transparent and efficient shopping process.

Seller Panel:
Sellers benefit from an efficient panel, streamlining order handling, and ensuring a seamless experience in managing their products and orders.

Responsive Design:
The frontend guarantees a responsive design, adapting seamlessly to various devices and screen sizes, providing a consistent and enjoyable user experience.

Installation & Usage Steps:
cd react-ecommerce
npm install
npm start

but before this you need to start backend server OR
create build by using "npm run build", and set it in backend's /build;

Folder Structure:
└── /src
├── /components- Contains reusable React components, Pages and their corresponding SCSS files.
| ├──/SCSS- Holds SCSS files for styling.
| | ├──Component1.scss
| | ├──Component2.scss
| | └── ...
│ ├── Component1.jsx
│ ├── Component2.jsx
│ └── ...
├── /media- Stores main images and logos used in the application.
│ ├── image1.jpg
│ ├── image2.png
│ └── ...
├── /redux- Manages state using Redux and Redux Saga.
│ ├── actions- Contains Redux action creators.
│ ├── constants- Defines action types and constants.
│ ├── reducers- Implements Redux reducers.
│ ├── sagas- Manages Redux Sagas for asynchronous actions.
│ ├── services- Contains service files for API interactions.
│ └── store.js- Configures the Redux store.
├── index.js- Main entry point for React application.
└── router.js- Manages all routes within application.

Technologies used (Frontend)

- React
- React-Redux
- Redux Saga {Toolkit}
- React Router Dom
- Bootstrap
- Axios
- SCSS

Dependencies:
"axios": "^1.6.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-redux": "^8.1.3",
"react-router-dom": "^6.17.0",
"react-scripts": "5.0.1",
"react-spinners": "^0.13.8",
"redux": "^4.2.1",
"redux-saga": "^1.2.3",
"sass": "^1.69.5"
"react-toastify": "^9.1.3",
