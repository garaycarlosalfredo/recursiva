import React, { useState } from 'react';

//Mis componentes

//service
import { axiosGetP4 } from '../../service/fileService'

const P4 = () => {

    const [resList, setResList] = useState([])
    const [viewExtra,setViewExtra] = useState(false)

    console.log(resList)

    const getList = async () => {
        const list = await axiosGetP4()
        console.log('list', list)
        setResList(list)
    }

    const extraData = ()=>{
        setViewExtra(true)
    }

    return (
        <div>
            <button class="btn btn-primary m-2" onClick={() => getList()}>Perdir resultados P4</button>
            {(resList.length<1)?null:<button class="btn btn-success m-3" onClick={() => extraData()}>Ver la cantidad de cada nombre?</button>}
            {(resList.length<1)?
            <div>presione para obtener los resultados</div>
            :
            <div>datos extraidos del archivo csv</div>
            }
            <div class="table-responsive">

                {(resList.length > 0) ?
                    <div class="card">
                        <div class="card-body" id='cardP3'>
                            <table class="table data-table" id='resultTableP3' >
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre</th>
                                        {(viewExtra)?<th scope="col">Veces</th>:null}
                                    </tr>
                                </thead>
                                <tbody>
                                    {resList.map((socio, index) =>
                                        <tr>
                                            <th key={index}>{index + 1}</th>
                                            <td>{socio.name}</td>
                                            {(viewExtra)?<th scope="col">{socio.times}</th>:null}
                                        </tr>
                                    )}

                                </tbody>
                            </table>

                        </div>
                    </div>
                    : null}
            </div>

        </div>
    );
}

export default P4;