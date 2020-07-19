import sizes from './mediaQueryHelpers'

export default {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "80%"
        },
        [sizes.down("xs")]: {
            width: "70%"
        }
    },
    nav: {
        color: "white",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& a": {
            fontFamily: "Roboto",
            textDecoration: "none",
        }
    },
    btn: {
        background: "linear-gradient(45deg,#fe6b8b 30%,#ff8e53 90%)",
        borderRadius: "3px",
        border: "none",
        color: "white",
        height: "48px",
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255,105,135,.3)",
        wordSpacing: "2px",
        letterSpacing: "1px"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "2.5rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2,50%)",
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1,100%)",
            gridGap: "1rem",
        }
    }
}