import { useState } from "react";
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaStar } from "react-icons/fa";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
  
};
const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

 container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }
  

}),
);





function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  const classes = useStyles();


  const handleClick = (value:any) => {
    setCurrentValue(value)
  }

  const handleMouseOver = (newHoverValue:any) => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  return (
    <div className="App">
    <h1 className='title'>Customer  Feedback</h1><br />

<div className="form">
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className='labelTitle'>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
    
  </Form.Group><br />
  <Form.Label className='labelTitle'>Products</Form.Label>
  <Form.Group controlId="formBasicCheckbox" >
 
    <Form.Check type="checkbox" label="Meat"style={{display:'inline'}} />
    <Form.Check type="checkbox" label="Milk" />
  </Form.Group><br/>
  <Form.Label className='labelTitle'>Rating</Form.Label>
  <div className={classes.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <br />
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className='labelTitle'>Feedback</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group><br />
  <Form.Group controlId="formBasicEmail">
    <Form.Label className='labelTitle'>Image</Form.Label>
    <Form.Control type="file" accept="image/*" capture  />
    

    
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button> 
</Form>
</div>
    
    </div>
  );
}



export default App;
