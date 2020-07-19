import chroma from 'chroma-js'
import sizes from './mediaQueryHelpers'

export default {
    ColorBox: {
        width: "20%",
        height: props =>
        props.showFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5px",
        "&:hover button": {
            opacity: "1"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: props =>
            props.showFullPalette ? "20%" : "33.3333%",
        },
        [sizes.down("md")]: {
            width: "50%",
            height: props =>
            props.showFullPalette ? "10%" : "20%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props =>
            props.showFullPalette ? "5%" : "10%",
        },
    },
    copyText : {
        color: props =>
        chroma(props.background).luminance() > 0.5 ? "black" : "white"
    },
    colorName: {
        color: props =>
        chroma(props.background).luminance() <= 0.08 ? "white" : "rgba(0,0,0,0.6)"
    },
    seeMore: {
        position: "absolute",
        right: "0px",
        bottom: "0px",
        border: "none",
        background: "rgba(255,255,255,0.3)",
        color: props =>
        chroma(props.background).luminance() > 0.5 ? "rgba(0,0,0,0.6)" : "white",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton: {
        color: props =>
        chroma(props.background).luminance() > 0.5 ? "rgba(0,0,0,0.5)" : "white",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255,255,0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: 0,
        "&:hover": {
            cursor: "pointer"
        }
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        color: "black",
        textTransform: "uppercase",
        letterSpacing: "1.5px",
        fontSize: "12px",
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
    },
    showOverlay: {
        opacity: "1",
        zIndex: "10",
        transform: "scale(50)",
        position: "absolute",
    },
    copyMsg: {
        position: "fixed",
        left: "0",
        top: "0",
        bottom: "0",
        right: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255,255,255,0.3)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            [sizes.down("xs")]: {
                fontSize: "5rem"
            }
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: "100",
        }
    },
    showMsg: {
        opacity: "1",
        zIndex: "20",
        transform: "scale(1)",
        transition: "all 0.2s ease-in-out",
        transitionDelay: "0.2s",
    }
}