import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import TaskBoard from '../TaskBoard';
import theme from './../../commons/Theme/index'
class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <TaskBoard />
            </ThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
