import React from "react";
import { Form, Button, Container } from "react-bootstrap";


const CityInput = ({ city , setCity , fetchCityWheather, setFlag }) => {
    //const [city, setCity] = React.useState("");
    const [error,setError] = React.useState("");
    const handleInputChange = (event) => {
        setCity(event.target.value);

    };
    //console.log("cityis", city);
    const handleClick = () =>  {
       if(!city){
        setError("City Field is Empty");  
       }
       else{
       setFlag(true);
       //api call
       fetchCityWheather();
       //const tempr = cityWheather.main.temp ;
       setError("");
      // console.log(temp);
       }

    };
 
    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                        type="text" 
                        value = {city}
                        placeholder="Enter City" 
                        onChange={handleInputChange}
                    />
                <p className="text-danger">{error}</p>

                </Form.Group>
                <Button variant="primary" onClick = {handleClick}>
                    Submit
                </Button>
                
            </Form>
        </Container>
    );
};

export default CityInput; 