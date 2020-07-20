import sizes from './mediaQueryHelpers'
import chroma from 'chroma-js'

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
        color: props =>
        chroma(props.color).luminance() <= 0.08 ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.6)",
        textTransform: "uppercase",
        letterSpacing: "1.5px",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
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