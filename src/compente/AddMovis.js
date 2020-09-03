import React, { Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";
const AddModal = (props) => {
  const [show, setShow] = useState(false);
  const [input,setInput]=useState({
    year:'',
      Titre:'',
      rating:'',
      image:''
  });
  const Add =(e)=>{
    
       
           props.setFilm([...props.film,input]);

  }
  return (
    <div>
      <Button variant="primary" onClick={() => setShow(!show)}>
        +
      </Button>
      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>        
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className='image'>
              <label className="input">Title:</label>               
           
              <input type="text" name="Titre" value={input.Titre} onChange={(e)=>setInput({...input , [e.target.name] : e.target.value})}/>
            </div>
            <div>
              <label className="input">Image:</label>           
              <input type="text" name="image" onChange={(e)=>setInput({...input , [e.target.name] : e.target.value})}/>
            </div>
            <div>
              <label className="input">Rating:</label>           
              <input type="text" name="rating" onChange={(e)=>setInput({...input , [e.target.name] : e.target.value})}/>
            </div>
            <div>
              <label className="input">Year:</label>              
              <input type="text" name="year" onChange={(e)=>setInput({...input , [e.target.name] : e.target.value})}/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>
                          Close             
          </Button>
          <Button variant="primary" onClick={Add}>
                          Add Movie             
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AddModal ;