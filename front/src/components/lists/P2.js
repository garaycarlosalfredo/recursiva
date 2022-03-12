import React, { useEffect, useState } from 'react';

//Mis componentes

//service
import {axiosGetP2} from '../../service/fileService'

const P2= () => {
  
    const [p2value, setP2value] = useState(null) 
    console.log(p2value)

    const getList = async ()=>{
        const value = await axiosGetP2()
        console.log('list',value)
        setP2value(value)
    }
    return ( 
        <div>
        
            <div>
                <button class="btn btn-primary  m-2" onClick={()=>getList()}>Pedir resultado P2</button>
            </div>
            <div>
                {(p2value)?<p> Promedio de edad de hinchas de racing = <strong>{p2value}</strong> </p>:null}
            </div>
           
        </div>
     );
}
 
export default P2;