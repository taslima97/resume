import img1 from '../../../assets/images/1000_F_106915941_SozvTA2ohafB9ZxYtdk0Y6zfAwFSpgY8.jpg'
import img2 from '../../../assets/images/1000_F_112413394_c6FoVvT7uMq41mSWjotGREb0jrdQOByq.jpg'
import img3 from '../../../assets/images/1000_F_112483549_BKpAzc3XYRxpmrBltwTpCt3G0qiJIFeK.jpg'
import img4 from '../../../assets/images/1000_F_51050838_ifGDN0e0DGfbJXAHBhvV9UNKlaOfcKUA.jpg'
import img5 from '../../../assets/images/sport-3.jpg'
import img6 from '../../../assets/images/sports-4.jpg'

const Gallery = () => {
    return (
        <div className='my-24' >
            <h2 className='text-center font-bold text-5xl my-6'>Gallery Section</h2>
        <div className="carousel carousel-center rounded-box">
  <div className="carousel-item">
    <img className='h-48' src={img1} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='h-48' src={img2} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='h-48' src={img3}alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='h-48' src={img4} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='h-48' src={img5} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='h-48' src={img6}alt="Pizza" />
  </div> 
  
</div>
        </div>
    );
};

export default Gallery;