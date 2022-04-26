import React, { useEffect, useState } from 'react';
import Card from './card';
import '../index.css';

const CardList = () => {

    const [info, setInfo] = useState([]);
    const [mode, setMode] = useState('online');

    useEffect(() => {
        const base_url = 'https://api.thedogapi.com/v1/breeds?limit=20'
        fetch(base_url).then((reponse) => {
            reponse.json().then((result) => {
                console.log(result)
                setInfo(result)
                localStorage.setItem("dogs", JSON.stringify(result));
      
            })
        }).catch(err => {
            setMode('off');
            let collection = localStorage.getItem('dogs');
            setInfo(JSON.parse(collection));
        })
        
    }, []);


    return (
        <main>
            <div>
                {
                    mode === 'off' ?
                    <div className='container-fluid advertencia p-3 mb-3'> Estas usando la app en modo sin conexión</div>:null
                }
            </div>

            <div className='container'>
                <div className='row '>
                    {info.map(noun => (<div className='col d-flex justify-content-center' key={noun.id}>
                        <Card key={noun.id} {...noun} />
                    </div>))}
                </div>
            </div>
        </main>
    )
}

export default CardList;