import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUS } from './../../constant/index';
import TaskList from './../../components/TaskList/index';
import TaskForm from './../../components/TaskForm/index';

const listTask = [
    {
        id: 1,
        title: "Read book",
        description: "Read material UI book",
        status: 0
    },
    {
        id: 2,
        title: "Play soccer",
        description: "With my friend",
        status: 1
    },
    {
        id: 1,
        title: "Play game",
        description: "Funny",
        status: 2
    }
];

class TaskBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    renderBoard() {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUS.map((status, index) => {
                        const taskFilter = listTask.filter(task => task.status === status.value);
                        return <TaskList key={index} task={taskFilter} status={status} />;
                    })
                }
            </Grid>
        );
        return xhtml;
    }

    renderForm() {
        let xhtml = null;
        const { open } = this.state;
        xhtml = (
            <TaskForm open={open} handleClose={this.handleClose} />
        );
        return xhtml;
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    openForm = () => {
        this.setState({
            open: true
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskboard} >
                <Button variant="contained" color="primary" disableElevation onClick={this.openForm}>
                    <AddIcon /> Add Job
                </Button>
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    }
}

export default withStyles(styles)(TaskBoard);