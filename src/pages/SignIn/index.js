
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import './signin.css'
import logo from '../../assets/logo.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e){
    e.preventDefault();
    
    if(email !== '' && password !== ''){
      signIn(email, password)
    }
  }

  return (
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src={logo} alt='Sistema Logo' />
        </div>

        <form onSubmit={handleSubmit}>
          <br></br>
          <h1>Entrar</h1>
          <br></br>
          <br></br>
          <input type='text' placeholder='Digite seu e-mail' value={email} onChange={ (e) => setEmail(e.target.value)} />
          <input type='password' placeholder='**************' value={password} onChange={ (e) => setPassword(e.target.value)} />
          <button type='submit'>{loadingAuth ? 'Carregando...' : 'Acessar'}</button> 
        </form>

        <Link to='/register'>Criar uma conta</Link>
      </div>
    </div>
  );
}
  

  