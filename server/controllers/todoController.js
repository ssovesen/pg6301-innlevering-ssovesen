import { randomTodos, Todos } from "../todos.js";

//@desc Get all todos
//@route GET /api/getAll
//@access Public
export const getAll = (req, res) => {
  try {
    if (Todos.length <= 0) {
      res.status(404).json({
        message: "No todos found",
      });
    } else {
      res.json(Todos);
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

//@desc Create a todo
//@route POST /api/addTodo
//@access Public
export const addTodo = (req, res) => {
  try {
    const { id, title, text, completed } = req.body;
    if (id && title && text) {
      Todos.push({
        id,
        title,
        text,
        completed,
      });
      res.status(200).json({
        message: "Todos added successfully",
      });
    } else {
      res.status(400).json({
        message: "Please provide all the required fields",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

//@desc Get a todo
//@route GET /api/getTodo/:id
//@access Public
export const getTodo = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const todo = Todos.find((todo) => todo.id === id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({
        message: "Todo not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
