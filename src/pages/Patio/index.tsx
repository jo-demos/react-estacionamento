import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css'

class Carro {
    id: number;
    placa: string;
    cor: string;
    marca: string;
    modelo: string;
    dataHoraEntrada?: Date;
    dataHoraSaida?: Date;
    status: boolean;

    constructor() {
        this.id = 0;
        this.placa = '';
        this.cor = '';
        this.marca = '';
        this.modelo = '';
        this.status = false;
    }
}

export default function Patio() {
    const [carros, setCarros] = useState<Carro[]>([]);
    
    useEffect(() => {
        fetch(api('carrosEstacionados'))
            .then(res => res.json())
            .then(res => {
                setCarros(res);
            });
    }, []);

    return (
        <div className="container-patio">
            <h4>Carros estacionados</h4>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Placa</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Cor</th>
                        <th scope="col">Data/Hora entrada</th>
                        <th scope="col">#</th>
                    </tr>
                </thead>
                <tbody>
                    {carros.map(item => 
                        <tr>
                            <td>{item.placa}</td>
                            <td>{item.modelo}</td>
                            <td>{item.marca}</td>
                            <td>{item.cor}</td>
                            <td>{item.dataHoraEntrada}</td>
                            <td><button className="btn btn-primary">Saída</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}