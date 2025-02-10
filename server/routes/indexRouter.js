const express = require("express")
const indexController = require("../controllers/indexController")
const router = express.Router()

router.get("/todos", indexController.allTodo )
router.post("/todos", indexController.newTodo )
router.put("/todos/:id", indexController.completeTodo )
router.delete("/todos/:id", indexController.deleteTodo )

module.exports = router