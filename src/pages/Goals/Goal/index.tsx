import { useState, useEffect } from 'react';

import { StatementItemContainer, StatementItemImage, StatementItemInfo, StatementContainer } from './styles';
import { FiDollarSign } from 'react-icons/fi'
import { format } from 'date-fns';

import useAuth from '../../../hooks/userAuth';
import { objectives } from '../../../controllers/objective';

interface StatementItem {
    user: {
        firstname: string,
        lastName: string
    },
    value: number,
    type: 'paid' | 'received',
    updatedAt: Date
}

const StatementItem = ({user, value, type, updatedAt}: StatementItem) => {

    return (
        <StatementItemContainer>
            <StatementItemImage type={type}>
                <FiDollarSign size={24}/>
            </StatementItemImage>
            <StatementItemInfo>
                <p className="primary-color">
                    {value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </p>
                <p className="">{type === 'paid' ? `Pago a `: `Recebido de`} <strong>{user.firstname} {user.lastName}</strong></p>
                <p className="">{format(new Date(updatedAt), "dd/MM/yyyy 'às' HH:mm'h'")}</p>
            </StatementItemInfo>
        </StatementItemContainer>
    )
}

const Statement = () => {
    const [statements, setStatement] = useState<StatementItem[]>([]);

    const getAllTransactions = async () => {
        const {data} = await objectives();
        setStatement(data.transactions);
    }

    useEffect(() => {
        getAllTransactions();
    }, [])

    return (
        <StatementContainer>
            {statements.length > 0 && statements?.map(statement => <StatementItem {...statement}/>)}
        </StatementContainer>
    )
}

export default Statement;