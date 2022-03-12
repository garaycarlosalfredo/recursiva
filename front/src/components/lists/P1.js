import React, { useEffect, useState } from 'react';

//Mis componentes

//service
import {axiosGetP1} from '../../service/fileService'

const P1= () => {
  
    const [p2value, setP2value] = useState(null) 
    console.log(p2value)

    const getList = async ()=>{
        const value = await axiosGetP1()
        console.log('list',value)
        setP2value(value)
    }

    return ( 
        <div>
        
            <div>
                <button class="btn btn-primary m-2" onClick={()=>getList()}>Pedir resultado P1</button>
            </div>
            <div>
                {(p2value)?<p> El total de registros en la base de datos es = <strong>{p2value}</strong> </p>:null}
            </div>
           
        </div>
     );
}
 
export default P1;