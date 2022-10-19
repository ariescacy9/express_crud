import express from "express";

// Import Curse Controller
import { //importramos todos los Controller que tenemos 
  getCurses,
  getCurseById,
  createCurse,
  updateCurse,
  deleteCurse
} from "../controllers/curses.js";

const router = express.Router();

// Route get all curses
router.get('/curses', getCurses);
// Route get product by id
router.get('/curses/:id', getCurseById);
// Route create a new p
router.post('/curses', createCurse);
// Route update product by id
router.put('/curses/:id', updateCurse);
// Route delete product by id
router.delete('/curses/:id', deleteCurse);

// export router
export default router;