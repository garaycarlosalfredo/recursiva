import React from 'react';
//Mis componentes
import P1 from '../lists/P1';
import P2 from '../lists/P2';
import P3 from '../lists/P3';
import P4 from '../lists/P4';
import P5 from '../lists/P5';
const Main = () => {

    return (
        <div className='row mt-2'>

            <div class="card">
                <div class="card-body">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    #1 Cantidad total de personas registradas.
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <code>Punto 1</code>- total de personas registradas
                                    <P1></P1>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    #2 El promedio de edad de los socios de Racing.
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <code>Punto 2</code>- promedio de edad de los hinchas de racing
                                    <P2></P2>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    #3 Un listado con las 100 primeras personas casadas, con estudios cada persona, mostrar: nombre, edad y equipo.
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <code>Punto 3</code>- Listado de las primeras 100 personas casadas, con estudios universitarios ordenados por edad.
                                    <P3></P3>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                    #4 Un listado con los 5 nombres más comunes entre los hinchas de River.
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <code>Punto 4</code>- Un listado con los 5 nombres más comunes entre los hinchas de River.
                                    <P4></P4>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                    #5 Resumen de equipos
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <code>Punto 5</code>- Listado, ordenado de mayor a menor según la cantidad de socios, que enumere, junto con cada equipo, el promedio de edad de sus socios, la menor edad registrada y la mayor edad registrada.
                                    <P5></P5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;