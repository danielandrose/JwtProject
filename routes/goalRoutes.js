import express from "express"
import { getGoals,updateGoal,postGoal,deleteGoal } from "../controllers/goalController.js";
import {protect} from "../middlewares/authMiddleware.js"

const router=express.Router();

router.get('/',protect,getGoals)

router.post('/',protect,postGoal)

router.put('/:id',protect,updateGoal)

router.delete("/:id",protect,deleteGoal)

export default router

