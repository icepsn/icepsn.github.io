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


// import { useState, useRef } from "react";
// import accessoryData from "./accessory.json";
// import DataTable from "./components/QuotationTable";
// import Button from "react-bootstrap/Button";
// import { Container, Row, Col } from "react-bootstrap";

// function App() {


//   const [selectedItems, setSelectedItems] = useState([]);

//   const quantityRef = useRef();
//   const productRef = useRef();
//   const [price, setPrice] = useState(accessoryData[0].price);

//   const handleSubmit = (e) => {
//     const productId = parseInt(productRef.current.value);
//     const product = accessoryData.find(
//       (accessory) => accessory.id === productId
//     );
//     const order = {

//       ...product,
//       quantity: quantityRef.current.value,
//     };
//     console.table(order);
//     selectedItems.push(order); 
//     setSelectedItems([...selectedItems]); 
//   };

//   const updatePrice = (e) => {
//     const productId = parseInt(e.target.value); 
//     const product = accessoryData.find(
//       (accessory) => accessory.id === productId
//     );
//     setPrice(product.price);
//   };



//   return (
//     <>
//       <Container>
//         <Row>
//           <Col xs={2}> Product: </Col>
//           <Col xs={10}>
//             <select ref={productRef} onChange={updatePrice}>
//               {accessoryData.map((accessory, index) => (
//                 <option key={index} value={accessory.id}>
//                   {accessory.name}
//                 </option>
//               ))}
//             </select>
//           </Col>
//           <Col> Price: </Col>
//           <Col> {price} </Col>

//           <Col> Quantity: </Col>
//           <Col>
//             <input type="number" ref={quantityRef} defaultValue={1} />{" "}
//           </Col>
//         </Row>
//       </Container>
//       <Button onClick={handleSubmit}>Submit</Button>

//       <Container>
//         <DataTable data={selectedItems} />
//       </Container>
//       {/* <div className="container">
//         <div className="row">
//           <div className="col-2"> Product: </div>
//           <div className="col-10">
//             <select ref={productRef} onChange={updatePrice}>
//               {accessoryData.map((accessory, index) => (
//                 <option key={index} value={accessory.id}>
//                   {accessory.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="col-2"> Price: </div>
//           <div className="col-10"> {price} </div>

//           <div className="col-2"> Quantity: </div>
//           <div className="col-10">
//             <input type="number" ref={quantityRef} defaultValue={1} />{" "}
//           </div>
//         </div>
//       </div>
//       <Button onClick={handleSubmit}>Submit</Button>

//       <DataTable data={selectedItems} />  */}
//     </>
//   );
// }

// export default App;
