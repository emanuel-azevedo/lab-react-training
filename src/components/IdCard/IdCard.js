import './IdCard.css'
function IdCard (props) {

    const heighta = props.height/100

    return (
        <div className='box idCardBox'>
            <div>
                <img  className='imgCard' src={props.picture} alt='perfil-pic'/>
            </div>

            <div className='profileData'>
                <p>
                    <b>First name:</b> {props.firstName}
                </p>
                <p>
                    <b>Last name:</b> {props.lastName}
                </p>
                <p>
                    <b>Gender:</b> {props.gender}
                </p>
                <p>
                    <b>Height:</b> {heighta}m
                </p>
                <p>
                    <b>Birth:</b>{props.birth}
                </p>
            </div>
        </div>
    )
}

export default IdCard