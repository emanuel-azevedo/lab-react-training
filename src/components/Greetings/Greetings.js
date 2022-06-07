
function Greetings(props) {
    
    if (props.lang === 'de') {
        return <p className="box">Hallo {props.children}</p>
    } else if (props.lang === 'en') {
        return <p className="box"> Hello {props.children}</p>
    } else if (props.lang === 'es') {
        return <p className="box"> Hola {props.children}</p>
    } else if (props.lang === 'fr') {
        return <p className="box"> Bonjour {props.children}</p>
    }    
}

export default Greetings