import React, { Component } from 'react';
import "./ProductTable.scss";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default class ProductTable extends Component {
    render() {
        return (
            <div className="ProductTable">

                <div className="ProductTable-columns">
                    <p className="ProductTable__column">*</p>
                    <p className="ProductTable__column">ID</p>
                    <p className="ProductTable__column">Price</p>
                    <p className="ProductTable__column">Quantity</p>
                    <p className="ProductTable__column">Total   </p>
                </div>


                <div className="ProductTable-columns prod_rows">
                    <p className="ProductTable__column c">Name</p>
                    <p className="ProductTable__column prod_row">ID</p>
                    <p className="ProductTable__column prod_row">Price</p>
                    <p className="ProductTable__column prod_row">Quantity</p>
                    <p className="ProductTable__column prod_rows">Total   </p>

                </div>

                <div className="ProductTable-columns prod_rows">
                    <p className="ProductTable__column prod_row">Name</p>
                    <p className="ProductTable__column prod_row">ID</p>
                    <p className="ProductTable__column prod_row">Price</p>
                    <p className="ProductTable__column prod_row">Quantity</p>
                    <p className="ProductTable__column prod_rows">Total   </p>

                </div>

                <div className="ProductTable-columns prod_rows">
                    <p className="ProductTable__column c">Name</p>
                    <p className="ProductTable__column prod_row">ID</p>
                    <p className="ProductTable__column prod_row">Price</p>
                    <p className="ProductTable__column prod_row">Quantity</p>
                    <p className="ProductTable__column prod_rows">Total   </p>

                </div>


                <div className="ProductTable-columns prod_rows">
                <p className="ProductTable__column c">Name</p>
                <p className="ProductTable__column prod_row">ID</p>
                <p className="ProductTable__column prod_row">Price</p>
                <p className="ProductTable__column prod_row">Quantity</p>
                <p className="ProductTable__column prod_rows">Total   </p>

            </div>



            <div className="ProductTable-columns prod_rows">
            <p className="ProductTable__column c">Name</p>
            <p className="ProductTable__column prod_row">ID</p>
            <p className="ProductTable__column prod_row">Price</p>
            <p className="ProductTable__column prod_row">Quantity</p>
            <p className="ProductTable__column prod_rows">Total   </p>

        </div>



            </div>
        )
    }
}
