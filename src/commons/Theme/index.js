import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({ // regulations color
    color: {
        primary: "#f50057",
        secondary: "#2196f3",
        error: "#ffb74d"
    },
    typoraphy: {
        fontFamily: "roboto"
    },
    shape: {
        borderRadius: 4,
        background: "#8561c5",
        color: "white"
    }
});

export default theme;