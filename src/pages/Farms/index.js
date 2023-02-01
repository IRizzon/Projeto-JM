import { useState } from 'react';
import './farms.css';
import Title from '../../components/Title';
import Header from '../../components/Header';
import firebase from '../../services/fbConect';
import { FiMap } from 'react-icons/fi';
import { toast } from 'react-toastify';


export default function Farms(){
    const [proprietario, setProprietario] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    async function handleAdd(e){
        e.preventDefault();

        if(proprietario !== '' && cidade !== '' && estado !== ''){
            await firebase.firestore().collection('farms')
            .add({
                proprietario: proprietario,
                cidade: cidade,
                estado: estado
            })
            .then(()=>{
                setProprietario('');
                setCidade('');
                setEstado('');
                toast.info('Fazenda cadastrada com sucesso!');
            })
            .catch((error)=>{
                console.log(error);
                toast.error('Erro ao cadastrar essa empresa.');
            })
        }else{
            toast.error('Preencha todos os campos!')
        }
    }
    return(
        <div>
            <Header/>
            
            <div className='content'>
                <Title name='Fazendas'>
                    <FiMap size={25} />
                </Title>

                <div className='container'>
                    <form className='form-profile customers' onSubmit={handleAdd}>
                        <label>Proprietário</label>
                        <input type='text' value={proprietario} onChange={ (e) => setProprietario(e.target.value) } />

                        <label>Cidade</label>
                        <input type='text' value={cidade} onChange={ (e) => setCidade(e.target.value) } />

                        <label>Estado</label>
                        <input type='text' value={estado} onChange={ (e) => setEstado(e.target.value) } />

                        <button type='submit'>Cadastrar</button>

                    </form>
                </div>
            </div>
        </div>
    )
}