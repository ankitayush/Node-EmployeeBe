import express from'express';
import bodyParser from 'body-parser';
import employeeRoutes from "./routes/employees.js";

const app=express();
const PORT=5000;

app.use(bodyParser.json());

app.use("/employees",employeeRoutes);

app.get("/",(req,res)=>{
    res.send("HI.");
});




app.listen(PORT,()=>{
    console.log(`Server running on port number ${PORT}`);
})
