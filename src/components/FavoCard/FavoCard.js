import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, removeFavorite } from '../../redux/actions/productAction'
import CloseIcon from '@material-ui/icons/Close';
import './FavoCard.css'

const FavoCard = ({ favoProduct }) => {
  
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addProduct(product))
  }

  const handleRemoveFoverite = (product) => {
    dispatch(removeFavorite(product))
  }

  return (
    <>
      <div className="favo-card">
        <div className="favo-img">
          <img src={favoProduct.image} alt={favoProduct.title} />
        </div>
        <div className="favo-name">
          <h3>{favoProduct.title}</h3>
        </div>
        <div className="favo-price">
          <p>{favoProduct.price}</p>
        </div>
        <div className="button">
          <button onClick={() => handleAddToCart(favoProduct)}>Add To Card</button>
        </div>
        <div className="close" onClick={() => {handleRemoveFoverite(favoProduct)}}>
          <CloseIcon />
        </div>
      </div>
    </>
  )
}

export default FavoCard
