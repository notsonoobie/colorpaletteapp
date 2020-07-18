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
        }
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        color: "rgba(0,0,0,0.5)",
        textTransform: "uppercase",
        letterSpacing: "1.5px",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
    },
    deleteIcon: {
        color: "rgba(0,0,0,0.5)",
        transition: "all 0.3s ease-in-out"
    }
}
export default styles