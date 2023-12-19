

// task4 : 

            // insertone 2
            // insertmany 10 5 of them age 27y
            // find match 27y
            // limit 3  27y
            // &set name for the first 4 doc
            // &inc age for the first 4  ==> 4
            // updatemany inc {}  10
            // deletemany  age : 41  ==> deleteCount
////////////////////////////////////////////////////////////


const mongodb = require("mongodb")
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = "Task-4"
mongoClient.connect(connectionUrl,(error,res)=>{
    error?console.log(error):console.log("All pref")
    const db = res.db(dbname)
    /////////////////////////////////
    // insertone 2

    db.collection("members").insertOne({
        name:"marwan",
        age:29
    },(e,r)=>{
        e?console.log(e):console.log(r.insertedId)
    })
    db.collection("members").insertOne({
        name:"mohamed",
        age:32
    },(e,r)=>{
        e?console.log(e):console.log(r.insertedId)
    })
    
    ////////////////////////////////////////////////
    // insertmany 10 5 of them age 27y

    db.collection("members").insertMany([{
        name:"hossam",
        age:25
    },{
        name:"doaa",
        age:26
    },{
        name:"aya",
        age:27
    },{
        name:"islam",
        age:27
    },{
        name:"hesham",
        age:27
    },{
        name:"reda",
        age:27
    },{
        name:"nadia",
        age:27
    },{
        name:"merna",
        age:20
    },{
        name:"rawan",
        age:21
    },{
        name:"sara",
        age:22
    },],(e,r)=>{
        e?console.log(e):console.log(r.insertedCount)
    })

    ////////////////////////////////////////////////
    // find match 27y

    db.collection("members").find({age:27}).toArray((e,r)=>{
        e?console.log(e):console.log(r)
    })
    ////////////////////////////////////////////////
    // limit 3  27y

    db.collection("members").find({age:27}).limit(3).toArray((e,r)=>{
        e?console.log(e):console.log(r)
    })

    ////////////////////////////////////////////////
    // &set name for the first 4 doc
    // &inc age for the first 4  ==> 4

    db.collection("members").updateOne({_id:mongodb.ObjectId("658174c5043c4638a26a7b22")},{
        $set:{name:"ali"},
        $inc : {age:4}
    }).then(r=>console.log(r.modifiedCount)).catch(e=>console.log(e))

    db.collection("members").updateOne({_id:mongodb.ObjectId("658174c5043c4638a26a7b23")},{
        $set:{name:"farida"},
        $inc : {age:4}
    }).then(r=>console.log(r.modifiedCount)).catch(e=>console.log(e))

    db.collection("members").updateOne({_id:mongodb.ObjectId("658174c5043c4638a26a7b24")},{
        $set:{name:"salma"},
        $inc : {age:4}
    }).then(r=>console.log(r.modifiedCount)).catch(e=>console.log(e))

    db.collection("members").updateOne({_id:mongodb.ObjectId("658174c5043c4638a26a7b25")},{
        $set:{name:"zinab"},
        $inc : {age:4}
    }).then(r=>console.log(r.modifiedCount)).catch(e=>console.log(e))

    ////////////////////////////////////////////////
    // updatemany inc {}  10

    db.collection("members").updateMany({},{
        $inc : {age:10}
    }).then(d=>console.log(d.modifiedCount))
    .catch(e=>console.log(e))

    ////////////////////////////////////////////////
    // deletemany  age : 41  ==> deleteCount

    db.collection("members").deleteMany({age:41}).then(d=>console.log(d.deletedCount)).catch(e=>console.log(e))

    ////////////////////////////////////////////////
    // deletemany for ALL Data
    // db.collection("members").deleteMany({}).then(d=>console.log(d.deletedCount)).catch(e=>console.log(e))

})