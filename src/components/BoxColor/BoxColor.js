function BoxColor(props) {
    let colors = {  backgroundColor: `rgb( ${props.r}, ${props.g}, ${props.b})`,
                    textAlign: "center"
                }


    return (
        <div className="box" style={colors}>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
            <p>{props.children}</p>
        </div>
    )
}

export default BoxColor