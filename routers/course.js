const express = require("express");
const CourseController = require("../controllers/course");
const multiparty = require("connect-multiparty");
const md_auth = require("../middlewares/authenticathed");
const md_upload = multiparty({ uploadDir: "./uploads/course" });

const api = express.Router();

//APIs
// Parametros para la ruta ("url", [...middlewares], function_to_execute)
api.post("/course", [md_auth.asureAuth, md_upload], CourseController.createCourse);
api.get("/courses",CourseController.getCourse);
api.patch("/course/:id",[md_auth.asureAuth, md_upload],CourseController.updateCourse);
api.delete("/course/:id",[md_auth.asureAuth],CourseController.deleteCourse);

module.exports = api;