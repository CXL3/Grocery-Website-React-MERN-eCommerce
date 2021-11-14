import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <div>
      <h1>The Latest Catch</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4}>
            {/* pass in the prodcut to the ProductCard  */}
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
