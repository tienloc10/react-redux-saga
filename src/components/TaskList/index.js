import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import TaskItem from './../TaskItem/index'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

class TaskForm extends Component {
    render() {
        const { classes, task, status } = this.props
        return (
            <Grid item md={4} xs={12} sm={4} key={status.value}>
                <Box component="span" m={1}>
                    <div className={classes.status}>{status.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {
                        task.map(task => {
                            const { status } = task;
                            return <TaskItem key={task.id} task={task} status={status} />
                        })
                    }
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskForm);
