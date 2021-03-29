import React from "react"
import {useParams} from "react-router-dom"
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';


function Detail(props) {

const {prodId} = useParams();
  const prod = props.products.find(pro => pro.id === prodId)

    
    return (
        <div className="detail">
            <img src={prod.media.source} alt={prod.name} className='imageleft' />
            <div className='detailright' >
            <Typography dangerouslySetInnerHTML={{ __html: prod.name }} variant="h1" color="textSecondary" />
                  <Typography dangerouslySetInnerHTML={{ __html: prod.description }} variant="body1" color="textSecondary" className='detailrightpara' />
            </div>

        
        </div>
    )
}

export default Detail