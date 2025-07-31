import asyncHandler from 'express-async-handler';
import Goal from '../models/goalModel.js';
import User from '../models/userModel.js';

// get goals
// @route GET/api/goals
// @access Private
const getGoals= asyncHandler(async(req,res)=>{

    const goals=await Goal.find({user:req.user.id})
    res.status(200).json(goals)
})

const postGoal=asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400).json({message:'Please ass a text'})
    }
    const goal=await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})
 
const updateGoal=asyncHandler(async(req,res)=>{
    const goal=await Goal.findById(req.params.id)

    if(!goal){
        throw new Error("Goal not found")
    }

    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString()!==req.user.id){
        res.status(401)
        throw new Error("User not authorized")
    }

    const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.status(200).json(updatedGoal)
})

const deleteGoal=asyncHandler(async(req,res)=>{
    await Goal.findByIdAndDelete(req.params.id)

    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    if(Goal.user.toString()!==req.user.id){
        res.status(401)
        throw new Error("User not authorized")
    }

    res.status(200).json({message:`deleted goal ${req.params.id}`})
})

export {getGoals,postGoal,updateGoal,deleteGoal}