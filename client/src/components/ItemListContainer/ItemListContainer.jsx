import React from 'react';
import style from './ItemListContainer.module.css';

const ItemListContainer = () => {
    const wineSales = [
        {
            name: "Catena Zapata",
            grape: "Malbec",
            price: 1500,
            sale: true,
            image: "https://www.mercadodevinos.com.ar/wp-content/uploads/2017/01/vino-catena-zapata-malbec-argentino.jpg"
        },
        {
            name: "Luigi Bosca",
            grape: "Malbec",
            price: 1700,
            sale: false,
            image: "https://www.mercadodevinos.com.ar/wp-content/uploads/2016/12/luigi-bosca-malbec.jpg"
        },
        {
            name: "Rutini",
            grape: "Cabernet Sauvignon",
            price: 1700,
            sale: false,
            image: "https://http2.mlstatic.com/D_NQ_NP_999120-MLA52268814829_112022-O.webp"
        },
        {
            name: "Catena Zapata",
            grape: "Syrah",
            price: 1500,
            sale: false,
            image: "https://tonelprivado.vteximg.com.br/arquivos/ids/175364-1000-1000/112248.jpg?v=636384134352170000"
        },
        {
            name: "Luigi Bosca",
            grape: "Merlot",
            price: 1700,
            sale: true,
            image: "https://www.romawinecj.com.ar/wp-content/uploads/2019/08/luigi_merlot.jpg"
        },
        {
            name: "Rutini",
            grape: "Cabernet Franc",
            price: 1700,
            sale: true,
            image: "https://rutini.vteximg.com.br/arquivos/ids/156306-1400-1600/Rutini-Cabernet-Franc.jpg?v=637765072225130000"
        }
    ];

    return (
        <div className={style.cardContainer}>
            {wineSales.map((wine, index) => (
                <div key={index} className={style.card}>
                    <img src={wine.image} alt={wine.name} />
                    <h2>{wine.name}</h2>
                    <p>Grape: {wine.grape}</p>
                    <p>Price: ${wine.price}</p>
                    {wine.sale ? <p>Sale: Yes</p> : <p>Sale: No</p>}
                </div>
            ))}
        </div>
    );
};

export default ItemListContainer;
