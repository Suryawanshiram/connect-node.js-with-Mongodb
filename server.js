const express=require("exress");
const mongose=require("mongose");
const app=express();

const url="mongodb+srv://shriram:<password>@cluster0.jpjfko6.mongodb.net/?retryWrites=true&w=majority"

// Write to Code to connect MongoDB

async function connect(){
      try {
            await mongose.connect(url);
            console.log.log("Connected to MongoDB Database");
      } catch (error) {
            console.log(error)
      }
}
connect();

app.listen(8000,()=>{
      console.log("Server is started at port 8000");
})

