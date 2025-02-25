
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center ', 
  height: '150px',
}
const slideImages = [
  {
    url: '/Desktop.png',
    caption: 'Slide 1'
  },
  {
    url: '/Desktop-4.png',
    caption: 'Slide 2'
  },
  {
    url: '/Desktop-5.png',
    caption: 'Slide 3'
  },
];

const ExploreMenu = () => {
    return (
        <div className="slide-container mt-23">
          <Slide autoplay={true} duration={3000} arrows={true} infinite={true} > 
           {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
}

export default ExploreMenu