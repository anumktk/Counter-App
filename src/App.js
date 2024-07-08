import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {
  const [counter, setcounter] = useState(0);
  const Increment=()=>{
    setcounter(counter + 1);
  };
  const Decrement=()=>{
    if (counter > 0){
    setcounter(counter - 1);
  }
  };
  return (
    <div 
    className='background-container'
    style={{
      display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "300%",
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundImage:"url('https://as1.ftcdn.net/v2/jpg/01/78/63/34/1000_F_178633426_U5MZNWHx2Y35XmuNonNxnJKqJAqUmEy7.jpg')",
                backgroundSize: "cover",
    }}>
    
      <h1 style={{
                    fontSize: "120%",
                    position: "relative",
                    top: "10vh",
                }}>Counter App</h1>
      <h1 style={{
                    fontSize: "120%",
                    position: "relative",
                    top: "10vh",
                }}>{counter}</h1>
<div style={{

                flexDirection: "row",
}}
>
  <Button style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "10vh",
                        marginRight: "8px",
                        backgroundColor: "blue",
                        borderRadius: "8%",
                        color: "white",
                    }}
                    onClick={Increment}>Increment</Button>
<Button style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "10vh",
                        marginLeft: "5px",
                        backgroundColor: "blue",
                        borderRadius: "8%",
                        color: "white",      
                    }}
                    
onClick={Decrement}>Decrement</Button>
</div>
    </div>
    
  );
}

export default App;

