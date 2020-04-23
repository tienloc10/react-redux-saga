import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class TaskItem extends Component {
    render() {
        const { classes, task } = this.props;
        const { id, title } = task
        return (
            <Card key={id} className={classes.card}>
                <CardContent>
                    <Grid container justify="space between">
                        <Grid item md={8}>
                            <Typography component="h2">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            {title}
                        </Grid>
                    </Grid>
                    <p>{task.description}</p>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Fab color="primary" aria-label="edit" size="small" className={classes.fab}>
                        <EditIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="delete" size="small" className={classes.fab}>
                        <DeleteIcon />
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(TaskItem);