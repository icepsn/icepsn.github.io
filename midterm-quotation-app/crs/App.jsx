import React from "react";
import Table from "react-bootstrap/Table";

const DataTable = ({ data, onDelete }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Accessory</th>
          <th>Quantity</th>
          <th>Price Per Unit</th>
          <th>Discount</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price.toFixed(2)}</td>
            <td>{(item.price * 0.10).toFixed(2)}</td>
            <td>{(item.price * item.quantity - item.price * 0.10).toFixed(2)}</td>
            <td>
              <button className="btn btn-danger btn-xs" onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4" className="text-right">Subtotal</td>
          <td>{data.reduce((sum, item) => sum + (item.price * item.quantity - item.price * 0.10), 0).toFixed(2)}</td>
          <td></td>
        </tr>
        <tr>
          <td colSpan="4" className="text-right">Total Discount</td>
          <td>{data.reduce((sum, item) => sum + item.price * 0.10, 0).toFixed(2)}</td>
          <td></td>
        </tr>
        <tr>
          <td colSpan="4" className="text-right">VAT (7%)</td>
          <td>{(data.reduce((sum, item) => sum + (item.price * item.quantity - item.price * 0.10), 0) * 0.07).toFixed(2)}</td>
          <td></td>
        </tr>
        <tr>
          <td colSpan="4" className="text-right">Total Due</td>
          <td>{(data.reduce((sum, item) => sum + (item.price * item.quantity - item.price * 0.10), 0) * 1.07).toFixed(2)}</td>
          <td></td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default DataTable;
