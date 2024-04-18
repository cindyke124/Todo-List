import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';


function TodoForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            title: title,
            description: description,
            due_date: dueDate,
            status: status
        };

        fetch('http://127.0.0.1:8000/todos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
        )
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(function (data) {
                console.log('Todo added', data);
            })
    }

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    function handleDueDateChange(event) {
        setDueDate(event.target.value);
    }

    function handleStatusChange(event) {
        setStatus(event.target.value);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input
                    id="title"
                    name="title"
                    placeholder="Enter todo title"
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input
                    id="description"
                    name="description"
                    placeholder="Enter todo description"
                    type="textarea"
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="dueDate">Due Date</Label>
                <Input
                    id="dueDate"
                    name="dueDate"
                    type="date"
                    value={dueDate}
                    onChange={handleDueDateChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="status">Status</Label>
                <Input
                    id="status"
                    name="status"
                    type="select"
                    value={status}
                    onChange={handleStatusChange}
                >
                    <option value="">Select Status</option>
                    <option value="new">New</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                </Input>
            </FormGroup>
            <Button type="submit" disabled={!status}>Submit</Button>
        </Form>
    );
}

export default TodoForm;