import './components/Greetings/Greetings.css'
import './components/IdCard/IdCard.css'
import './components/CreditCard/CreditCard.css'
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings'
import Random from './components/Random/Random'
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard'


function App() {
  return (
    <div>
      
      <IdCard        
        lastName='Doe'
        firstName='John'
        gender='male'
        height='178'
        birth=''
        picture="https://randomuser.me/api/portraits/men/44.jpg"       
      />

      <IdCard
        lastName='Obrien '
        firstName='Delores'
        gender='female'
        height={172}
        birth=''
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>

      <Greetings lang="fr">François</Greetings>
         
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <BoxColor r={255} g={0} b={0}>#ff0000</BoxColor>
      <BoxColor r={128} g={255} b={0}>#80ff00</BoxColor>
      
      <div className='creditCardBox'>
      <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
            
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
            
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />
      </div>
      

    </div>
  );
}

export default App;
