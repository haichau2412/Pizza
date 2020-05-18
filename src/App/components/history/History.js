import React from 'react'
import { getOrders } from '../../service/UserServices';
import { useSelector } from 'react-redux';
import { StyledHistory } from './StyledHistory';

function History() {

    const token = useSelector((state) => state.auth.token);
    const [history, setHistory] = React.useState([]);

    React.useEffect(
        () => {
            const fetchData = async () => {
                const data = await getOrders({ token });
                setHistory(data)
            }
            fetchData();
        }, [token]);

    console.log(history);

    return (
        <StyledHistory>

        </StyledHistory>
    )
}

export default History
