
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
} from './styles'
import Button from '../../components/Button';

const Signup= ()=>{

    const navigate = useNavigate();

    const handleToSignup = () =>{
        navigate('/dashboard');
    }
    
    return(
       <Wrapper>
           <Background image={background}/>
               <Card width="403px">
                    <img src={logo} width={172} height={61} alt="logo"/>
                    <InputContainer>
                        <Input placeholder="nome"/>
                        <Input placeholder="sobrenome"/>
                        <Input placeholder="email"/>
                        <Input placeholder="senha" type="password"/>
                        <Input placeholder="confirmar senha" type="password"/>
                    </InputContainer>
                    <ButtonContainer>
                        <Button type="button" onClick={handleToSignup}>Entrar</Button>
                        <p>Já tem um conta?<Link to="/"> Entre já</Link></p>
                    </ButtonContainer>
           
           </Card>
       </Wrapper>

    )
}

export default Signup;