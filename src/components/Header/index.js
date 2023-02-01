
import { useContext } from 'react';
import './header.css';
import { AuthContext } from '../../contexts/auth';
import avatar from '../../assets/avatar.png'
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiMap} from 'react-icons/fi'

export default function Header(){
    const { user } = useContext(AuthContext);

    return(
        <div className='headerbar'>
            <div>
                <img src={user.avatarUrl === null ? avatar : user.avatarUrl } alt='Foto avatar'/>
            </div>

            <Link to='/dashboard'>
                <FiHome color='#BDECB6' size={24} />
                Home
            </Link>
            <Link to='/profile'>
                <FiUser color='#BDECB6' size={24} />
                Perfil
            </Link>
            <Link to='/farms'>
                <FiMap color='#BDECB6' size={24} />
                Fazendas
            </Link>
        </div>
    )
}