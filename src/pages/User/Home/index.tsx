import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { HomeBackground, BodyContainer, ButtonContainer, InlineContainer, InlineTitle, Greetings, Wallet } from './styles';
import Header from '../../../components/Header';

import useAuth from '../../../hooks/userAuth';

import { FiGithub } from "react-icons/fi";

import pix from '../../assets/images/pix.png';
import extrato from '../../assets/images/extrato-bancario.png';
import Card from '../../../components/Card';
import Footer from '../../../components/Footer';


const Home = () => {
  const navigate = useNavigate();

  const handleToPix = () => {
    navigate('/pix');
  }

  const handleToExtrato = () => {
    navigate('/extrato');
  }
  const {user, getCurrentUser} =  useAuth();

  useEffect(() => {
    getCurrentUser()
  }, [])

  if(!user) {
    return null;
  }

  return (
    <HomeBackground>
      <Header />
      <Greetings>
        <h3 className='greetings'>Bem vindo(a) {user.firstName} {user.lastName}</h3>
      </Greetings>
      <BodyContainer>
         <Card noShadow width="90%">
         </Card>
         <Card width='90%' noShadow>
         </Card>
      </BodyContainer>
      <Footer />
    </HomeBackground>
  )
}

export default Home