import React, { useState } from 'react';

//Mis componentes
import Points from './Points';
import Footer from '../footer/Footer'
//Service
import { axiosSendFile } from '../../service/fileService'

const Main = () => {
    const [fileChallenge, setFileChallenge] = useState(null)
    const [fileOk, setFileOk] = useState(false)
    const [alertFileOk, setAlertFileOk] = useState(false)

    const uploadFile = e => {
        console.log('Archivo ', e.target.files[0])
        let uploadFile = e.target.files[0]
        setFileChallenge(uploadFile)
    }

    const sendFile = async () => {
        event.preventDefault()
        const res = await axiosSendFile(fileChallenge)
        console.log(res)
        if (res.status !== 200) {

        } else {
            setFileOk(true)
            setAlertFileOk(true)
            setTimeout(() => { setAlertFileOk(false) }, 2000);
        }
    }

    return (
        <div>
                <div className="d-flex justify-content-center">
                    <form>
                        <div class="card" id='cardFilePicker'>
                            <div class="card-body">
                                <legend>Carga de CSV</legend>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Seleccione csv para analizar</label>
                                    <input className="form-control" type="file" name='file' id="file" onChange={(e) => uploadFile(e)} />
                                </div>
                                <button class="btn btn-primary" onClick={() => sendFile()} disabled={fileChallenge === null} >Enviar</button>

                            </div>
                        </div>
                    </form>
                </div>

                {(alertFileOk) ?
                    <div className="d-flex justify-content-center">
                        <div class="alert alert-success alert-dismissible fade show" role="alert" id='alertFileOK'>
                            Archivo correctamente cargado <strong>{fileChallenge.name}</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                    : null}



            {(fileOk) ? <Points></Points> : null}

            <Footer/>
        </div>
    );
}

export default Main;