import sizes from './mediaQueryHelpers'

const styles = {
    root: {
        width: "20%",
        height: "100%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.3)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "80%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "40%"
        },
        [sizes.down("sm")]: {
            width: "100%",
            height: "20%"
        }
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        color: "#0366d6",
        textTransform: "uppercase",
        letterSpacing: "1.5px",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        "& span": {
            borderRadius: "6px",
            padding: "5px",
            backgroundColor: "rgba(255,255,255,0.7)",
        },
        [sizes.down("sm")]:{
            bottom: "-10%"
        }
    },
    deleteIcon: {
        color: "rgba(0,0,0,0.5)",
        transition: "all 0.3s ease-in-out",
        [sizes.down("sm")]: {
            width: "22px",
            height: "22px"
        }
    }
}
export default styles