import React,{useContext,useEffect} from 'react';
import {FormContext} from '../context/formContext'

export default function PetsList(){
    const {pets} = useContext(FormContext);
    return(
        <div className="card-deck d-flex flex-wrap">
            { Array.isArray(pets) && pets.length ? (pets.map((pet) => {
                    return <div key={pet.petName} className="card">
                        <div className="card-body">
                            <h5 className="card-title">{pet.petName}</h5>
                            <p className="card-text">Sexo: {pet.petSex}</p>
                            <p className="card-text">Edad: {pet.petAge}</p>
                            <p className="card-text">Tipo: {pet.petType}</p>
                            <p className="card-text">Servicio: {pet.petService}</p>
                        </div>
                    </div>
                }))
                : (<div className='card-body text-center'>
                    <h3 className='text-danger'>No hay mascotas aún.</h3>
                   </div>)
            }
        </div>
    );
}