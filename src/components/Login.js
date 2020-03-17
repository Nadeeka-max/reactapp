import React from 'react'

//const user = 'Nadeeka Priyadarshani';

/*const user = {
    
        firstName : 'Nadeeka',
        lastName : 'Priyadarshani'
    
};*/


// Hello {user.firstName + " "+user.lastName}
const element = (
    <div>
        <h1>Hello Nadeeka</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
)

function Login() {
	
 return (
     <div>
         {element}
        
     </div>
 )

 

			
}



export default Login;