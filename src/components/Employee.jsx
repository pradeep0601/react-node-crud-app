import React, {Component} from 'react';

class Employee extends Component {

    constructor() {
        super();
        this.state = {
            employeeName: '',
            email: '',
            mobile: ''
        }
    }
}

export default Employee;