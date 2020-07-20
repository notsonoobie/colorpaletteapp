import sizes from './mediaQueryHelpers'
import bg from './bg.svg'

export default {
    "@global":{
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out"
        }
    },
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflow: "scroll",
        backgroundColor: "#77aa77",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover"
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
            width: "85%"
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
            textDecoration: "none"
        },
        "& h1": {
            [sizes.down('xs')]: {
                fontSize: "1.5rem"
            }
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
        letterSpacing: "1px",
        [sizes.down('sm')]: {
            padding: "0 5px",
            wordSpacing: "1px",
            letterSpacing: "0.5px"
        },
        [sizes.down('xs')]: {
            padding: "0 7px",
            wordSpacing: "0.5px",
            letterSpacing: "0.3px"
        }
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