import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from './services/getCard/action';

const GettingData = () => {
    const dispatch = useDispatch();
    const dataGetted = useSelector(state => state.dataCard.data);
    const param = 'acesstoken';

    useEffect(() => {
        dispatch(getAllData(param));
    }, [dataGetted])
    return ( 
        <div>
            <p>his</p>
        </div>
     );
}
 
export default GettingData;