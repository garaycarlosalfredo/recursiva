import React, { useState } from 'react';

//Mis componentes

//service
import { axiosGetP5 } from '../../service/fileService'

const P4 = () => {

    const [resList, setResList] = useState([])

    console.log(resList)

    const getList = async () => {
        const list = await axiosGetP5()
        console.log('list', list)
        setResList(list)
    }

    return (
        <div>
            <button class="btn btn-primary m-2" onClick={() => getList()}>Perdir resultados P5</button>
            {(resList.length<1)?
            <div>presione para obtener los resultados</div>
            :
            <div>datos extraidos del archivo csv</div>
            }
            <div class="table-responsive">

                {(resList.length > 0) ?
                    <div class="card">
                        <div class="card-body">
                            <table class="table data-table" id='resultTableP3' >
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Equipo</th>
                                        <th scope="col">Cantidad de socios</th>
                                        <th scope="col">Promedio de edades</th>
                                        <th scope="col">Edad máxima registrada</th>
                                        <th scope="col">Edad mínima registrada</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resList.map((team, index) =>
                                        <tr>
                                            <th key={index}>{index + 1}</th>
                                            <td>{team.team}</td>
                                            <td>{team.partners}</td>
                                            <td>{team.avgAge}</td>
                                            <td>{team.maxAge}</td>
                                            <td>{team.minAge}</td>
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