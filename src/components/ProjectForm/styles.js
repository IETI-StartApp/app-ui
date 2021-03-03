import { makeStyles } from '@material-ui/core/styles';
const styles = makeStyles({
    descriptionHeader: {
        color: "#999",
        textAlign: "center"
    },
    inputField: {
        width: "100%",
        margin: "1rem 0",
    },
    mainContainer: {
        display: "grid",
        justifyContent: "center",
        position: "relative",
        zIndex: 5
    },
    formContainer: {
        position: "relative",
        '@media (min-width:780px)': {
            width: '28.125rem'
        },
        height: "auto",
        padding: "2rem"
    },
    btn: {
        width: "100%",
        height: "3rem",
        background: "#950743",
        color: "#fff",
        "&:hover": {
            background: "#68042e",
        }
    },
    investment: {
        color: "#950743",
        textAlign: "center"
    }

});
export default styles;