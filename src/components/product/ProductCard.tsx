import NextLink from 'next/link';

import { IProduct } from "@/interfaces"
import { Grid, Card, CardActionArea, CardMedia, Typography, Box, Link } from "@mui/material"
import { FC, useMemo, useState } from "react"

interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({product}) => {
    const [isHovered, setIsHovered] = useState(false)
    const urlImage = useMemo(() => { 
        return isHovered 
        ? `products/${product.images[1]}`
        : `products/${product.images[0]}`
    
    }, [isHovered, product.images])
    

  return (
    <Grid item xs={6} sm={4} 
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}
    >
        <NextLink href='/products/slug' passHref prefetch={false} legacyBehavior>
            <Link>
                <Card>
                    <CardActionArea>
                    <CardMedia component='img' className="fadeIn"  image={urlImage} alt={product.title}/>
                    </CardActionArea>
                </Card>
                <Box sx={{mt: 1}} className='fadeIn'>
                    <Typography fontWeight={700}>{product.title}</Typography>
                    <Typography fontWeight={500}>{`${product.price}`}</Typography>
                </Box>
            </Link>
        </NextLink>
        
    </Grid>
  )
}
