import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';


const Home = () => {
    const addToDo = e => {
        e.preventDefault()
        const name = e.target.name.value
        const description = e.target.text.value
        const comments = {
            name: name,
            description: description
        }

        fetch('http://localhost:5000/data', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(comments)
        })
            .then(res => res.json())
            .then(data => {
                toast('Successfully added')

            })
    }
    return (
        <div className="container mx-auto">
            <Form className='w-50 mx-auto border border-primary p-4 rounded my-5 shadow' onSubmit={addToDo}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name='text' as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" className='w-full' type="submit">
                    Add to do
                </Button>
            </Form>
        </div>
    );
};

export default Home;