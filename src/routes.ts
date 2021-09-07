import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserReceiverComplimentController } from "./controllers/ListUserReceiverComplimentController";
import { ListUserSendComplimentController } from "./controllers/ListUserSendComplimetController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUsersController } from "./controllers/ListUsersController";


const router = Router();

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserReceiverComplimetController = new ListUserReceiverComplimentController()
const listUserSendComplimetController = new ListUserSendComplimentController()
const listTagController = new ListTagController()
const listUsersController = new ListUsersController()

router.post("/users", createUserController.handle)
router.post("/tags",ensureAdmin, ensureAuthenticated, createTagController.handle)
router.post("/session", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticated, createComplimentController.hanlde)
router.get("/list/compliments/receiver", ensureAuthenticated, listUserReceiverComplimetController.handle);
router.get("/list/compliments/send", ensureAuthenticated, listUserSendComplimetController.handle);
router.get("/tags", ensureAuthenticated, listTagController.handle)
router.get("/users", ensureAuthenticated, listUsersController.handle)

export { router }