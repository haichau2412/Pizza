import React from 'react'
import { getOrders } from '../../service/UserServices';
import { useSelector } from 'react-redux';
import { StyledHistory } from './StyledHistory';
import Item from './Item';

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



    const renderHistory = React.useMemo(() => {
        let items = [];
        for (let i = history.length - 1; i >= 0; i--) {
            items.push(history[i])
        }
        return items.map((order, index) => {
            return <Item order={order} key={index}></Item>
        })
    }, [history]);


    return (
        <StyledHistory>
            {renderHistory}
        </StyledHistory>
    )
}

export default History
