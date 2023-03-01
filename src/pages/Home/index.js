import {FiLink} from 'react-icons/fi';
import './Home.css';
import  Menu from '../../componets/menu'
import { useState} from 'react'
import LinkItem from '../../componets/menu/Linkitem';
import api  from '../../componets/services/api';
import {  saveLink}  from '../../componets/services/store.Links'

export default function Home(){
  const [link , setLink]  = useState ('');
  const [data, setData] = useState({});
  const [showModal , setShowModal] = useState(false);
  
  async function handleShortLink(){
     try{
        const response = await api.post('/shorten', {
          long_url: link
        })
        setData(response.data);
        setShowModal(true);
        saveLink('@encurtaLink', response.data);
        setLink('');


     }catch{
       alert("opa deu algo errado");
       setLink('');
     }

  }
  
    return(
      <div className="container-home" >
        
          <div className="logo">
            <img src="mensagem.jpg" alt="sujeito link" width={180} ></img>
            <h1> Sujeitolink</h1>
            <span>Cole seu link para encurtar 👇 </span>

          </div>
          <div className="area-input">
              <div>
                <FiLink size={24} color="#FFF"/>
                <input 
                  placeholder='Cole seu link aqui'
                  value={link}
                  onChange={ (e) => setLink(e.target.value)}
                />
              </div>
              <button onClick={handleShortLink} > Gerar Link.</button>
             
          </div>
          <Menu/>
          {showModal && (    // set o showModal for true ele exibir o modal caso false nao
             <LinkItem 
              closeModal={ ()=> setShowModal(false)}
              content={data}
             />
          )}
      </div>

          
    )
  }

