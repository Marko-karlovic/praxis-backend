import express from 'express';
import data from './store';
//import cors from 'cors';



const app= express();
const port= 3000;

//app.use(cors());
app.use(express.json());

app.get("/homepageStudent", (req, res)=> 
    res.json(data.ads)
);
app.get("/homepageCompany", (req, res)=>{
    res.json(data.ads);
     
});

//login forma
app.put("/login/:email/:password", (req, res)=>{
    let data=req.body;

    if (!data.email) {
    res.statusCode = 400;
    return res.json({
        error: 'There are email missing.',
        });
    }
if (!data.password) {
    res.statusCode = 400;
    return res.json({
        error: 'There are password missing.',
        });
    }
    res.statusCode = 201;
    res.setHeader('Location', '/login/email/password');
    res.send();
});
//signup forma
app.put("/signup/:email/:password/", (req, res)=>{
    let data=req.body;

    if (!data.email) {
    res.statusCode = 400;
    return res.json({
        error: 'There are email missing.',
        });
    }
if (!data.password) {
    res.statusCode = 400;
    return res.json({
        error: 'There are password missing.',
        });
    }
    res.statusCode = 201;
    res.setHeader('Location', '/signup/email/password');
    res.send();
});

//edit profile
app.put("/student/:email/:name/:lastname/:jmbag", (req, res)=>{
    let data=req.body;

    if (!data.email) {
        res.statusCode = 400;
        return res.json({
            error: 'There are email missing.',
            });
        }
    
    
    
        res.statusCode = 201;
    res.setHeader('Location', 'student/ivan@ivan.com/ivan/ivan/0303075567');
    res.send();
});

app.put("/company/:email/:companyName/:adress", (req, res)=>{
    let data=req.body;

    if (!data.email) {
        res.statusCode = 400;
        return res.json({
            error: 'There are email missing.',
            });
        }
    
    
    
        res.statusCode = 201;
    res.setHeader('Location', '/company/metro@metro.com/karlovac25');
    res.send();
});

//profile info

app.get("/profileStudent/:email/:name/:lastname/:jmbag", (req, res)=>{
    res.json(data.student)
})

app.get("/profileCompany/:email/:companyName/:adress", (req, res)=>{
    res.json(data.company)
})

//create add
app.put("/ad/:jobPosition/:contactCompany/", (req, res)=>{
    let data=req.body;

    res.statusCode = 201;
    res.setHeader('Location', '/ad/programmer/metro@metro.com');
    res.send();

})

//aplication on add
app.put("/ad/:jobPosition/:contactStudent/:applicant", (req, res)=>{
    let data=req.body;

    res.statusCode = 201;
    res.setHeader('Location', '/ad/programmer/ivan@ivan.com/ivan');
    res.send();

})

//get add data
app.get("/ad", (req, res)=>{
    
    res.json(data.ads);
    
})

//favorites
app.put("/favorites/ads/:jobPosition", (req, res)=>{
    
    let data=req.body;

    res.statusCode = 201;
    res.setHeader('Location', '/favorites/ads/programmer');
    res.send();

})

app.get("/favorites/ads", (req, res)=>{
    res.json(data.ads);
})


app.listen(port, () => console.log(`Slusam na portu ${port}!`))