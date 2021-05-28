import React, {useContext} from "react";
import DataContext from "./dataContext";
import {numberFormat, dateFormat, nullCheck} from './helpers';

const SectorList = () => {
    const sectors = useContext(DataContext);

    return (
        <div className={'sector-list'}>
            <ul>
                {sectors.map((item, index) => {
                    return <li key={item.id} className={'thumbnail'}>
                        <div className={'sector-item'}>
                            <p><strong>Sector: </strong>{nullCheck(item.Sector, '-', ()=>item.Sector)}</p>
                            <p><strong>Exposure USD: </strong>{numberFormat(item.usd_exposure)}</p>
                            <p><strong>Date: </strong>{dateFormat(item.date)}</p>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default SectorList;