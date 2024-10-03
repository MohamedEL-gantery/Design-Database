# API Documentation

## Authentication Endpoints

- **Sign Up**  
  `POST` `localhost:3000/v1/auth/sign-up`  
  Allows users to create an account.

- **Login**  
  `POST` `localhost:3000/v1/auth/login`  
  Authenticates the user and returns a session token.

- **Logout**  
  `GET` `localhost:3000/v1/auth/logout`  
  Logs out the user by invalidating their session.

- **Forgot Password**  
  `POST` `localhost:3000/v1/auth/forget-password`  
  Sends an email to reset the password.

- **Verify Code**  
  `POST` `localhost:3000/v1/auth/verify`  
  Verifies the code sent for resetting the password.

- **Reset Password**  
  `PATCH` `localhost:3000/v1/auth/reset-password`  
  Allows the user to set a new password after verifying the code.

---

## Session Endpoints

- **Create Session**  
  `POST` `localhost:3000/v1/sessions/create`  
  Creates a new user session.

- **Get All Sessions**  
  `GET` `localhost:3000/v1/sessions/all`  
  Retrieves all sessions.

- **Get Session by ID**  
  `GET` `localhost:3000/v1/sessions/:id`  
  Retrieves a specific session by its ID.

- **Update Session**  
  `PATCH` `localhost:3000/v1/sessions/:id`  
  Updates the session with new information.

- **Delete Session**  
  `DELETE` `localhost:3000/v1/sessions/:id`  
  Deletes a specific session.

---

## Session Activity Endpoints

- **Create Session Activity**  
  `POST` `localhost:3000/v1/sessionActivities/create`  
  Creates a new session activity log.

- **Get All Session Activities**  
  `GET` `localhost:3000/v1/sessionActivities/all`  
  Retrieves all session activity logs.

- **Get My Session Activity**  
  `GET` `localhost:3000/v1/sessionActivities/me`  
  Retrieves session activities specific to the current user.

- **Delete Session Activity**  
  `DELETE` `localhost:3000/v1/sessionActivities/me`  
  Deletes the current user's session activity.

- **Get Session Activity by ID**  
  `GET` `localhost:3000/v1/sessionActivities/:id`  
  Retrieves a specific session activity by its ID.

- **Update Session Activity**  
  `PATCH` `localhost:3000/v1/sessionActivities/:id`  
  Updates a session activity.

---

## User Endpoints

- **Update Password**  
   `PATCH` `localhost:3000/v1/users/edit-password`  
  Allows the user to update password.

- **Edit Profile**  
  `PATCH` `localhost:3000/v1/users/edit-profile`  
  Allows the user to update their profile information.

- **Get Profile**  
  `GET` `localhost:3000/v1/users/me`  
  Retrieves the current user's profile.

- **Add Address**  
  `PATCH` `localhost:3000/v1/users/add-address`  
  Adds a new address to the user's profile.

- **Add Product to Wishlist**  
  `PATCH` `localhost:3000/v1/users/add-wishlist`  
  Adds a product to the user's wishlist.

- **Get All Users**  
  `GET` `localhost:3000/v1/users/all`  
  Retrieves all users (admin access).

- **Get User by ID**  
  `GET` `localhost:3000/v1/users/:id`  
  Retrieves a specific user by their ID.

- **Delete Current User (Self Delete)**  
  `DELETE` `localhost:3000/v1/users/me`  
  Deletes the current user.

- **Delete User by ID**  
  `DELETE` `localhost:3000/v1/users/:id`  
  Deletes a user by their ID.

---

## Vendor Category Endpoints

- **Create Vendor Category**  
  `POST` `localhost:3000/v1/vendorCategories/create`  
  Creates a new vendor category.

- **Get All Vendor Categories**  
  `GET` `localhost:3000/v1/vendorCategories/all`  
  Retrieves all vendor categories.

- **Get Vendor Category by ID**  
  `GET` `localhost:3000/v1/vendorCategories/:id`  
  Retrieves a specific vendor category by its ID.

- **Update Vendor Category**  
  `PATCH` `localhost:3000/v1/vendorCategories/:id`  
  Updates a specific vendor category.

- **Delete Vendor Category**  
  `DELETE` `localhost:3000/v1/vendorCategories/:id`  
  Deletes a specific vendor category.

---

## Product Category Endpoints

- **Create Product Category**  
  `POST` `localhost:3000/v1/productCategories/create`  
  Creates a new product category.

- **Get All Product Categories**  
  `GET` `localhost:3000/v1/productCategories/all`  
  Retrieves all product categories.

- **Get Product Category by ID**  
  `GET` `localhost:3000/v1/productCategories/:id`  
  Retrieves a specific product category by its ID.

- **Update Product Category**  
  `PATCH` `localhost:3000/v1/productCategories/:id`  
  Updates a specific product category.

- **Delete Product Category**  
  `DELETE` `localhost:3000/v1/productCategories/:id`  
  Deletes a specific product category.

---

## Vendor Endpoints

- **Create Vendor**  
  `POST` `localhost:3000/v1/vendors/create`  
  Creates a new vendor.

- **Get All Vendors**  
  `GET` `localhost:3000/v1/vendors/all`  
  Retrieves all vendors.

- **Update Current Vendor**  
  `PATCH` `localhost:3000/v1/vendors/edit-me`  
  Updates the current vendor's profile.

- **Get Current Vendor**  
  `GET` `localhost:3000/v1/vendors/me`  
  Retrieves the current vendor's profile.

- **Update Vendor by ID**  
  `PATCH` `localhost:3000/v1/vendors/:id`  
  Updates a specific vendor by ID.

- **Get Vendor by ID**  
  `GET` `localhost:3000/v1/vendors/:id`  
  Retrieves a specific vendor by their ID.

- **Delete Vendor by ID**  
  `DELETE` `localhost:3000/v1/vendors/:id`  
  Deletes a specific vendor by ID.

- **Update Vendor Status**  
  `PATCH` `localhost:3000/v1/vendors/edit-active/:id`  
  Updates the vendor's active status.

---

## Product Endpoints

- **Create Product**  
  `POST` `localhost:3000/v1/products/create`  
  Creates a new product.

- **Get All Products**  
  `GET` `localhost:3000/v1/products/all`  
  Retrieves all products.

- **Get Product by ID**  
  `GET` `localhost:3000/v1/products/:id`  
  Retrieves a specific product by ID.

- **Update Product**  
  `PATCH` `localhost:3000/v1/products/:id`  
  Updates a specific product.

- **Delete Product**  
  `DELETE` `localhost:3000/v1/products/:id`  
  Deletes a specific product.

---

## Cart Endpoints

- **Create Cart**  
  `POST` `localhost:3000/v1/carts/create`  
  Creates a new cart.

- **Get All Carts**  
  `GET` `localhost:3000/v1/carts/all`  
  Retrieves all carts.

- **Get My Cart**  
  `GET` `localhost:3000/v1/carts/me`  
  Retrieves the current user's cart.

- **Update My Cart**  
  `PATCH` `localhost:3000/v1/carts/edit-me`  
  Updates the current user's cart.

- **Get Cart by ID**  
  `GET` `localhost:3000/v1/carts/:id`  
  Retrieves a specific cart by ID.

- **Update Cart by ID**  
  `PATCH` `localhost:3000/v1/carts/:id`  
  Updates a specific cart.

- **Delete Cart by ID**  
  `DELETE` `localhost:3000/v1/carts/:id`  
  Deletes a specific cart.
