import React, { useState } from 'react';

//Mis componentes

//service
import { axiosGetPartners } from '../../service/fileService'

const P3LIST = () => {

    const [p3List, setP3List] = useState([])
    console.log(p3List)

    const getList = async () => {
        const list = await axiosGetPartners()
        console.log('list', list)
        setP3List(list.hundredMarried.list)
    }

    return (
        <div>
            <button class="btn btn-primary m-2" onClick={() => getList()}>Perdir resultados P3</button>
            {(p3List.length<1)?
            <div>presione para obtener los resultados</div>
            :
            <div>datos extraidos del archivo csv</div>
            }
            <div class="table-responsive">

                {(p3List.length > 0) ?
                    <div class="card">
                        <div class="card-body" id='cardP3'>
                            <table class="table data-table" id='resultTableP3' >
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Edad</th>
                                        <th scope="col">Equipo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {p3List.map((socio, index) =>
                                        <tr>
                                            <th key={index}>{index + 1}</th>
                                            <td>{socio.name}</td>
                                            <td>{socio.age}</td>
                                            <td>{socio.team}</td>
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

export default P3LIST;