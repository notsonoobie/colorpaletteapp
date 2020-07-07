export default {
    Palette: {
        height: "100vh",
        overflow: "hidden",
    },
    PaletteColors: {
        height: "90%",
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5px",
        opacity: "1",
        backgroundColor: "black",
        "& a": {
            color: "white",
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
            opacity: 1,
            "&:hover": {
                cursor: "pointer"
            }
        }
    },
    PaletteFooter: {
        backgroundColor: "white",
        height: "5vh",
        marginRight: "1rem",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    emoji: {
        fontSize: "1.5rem",
        margin: "0 1rem",
    }
}