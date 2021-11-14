import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const ProductCard = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='h5'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
