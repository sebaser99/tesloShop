import {FC} from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from './ProductSlideShow.module.css'

interface Props {
    images: string[]
}



export const ProductSlideshow:FC<Props> = ({images}) => {
  return (
    <div className="slide-container">
        <Slide
            easing='ease'
            duration={7000}
            indicators
        >
            {images.map(image => {
                const url = `/products/${image}`
            return (
                <div  className={styles['each_slide']} key={image}>
                 <div style={{ 'backgroundImage': `url(${url})`, backgroundSize: 'cover' }}>
                 </div>
               </div>
            )})}
          

        </Slide>
    </div>
  )
}
