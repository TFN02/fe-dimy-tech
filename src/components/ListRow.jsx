import React from "react";

const ListRow = ({ index, row, onInputChange, onDeleteRow }) => {
    return (
        <div key={index} className="list-row">
            <div className="list-colum">
                <label htmlFor="productName" className="list-label">Product Name</label>
                <input
                className="list-input"
                    type="text"
                    placeholder="Product Name"
                    value={row.productName}
                    onChange={(e) => onInputChange(index, "productName", e.target.value)}
                />
            </div>
            <div className="list-colum">
                <label htmlFor="productPrice" className="list-label">Product Price</label>
                <input
                className="list-input"
                    type="number"
                    placeholder="Product Price"
                    value={row.productPrice}
                    onChange={(e) => onInputChange(index, "productPrice", parseFloat(e.target.value))}
                />
            </div>
            <div className="list-colum">
                <label htmlFor="quantity" className="list-label">Quantity</label>
                <input
                className="list-input"
                    type="number"
                    placeholder="Quantity"
                    value={row.quantity}
                    onChange={(e) => onInputChange(index, "quantity", parseInt(e.target.value))}
                    min="1"
                />
            </div>
            <div className="list-colum">
                <label htmlFor="total" className="list-label">Total</label>
                <input
                    className="list-input"
                    type="number"
                    value={row.total}
                />
            </div>
            <div className="list-action">
            {onDeleteRow && <button className="list-button" onClick={() => onDeleteRow(index)}>Delete</button>}
            </div>
        </div>
    );
};

export default ListRow;
