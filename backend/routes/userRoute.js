const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser
} = require ("../controllers/userController");

router.route("/user").get(getAllUsers);

router.route("/:id").get(getOneUser);

router.route("/create").post(createUser);

router.route("/:id").delete(deleteUser);

module.export = router;
