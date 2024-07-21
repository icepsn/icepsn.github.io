import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)

  const calculateVAT = () => {
    const grossPrice = price - discount;
    const vat = grossPrice * 0.07;
    return {
      grossPrice: Math.round(grossPrice * 100) / 100,
      vat: Math.round(vat * 100) / 100,
    };
  }

  const handlePriceChange = (e) => {
    const newPrice = parseFloat(e.target.value)
    setPrice(newPrice);
  }

  const handleDiscountChange = (e) => {
    const newDiscount = parseFloat(e.target.value)
    setDiscount(newDiscount)
  }

  const { grossPrice, vat } = calculateVAT()

  return (
    <div className="container">
      <h1>Calculate VAT</h1>
      <div className="input-group">
        <label htmlFor="price" style={{fontSize: '35pt'}}>Price: </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={handlePriceChange}
          style={{ fontSize: '30pt', textAlign: 'right' }}
          
        />
      </div>
      <div className="input-group">
        <label htmlFor="discount" style={{fontSize: '35pt'}}>Discount: </label>
        <input
          type="number"
          id="discount"
          value={discount}
          onChange={handleDiscountChange}
          style={{ fontSize: '30pt', textAlign: 'right' }}
        />
      </div>
      <div className="result">
        <h1>Gross Price = {grossPrice}</h1>
        <h1>VAT =  {vat}</h1>
      </div>
    </div>
  );
}

export default App