/* 
* @desc  Get Goals
* @route GET /api/goals
* @access Private
*/
const getGoals = (req,res) =>{
    res.status(200).json({message:"Get goal"})
}

/* 
* @desc  Set Goals
* @route POST /api/goals
* @access Private
*/
const setGoal = (req,res) =>{
    res.status(200).json({message:"set goal"})
}

/* 
* @desc  Update Goal
* @route Put /api/goals/:id
* @access Private
*/
const updateGoal = (req,res) =>{
    res.status(200).json({message:`Update goal ${req.params.id}`})
}

/* 
* @desc  Delete Goal
* @route DELETE /api/goals/:id
* @access Private
*/
const deleteGoal = (req,res) =>{
    res.status(200).json({message:`Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}