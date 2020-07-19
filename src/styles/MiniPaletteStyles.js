export default {
    root : {
        backgroundColor: "white",
        border : "1px solid green",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover svg": {
            opacity: 1
        }
    },
    colors : {
        backgroundColor: "grey",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title : {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative "
    },
    emoji: {
        marginLeft: "1.5rem",
        fontSize: "1.5rem"
    },
    minibox: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom : "-4.5px"
    },
    deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "20px",
        height: "20px",
        padding: "10px",
        position: "absolute",
        top: "0px",
        right: "0px",
        zIndex: 20,
        opacity:0
    }
}