import React from 'react';
import Good from './Task2/GoodsCard';
import './goods.css';

const goods = [
    {
        id: 0,
        name:"Цитрамон",
        price: 21,
    },
    {
        id: 1,
        name:"Евказолін",
        price: 87,
    },
    {
        id: 2,
        name:"Парацетамол",
        price: 20,
    },
    {
        id: 3,
        name:"Фервекс",
        price:180,
    },
    {
        id: 4,
        name:"Нокспрей",
        price:80,
    },
    {
        id: 5,
        name:"Септифрил",
        price:28,
    },
]


function Task2() {
    return(
        <>
        <h1>Task 2</h1>
        <div id='goods'>
        {
            goods.map((good) => {
                return (
                    <Good id={good.id} name={good.name} price={good.price} key={good.id} />
                )
            })
        }
        </div>
        </>
    )
};

export default Task2;