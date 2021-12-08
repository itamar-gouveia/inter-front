
import {useNavigate, Link} from 'react-router-dom';
import background from '../../assets/images/header.jpg';
import Card from '../../components/Card';
import logo from '../../assets/images/logo-svg.svg';
import Input from '../../components/Input';
import {
    Wrapper,
    Background,
    InputContainer,
    ButtonContainer
} from './styles';
import Button from '../../components/Button';

const Signin= ()=>{

    const navigate = useNavigate();

    const handleToSignin = () =>{
        navigate('/dashboard');
    }
    
    return(
       <Wrapper>
           <Background image={background}/>
               <Card width="403px">
                    <img src={logo} width={172} height={61} alt="logo"/>
                    <InputContainer>
                        <Input placeholder="email"/>
                        <Input placeholder="senha" type="password"/>
                    </InputContainer>
                    <ButtonContainer>
                        <Button type="button" onClick={handleToSignin}>Entrar</Button>
                        <p>Ainda não é cadastrado?<Link to="/signup"> Cadastre-se</Link></p>
                    </ButtonContainer>
           
           </Card>
       </Wrapper>

    )
}

export default Signin;