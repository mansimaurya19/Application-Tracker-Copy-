const createJob = async (req,res) => {
    res.send('create job')
}

const deleteJob = async (req,res) => {
    res.send('delete job')
}


const getAllJobs = async (req,res) => {
    res.send('get All job')
}


const updateJob = async (req,res) => {
    res.send('update job')
}


const showStats = async (req,res) => {
    res.send('ShowStats')
}




export { createJob, deleteJob, getAllJobs, updateJob, showStats }
