import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button, CssBaseline, FormControl, Input, InputLabel, Paper, Typography
} from '@material-ui/core';
import EmployeeRecord from './EmployeeRecord';

class EmployeeForm extends Component {
    constructor() {
        super();
        this.employee = {};
        this.state = {
            employeeRecords: []
        }; 
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {employee} = this;
        this.setState(prevState=>({
            employeeRecords: [...prevState.employeeRecords, employee]
        }));
        this.employee = {};
    }

    handleChange = (({target: {name, value}}) => {
        this.employee[name] = value;
    })

    handleEdit = (index) => {
        const {employeeRecords} = this.state;
        const employeeRecord = employeeRecords && employeeRecords[index];
        const {employeeName, email, mobile} = employeeRecord;
        this.employeeName = employeeName;
        this.email = email;
        this.mobile = mobile;
    }

    handleDelete = (index) =>{
        const {employeeRecords} = this.state;
        employeeRecords.splice(index, 1);
        this.setState({
            employeeRecords
        })
    }

    render() {
        return (
            <main className='react-crud-main'>
                <CssBaseline />
                <Paper className='react-crud-paper'>
                    <Typography component="h1" variant="h5" className='react-crud-heading'>
                        Enter Employee Detail
                    </Typography>
                    <form className='react-crud-form'>
                        <FormControl margin='normal' fullWidth required>
                            <InputLabel htmlFor='employeeName'>Employee Name</InputLabel>
                            <Input id='employee-name' name='employeeName' onChange={this.handleChange} autoFocus ref={(employeeN)=>this.employeeName=employeeN}></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name='email' onChange={this.handleChange} autoComplete="email" ref={(email)=>this.email=email}></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth >
                            <InputLabel htmlFor="mobile">Mobile</InputLabel>
                            <Input name='mobile' onChange={this.handleChange} id="mobile" autoComplete="mobile" ref={(mobile)=>this.mobile=mobile}></Input>
                        </FormControl>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className='react-crud-submit'
                            onClick={this.handleSubmit}
                        >
                            Add Employee
                        </Button>
                    </form>
                </Paper>
                <EmployeeRecord employeeRecords={this.state.employeeRecords} handleEdit={this.handleEdit} handleDelete={this.handleDelete}></EmployeeRecord>
            </main>
        );
    }
}

EmployeeForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default EmployeeForm;