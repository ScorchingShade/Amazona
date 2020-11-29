# Amazona
The E-commerce mega project
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
<hr>
