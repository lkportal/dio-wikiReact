/* eslint-disable jsx-a11y/alt-text */
import Imglogo from '../assents/logo1.png'
import {Conteiner} from './style'
import Input from '../componenets/input';
import Itemrepo from '../componenets/itemRepo';
import { useState } from 'react';
import Button from '../componenets/button';
import { api } from '../services/api';
function App() {
  const [currentRepo,setCurrentRepo] = useState('')
  const [resposta, setResposta] = useState([])

  const buscar = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)
    if(data.id){
      setResposta( prev => [...prev, data])
    }
  }
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <Conteiner>
    
    <img src= {Imglogo} width={72} height={72} />
    <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
    <Button onclick={buscar} />
     {resposta.map(repos => <Itemrepo repo={repos} />)}
    <Itemrepo />
    </Conteiner >
  );
}

export default App;
