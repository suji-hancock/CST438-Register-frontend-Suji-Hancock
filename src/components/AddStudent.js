import * as React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import 'react-toastify/dist/ReactToastify.css';

class AddStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "", email: "", statusCode: 0, open: false};
    };

    handleClickOpen = () => {
        this.setState( {open:true} );
      };
  
      handleClose = () => {
        this.setState( {open:false} );
      };

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value });
    }

    handleAdd = () => {
      this.props.addStudent(this.state);
      this.handleClose();
   }

    render () {
        const { name, email, statusCode} = this.state;
        return (
            <div>
                <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
                Add Student
                </Button>

                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Add Student</DialogTitle>
                    <DialogContent  style={{paddingTop: 20}} >
                    <TextField autoFocus fullWidth label="Name" name="name" onChange={this.handleChange}  /> 
                    <TextField fullWidth label="Email" name="email" onChange={this.handleChange}  /> 
                    </DialogContent>
                    <DialogActions>
                    <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                    <Button id="Add" color="primary" onClick={this.handleAdd}>Add</Button>
                    </DialogActions>
                    
                </Dialog>  
            </div> 
        );
    }

}

export default AddStudent;