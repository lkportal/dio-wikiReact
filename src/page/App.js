/* eslint-disable jsx-a11y/alt-text */
import Imglogo from '../assents/logo1.png'
import {Conteiner} from './style'
import Input from '../componenets/input';
import Itemrepo from '../componenets/itemRepo';
function App() {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <Conteiner>
    
    <img src= {Imglogo} width={72} height={72} />
    <Input />
    <Itemrepo />
    </Conteiner >
  );
}

export default App;
