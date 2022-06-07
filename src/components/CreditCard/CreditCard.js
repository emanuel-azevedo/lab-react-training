import visaLogo from '../../assets/images/visa.png'
import masterLogo from '../../assets/images/master-card.svg'

function CreditCard(props) {

    let bandeira

    let numberCard = `**** **** **** ${props.number.slice(11, 15)}`

    if(props.type === 'Visa'){
        bandeira = visaLogo
    } else if (props.type === 'Master Card') {
        bandeira = masterLogo
    }

    return(
        
        <div className='creditCard' style={{backgroundColor: `${props.bgColor}`, borderRadius: '10px',}}>
            <div className='logoBandeira'>
                <img className='Bandeira' src={bandeira} alt="credit-card-logo"/>
            </div>

            <div className='numberCard'>
                <p>{numberCard}</p>
            </div>

            <div>
                <div className='dataProfile'>
                    <div>
                        <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                    </div>
                    <div>
                        <p>{props.bank}</p>
                    </div>

                </div>
                                
                <div>
                    <p>
                        {props.owner}
                    </p>
                </div>                
            </div>
        </div>    
        
    )
}

export default CreditCard