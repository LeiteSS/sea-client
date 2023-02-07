import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HomeBackground, BodyContainer, InlineContainer, InlineTitle, } from './styles';
import Header from '../../components/Header';

import useAuth from '../../hooks/userAuth';
import { newObjective, updateObjective } from '../../controllers/objective';

import { FiArrowLeft } from 'react-icons/fi';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import arrowIcon from '../../assets/images/arrow.png';
import Footer from '../../components/Footer';
import Statement from './Activity';

const Pix = () => {
  const navigate = useNavigate();
  const {user, getCurrentUser} =  useAuth();
  const wallet = user?.wallet || 0;

  const [key, setKey] = useState('');
  const [generatedKey, setGeneratedKey] = useState('');
  const [value, setValue] = useState('');

  const handleNewPayment = async () => {
    //const {data} = await newObjective();

    /*if (data.copyPasteKey) {
      setGeneratedKey(data.copyPasteKey);
    }*/
  }

  const handlePayPix = async () => {
    try {
      //const {data} = await pay(key);

      /*if(data.msg) {
        alert(data.msg)
        return
      }*/

      handleToHome();
      
    } catch (e) {
      console.log(e);
      alert('Não foi possivel fazer o pagamento');
    }
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  if(!user) {
    return null;
  }

  const handleToHome = () => {
    navigate('/home');
  }

  return (
    <HomeBackground>
      <Header />
      <InlineContainer>
        <a href="#" onClick={handleToHome}>
          <FiArrowLeft size={25} color='888'/>
          <span>   Voltar para o Inicio</span> 
        </a>
      </InlineContainer>
      <BodyContainer>
        <div>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Saldo Atual</h2>
            </InlineTitle>
            <InlineContainer>
              <h3 className="wallet">
                {wallet.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
              </h3>
            </InlineContainer>
          </Card>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Receber PIX</h2>
            </InlineTitle>
            <InlineContainer>
              <Input style={{flex: 1}} value={value} onChange={e => setValue(e.target.value)}/>
              <Button onClick={handleNewPayment}>Gerar código</Button>
            </InlineContainer>
             {generatedKey && (
               <>
                <p className="primary-color">Pix copia e cola:</p>
                <p className="primary-color">{generatedKey}</p>
               </> 
             )}                               
          </Card>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Pagar PIX</h2>
            </InlineTitle>
            <InlineContainer>
              <Input style={{flex: 1}} value={key} onChange={e => setKey(e.target.value)} placeholder='Insira a chave do pix'/>
              <Button onClick={handlePayPix}>Pagar PIX</Button>
            </InlineContainer>
          </Card>
          <Statement />
        </div>
      </BodyContainer>
    </HomeBackground>
  )
}

export default Pix