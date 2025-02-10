const TodoModel = require("../models/todoModels")

class indexController {
    static allTodo =  async (req,res,next) => {
        try{
            const todos = await TodoModel.find()
            res.status(200).json({todos})
        }catch(e) {
            next(e)
        }
    }
    static newTodo =  async (req,res,next) => {
        try{
            const {task} = req.body
            const todo = await TodoModel.create({task})
            return res.status(200).json(todo)
        }catch(e) {
            next(e)
        }
    }
    static completeTodo =  async (req,res,next) => {
        try {
            const todo = await TodoModel.findByIdAndUpdate(
                req.params.id,
                { completed: req.body.completed },
                { new: true }
            );
            res.status(200).json(todo);
        } catch (e) {
            next(e);
        }
    }
    static deleteTodo =  async (req,res,next) => {
        try{
            const deletedTodo = await TodoModel.findByIdAndDelete(req.params.id);

            if (deletedTodo) {
            res.status(200).send({ message: 'Todo deleted successfully' });
            } else {
            res.status(404).send({ message: 'Todo not found' });
            }
        }catch(e) {
            next(e)
        }
    }
} 

module.exports = indexController