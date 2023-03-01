import './Links.css';
import {useState , useEffect} from 'react';
import { FiArrowLeft, FiLink , FiTrash} from 'react-icons/fi';
import {Link} from 'react-router-dom'
import { getLinksSave, deleteLink } from '../../componets/services/store.Links'
import LinkItem from '../../componets/menu/Linkitem';
export default function Links(){
  const [myLinks , setMyLinks] = useState([]);
  const[data, setData] = useState({}); 
  const[shoModal , setShowModal]  = useState(false);
  const[listavazia ,SetlistaVazia] = useState(false)

  useEffect (()=>{
    async function getLinks(){
      const result = await  getLinksSave('@encurtaLink')
      if(result.length === 0){
       SetlistaVazia(true);
      }
      setMyLinks(result);

    }
  getLinks();
},[])
function  handleOpenLink(Link){
 setData(Link);
 setShowModal(true);
}
 async function handleDelete(id){
  const result = await deleteLink(myLinks, id);
  if( result.length === 0){
    SetlistaVazia(true);
  }
  setMyLinks(result);

   
}
    return(
      <div className='links-container' >
            <div className='links-header'>
              <Link to="/">
              <FiArrowLeft size={38} color="#FFF"/>
              </Link>
             
              <h1> Meus Links</h1>
              </div>
              {listavazia && (
                <div className='links-item'> 
                    <h2 className='listavazia'> lista vazia!</h2>
                </div>
              ) }
           
      { listavazia && (
        <div className="link-item"
         
        >
           </div>
      
      )}

      {myLinks.map(Link=> 
         <div key={Link.id} className='links-item'>
         <button className='link' onClick={ ()=> handleOpenLink(Link)}>
           <FiLink size={18} color="#FFF" />
           {Link.long_url}
         </button>

         <button className='link-delete' onClick={ ()=> handleDelete(Link.id)}>
           <FiTrash  size={24} color="#FF5454"/>
         </button>
         { shoModal && (
          <LinkItem 
           closeModal= { ()=> setShowModal(false)}
           content={data}
          />
         )}
     </div>)}
          
              
            
            
      </div>
    )
  }


