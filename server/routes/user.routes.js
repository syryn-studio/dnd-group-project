import { Router } from "express"
import UserController from "../controllers/user.controller.js"
// Define Router variable
const UserRouter = Router()

// Define the routes
UserRouter.route("/register")
    .post(UserController.register)
UserRouter.route("/login")
    .post(UserController.login)
UserRouter.route("/logout")
    .post(UserController.logout)
UserRouter.route("/current_user")
    .get(UserController.getCurrentUser)
UserRouter.route("/all")
    .get(UserController.getAll)

// Export the UserRouter
export default UserRouter