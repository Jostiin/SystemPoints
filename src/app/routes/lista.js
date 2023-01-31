const dbConnection = require('../../config/dbConnection');


module.exports = app => {
    const conection = dbConnection();

    app.get('/',(req,res) =>{

        
        res.render('login');
    
        
    });

    app.post('/login',(req,res) => {
        let get = req.body;
        
        const btn_entrar = req.body.admin_;
        const btn_ver = req.body.guest;
        if(btn_entrar){
            conection.query(`SELECT * FROM admins`,(err,result) =>{
                

                result.forEach(element => {

                    if(element.UserName == req.body.userName && element.Password == req.body.password_){
    
                        conection.query('SELECT * FROM list_students',(err,result) =>{
                            
                            
                            res.render('tabla_admin',{
                                students: result,
                            
                            });
                        });
                    }else{
                        res.redirect('/')
                    }

                   
                });
  
            });
        }
        if(btn_ver){
            conection.query('SELECT * FROM list_students',(err,result) =>{
                    
                res.render('tabla_guest',{
                    students: result,
                
                });
            });
        }
    })
    
    app.post('/sql',(req,res,valor) => {
        

        let get = req.body;
        
        const btn_add = req.body.add;
        const btn_delete = req.body.delete;
        if(btn_add){

          
            
            conection.query(`SELECT * FROM list_students WHERE id = ${parseInt(req.body.add)}`,(err,result) =>{
           
               
                let new_points = result[0].Points + parseInt(get.valor);
                
                conection.query(`UPDATE list_students SET Points =  ${new_points} WHERE id = ${parseInt(req.body.add)}`,
                (err,result) => {
                    res.redirect('/')
                });
            });
        }  
        
        if(btn_delete){
            
            conection.query(`SELECT * FROM list_students WHERE id = ${parseInt(req.body.delete)}`,(err,result) =>{
           
             
                
                let new_points = result[0].Points - parseInt(get.valor);
                
                conection.query(`UPDATE list_students SET Points =  ${new_points} WHERE id = ${parseInt(req.body.delete)}`,
                (err,result) => {
                    res.redirect('/')
                });
            });
        }


        
       
        
        
    })
};