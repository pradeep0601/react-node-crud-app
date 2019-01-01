import React, {Component} from 'react';
import {Table, TableCell, TableHead, TableRow, Paper, Typography, Button} from '@material-ui/core';

class EmployeeRecord extends Component {
    
    render() {
        let employeeRecords;
        if (this.props.employeeRecords && this.props.employeeRecords.length > 0) {
            employeeRecords = this.props.employeeRecords.map((employee,index) => {
                return(
                <TableRow key = {index}>
                    <TableCell>{index}</TableCell>
                    <TableCell>{employee.employeeName}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.mobile}</TableCell>
                    <TableCell>
                        <Button onClick={()=>this.props.handleEdit(index)}>Edit</Button>
                        <Button onClick={()=>this.props.handleDelete(index)}>Delete</Button>
                    </TableCell>
                </TableRow>
                )});
            }
            else {
                employeeRecords = <TableRow key = 'no-record'>
                <TableCell>No Record!</TableCell>
            </TableRow>
            }

        return(
            <Paper>
            <Typography component="h1" variant="h5" className='react-crud-heading'>
            Employee Records
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>S.No</TableCell>
                        <TableCell>EmployeeName</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Mobile</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    {employeeRecords}
                </TableHead>
            </Table>
            </Paper>
        );
    }
}

export default EmployeeRecord;