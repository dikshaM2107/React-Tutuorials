import React, { useRef, useState } from 'react';
import "./Css/ContactForm.css";
import ContactList from './ContactList';
import ShowModal from './ShowModal';
import Modal from './Modal';

function ContactForm() {
  const formRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const formValues = new FormData(formRef.current);
    const data = {
      name: formValues.get('name'),
      age: formValues.get('age'),
    };

    if(data.name === '' || data.age ==='')
    {
  
        if(data.name === '' && data.age ==='')
        {
          setShowModal(true);
          setMessage('Please Enter the username and age');
        }
        else if(data.age === '')
        {
          setShowModal(true);
          setMessage('Please Enter the age');
        }

        else if(data.name === '')
        {
          setShowModal(true);
          setMessage('Please Enter the username');
        }
        
    }
        
    else if(data.age <= 0)
    {
        setShowModal(true);
        setMessage('Please Enter the valid age (i.e > 0)');
    }
    else 
    {
      setFormData([...formData, data]);
      formRef.current.reset();
    }
  }



  return (
    <div className='wrapper'>
        <div className='content'>
            <form ref={formRef} onSubmit={handleSubmit} className ="form">

                    <div className='field flex'>
                        <label>Username</label>
                        <input type="text" name= 'name' placeholder='Enter Username'></input>
                    </div>

                    <div className='field flex'>
                        <label>Age</label>
                        <input type="number" name= 'age' placeholder='Enter Your Age'></input>
                    </div>
                    
                    <button className='btn'>Add</button>
                    
            </form>

            <div className='list content'>
                {
                    formData.map((data)=>
                        <ContactList user = {data.name} age ={data.age}/>
                    )
                }
            </div>

            {showModal && (
            <Modal>
              <ShowModal
                message= {message}
                setShowModal={setShowModal}
              />
            </Modal>
            )}
    </div>
    </div>
  );
}
export default ContactForm;
