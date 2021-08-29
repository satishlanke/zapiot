
const { ObjectId } = require('mongodb');
const Jobs=require('./models')

module.exports={
    GetAllJobs,
    InsertJobData,
    GetJobsbyId
}



async function GetAllJobs(req, res) {   
    try{
        Jobs.find({}, (err, allDetails)=> {
            if (err) {
                console.log(err);
            } else {
                res.json(allDetails)
            }
        })
    }
    catch(error){
        console.log(error)
    }
    
}

async function GetJobsbyId(req, res) {   
    try{
       
        Jobs.findOne( { 
            "_id": ObjectId(req.params.id)
        },(err, allDetails)=> {
            if (err) {
                console.log(err);
            } else {
                res.json(allDetails)
            }
        })
    }
    catch(error){
        console.log(error)
    }
    
}

function InsertJobData(req,res){   
       
        var mod = new Jobs(req.body);  
            mod.save(function(err,data){  
                if(err){  
                    res.send(err);                
                }  
                else{        
                     res.send({data:"Record has been Inserted..!!"});  
                }  
            });  
    }