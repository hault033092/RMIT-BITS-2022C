const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser
} = require ("../controllers/userController");

router.route("/user").get(getAllUsers);

router.route("/:id").get(getOneUser);

router.route("/user").post(createUser);

router.route("/:id").delete(deleteUser);

router.route("/user").put(updateUser);

module.export = router;
