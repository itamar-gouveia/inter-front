import { HeaderContainer,HeaderWrapper,UserInfo} from './styles';
import logo from '../../assets/images/logo-svg.svg';
import {useNavigate } from 'react-router-dom';
import UserCircle from '../UserCircle';


const Header = () => {
    const navigate = useNavigate();

    const handleLogoff = ()=>{
        navigate('/');
    }

    return(
            <HeaderContainer>
                <HeaderWrapper>
                        <img src={logo} width={172} height={61} alt="logo"/>
                        <UserInfo>
                           <UserCircle initials="IG"/>
                            <div>
                                <p>Olá. <span className="primary-color font-bold" >Itamar</span></p>
                                <strong>2131133</strong><br/>
                                <a href="#" onClick={handleLogoff}>Sair</a>
                            </div>
                        </UserInfo>
                </HeaderWrapper>
            </HeaderContainer>
        
    )
}

export default Header;