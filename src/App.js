import './App.css';
import {useState,useEffect} from 'react';
function App() {
  const initialValues={
    Name:"",Email:"",Password:"",confirmPassword:""
  }
  const[formvalues,setFormvalues]=useState(initialValues);
  const[formErrors,setformError]=useState({});
  const[isSubmit,setSubmit]=useState(false);

  const handleChange=(e)=>{
    console.log(e.target);
    const{name,value}=e.target;
    setFormvalues({...formvalues,[name]:value});
    console.log(formvalues);
  }
  const handleSubmit=(e)=>{
     e.preventDefault();
     setformError(validate(formvalues));
     setSubmit(true);
  };

  useEffect(()=>{
    if(Object.keys(formErrors).length==0 && isSubmit){

    }
  },[formErrors])

  const validate=(values)=>{
       const errors={};
       if(!values.Name){
        errors.Name="Name is Required!"
       }
       else if(values.Name.length<4){
        errors.Name=""
       }
       if(!values.Email){
        errors.Email="Email is Required!"
       }
       if(!values.Password){
        errors.Password="Password is Required!"
       }
       else if(values.Password.length<6){
        errors.Password="password should be more then 6 characters!"
       }
       if(!values.confirmPassword){
        errors.confirmPassword="Password is Required!"
       }
       else if (values.confirmPassword!==values.Password){
        errors.confirmPassword="Password should be same!";
       }
       return errors;
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
      <h1>Signup</h1>
        <div>
        <input type="text" placeholder="Name" name="Name" onChange={handleChange}/>
        </div>
        <p>{formErrors.Name}</p>
        <div>
        <input type="email" placeholder="Email"  name="Email"onChange={handleChange}/>
        </div>
        <p>{formErrors.Email}</p>
        <div>
        <input type="password" placeholder="password" name="Password" onChange={handleChange}/>
        </div>
        <p>{formErrors.Password}</p>
        <div>
        <input type="password" placeholder="confirm password" name="confirmPassword" onChange={handleChange} />
        </div>
        <p>{formErrors.confirmPassword}</p>
        {Object.keys(formErrors).length==0 && isSubmit? (<div className="success">Successfully signed up</div>) : (<div></div>)}
        {Object.keys(formErrors).length>0 && isSubmit? (<div className="error">Error : All Fields Are Mandatory</div>) : (<div></div>)}
        <div>
        <button>Signup</button>
        </div>
        </div>
        </form>
    </div>
  );
}

export default App;
