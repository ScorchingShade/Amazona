# Amazona
The E-commerce mega project, to be completed soon
<hr>

## Tasks

### Website templates
- create index.html
- create header main footer
- style elements


### Products
- create products div
- add products attributes
- add link, image, name, price

### Create React APp
- npx create-react-app frontend
- npm start
- Remove unused files
- copy index.html content to app.js
- copy styles.css content to index.css
- replace class with classname

### Create Rating and Product Component
- creating components/Rating.js
- create div.rating
- style div.rating, span and last span
- create product component
- use rating component

### Build Product Screen
- Install react-router-dom
- User BrowserRouter and Route for HomeScreen
- Create HomeScreen.js
- Add product list code there
- Create ProductScreen.js
- Add new Route from product details to App.js
- create 3 columns for product image, info and action

### Create Node.JS Server
- run npm init in root folder
- Update package.json set type:module
- Add.js to imports
- npm install express
- create server.js
- add start command as node backend/server.js
- require express
- create route for / return backend is ready
- move product.js from frontend to backend
- create route for /api/products
- return products
- run npm start

### Load products from Backend
- edit HomeScreen.js
- define products, loading and error.
- create useEffect
- define async fetchData and call it
- install axios
- get data from /api/products
- show them in the list
- create loading component
- create Message Box Component
- Use them in HomeScreen

### Install ESlint For Code linting
- install VSCode eslint extension
- npm install -D eslint
- run ./node_modules/.bin/eslint --init
- Create ./frontend/.env
- Add SKIP_PREFLIGHT_CHECK=true

### Add Redux to Home Screen
- npm install redux react-redux
- Create store.js
- initState={products:[]}
- reducer = {state,action}=> switch LOAD_PRODUCTS:{products:action.payload}
- export default createStore(reducer, initState)
- Edit HomeScreen.js
- shopName = useSelector(state=>state.products)
- const dispatch =useDispatch()
- useEffect(()=>dispatch({type:LOAD_PRODUCTS,payload:data}))
- add store to index.js

### Add Redux to Product Screen
- create product detail constants, actions and reducers
- add reducer to store.js
- use action in ProductScreen.js
- add /api/v1/product/:id to backend api

### Handle Add to Cart Button
- Handle Add to cart in ProductScreen.js
- Create CartScreen.js

### Implement Add to Cart Action
- create addToCart constants, actions and reducers
- add reducer to store.js
- use action in CartScreen.js
- render cartItems.length

### Build Cart Screen
- Create 2 columns for cart item and cart action
- cartItems.length === 0 ? cart is empty
- show item, image, qty and price
- Proceed to checkout button
- Implement remove from cart action

### Implement Remove from Cart Action
- create removeFromCart constants, actions and reducers
- add reducer to store.js
- use action in CartScreen.js

### Connect to MongoDB
- npm install mongoose
- connect to mongodb
- create config.js
- npm install dotenv
- export MONGODB_URL
- create models/userModel.js
- create userSchema and userModel
- create models/productModel.js
- create productSchema and productModel
- create userRoute
- Seed sample data

### Create Sample Products in MongoDB
- create models/productModel.js
- create productSchema and productModel
- create productRoute
- seed sample data

### Create Sign-in Backend
- Create /signin api 
- check email and password
- generate jwt token
- install json web token
- install dotenv
- return token and data
- test it using postman

### Design SignIn Screen
- Create SigninScreen
- Render email and password fields
- Create signin constants, actions and reducers
- Update Header based on user login

### Implement SignIn Action
- Create SignIn constants, actions and reducers
- add reducer to store.js
- use action in SigninScreen.js

### Create Register Screen and Backend API
- Create API for /api/v1/users/register
- insert new user to database
- return usern info and token
- create RegisterScreen
- Add fields
- Style fields
- Add screen to App.js

### Create Shipping Screen
- Create CheckoutSteps.js component
- Create Shipping Fields
- Implement Shipping Constant, actions and reducers

### Create Payment Screen
- Create Payment Fields
- Implement Shipping Constant, actions and reducers

### Design Place Order Screen
- Design order summary fields
- Design order action

### Create backend Place Order API
- createOrder API
- create orderModel
- create orderRouter
- create post order route

### Implement PlaceOrder Action
- Handle place order button click
- create place order constants, action and reducer

### Create Order Screen
- Build Order API for /api/v1/orders/:id
- create OrderScreen.js
- dispatch order details action in useEffect
- load data with useSelector
- show data like place order screen
- create order details constant, action and reducer

### Add PayPal Button
- get client id from paypal
- set it in .env file
- create route from /api/v1/paypal/clientId
- create getPaypalClientID in OrderScreen.js
- add paypal checkout script in OrderScreen.js
- show paypal button

### Implement Order Payment
- update order after payment
- create payorder in api.js
- create route for /:id/pay in orderRouter.js
- rerender after pay order

### Display Orders History
- create customer orders api
- create api for getMyOrder
- show orders in profile screen
- style orders

### Display User Profile  
- Create user details api
- show user information

### Update User Profile
- Create user update api
- update user info

### Create Admin View
- Create Admin View
- Create Admin Middleware in backend
- Create Admin Route in Frontend

### List Products
- Create Product List Screen
- Add reducer to store
- show products on the screen

### Create Product
- Build Create Product API
- Build Create Product Button
- Define product create constant, action and reducer
- use action in Product List Screen

### Build Product Edit Screen
- create edit screen
- define state
- create fields
- load product details
- add to routes

### Update Product
- Define update api
- define product update constant, action and reducer
- use action in Product Edit Screen

### Upload Product Image for Admin
- npm install multer
- define upload router
- create uploads folder
- handle frontend

### Delete Product
- create delete api in backend
- create delete constants, action and reducer
- use it in product list screen

### List Orders
- create order list api
- create order list screen
- add reducer to store
- show products on the screen

### Delete Order
- create delete order action and reducer
- add order delete action to order list

### Deliver Order
- Create Constant, actions and reducers for deliver order
- add order deliver action to order details screen

### Publish to Heroku
- Create git repository
- Create Heroku Account
- Install Heroku CLI
- Heroku login
- heroku apps:create <yourname>amazoning
- Edit package.json for build script
- Create Procfile
- Create mongodb atlas db
- set database connection in heroku env variables
- commit and push

### List Users
- Build API for List Users
- Create User List Screen
- Create Order Details constant, actions and reducer

### Delete Users
- build api for delete users
- create order details constant, action and reducer
- use action in UserListScreen

### Edit User
- build api for updated user
- create edit screen UI

<hr>
