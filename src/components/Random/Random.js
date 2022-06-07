function Random(props) {

    let random = Math.floor(Math.random() * (props.max - props.min) + props.min);

    return (
        <div className="box">
           <p> Random value between {props.min} and {props.max} - {random}</p>
        </div>

    )
}

export default Random