import express from'express';

const router=express.Router();

let employees=[];

router.get("/",(req,res)=>{
    console.log(employees);
    res.send(employees);
})


router.post("/",(req,res)=>{
    let emp=req.body;
    employees.push(emp);
    res.send(`Employee ${emp.firstName} ${emp.lastName} added successfully`);
});

router.get("/:id",(req,res)=>{
    const {id}=req.params;
    console.log(id);

    const foundEmployee=employees.find((employee)=>employee.empId==id);
    res.send(foundEmployee);
});

router.delete("/:id",(req,res)=>{
    const {id}=req.params;
    employees = employees.filter((employee)=>employee.empId!=id);
    res.send(`Employee deleted`);
});

router.put("/:id",(req,res)=>{
    const {id}=req.params;
    const foundEmployee=employees.find((employee)=>employee.empId==id);
    console.log(foundEmployee);
    let index=employees.indexOf(foundEmployee);
    console.log(index);
    let emp=req.body;
    console.log(emp);
    employees[index]=emp;
    res.send(`Updated`); 
});


export default router;