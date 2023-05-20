import {FiArrowUpRight} from 'react-icons/fi';
import image1 from '../../../assets/images/sports-1.png'
import image2 from '../../../assets/images/sports-2.png'
import image3 from '../../../assets/images/sport-3.jpg'
import image4 from '../../../assets/images/sports-4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center top-0 bottom-0 bg-gradient-to-r from-[#f1b3b3] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 mx-auto  text-center'>
                        <h3 className='text-6xl font-bold '>It is good
                            tea time at The Tea House</h3>
                        <p>Tea and Botanical Solutions Supplier Give Optimum Satisfaction To Your Taste Buds.</p>
                        <div>
                            <button className="btn btn-primary mr-4 bg-gradient-to-r from-[#e76767] to-[rgba(21, 21, 21, 0)]">Explore More<FiArrowUpRight></FiArrowUpRight></button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between items-center transform -translate-y-1/2  left-10 right-10 top-1/2 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center top-0 bottom-0 bg-gradient-to-r from-[#f1b3b3] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 mx-auto  text-center'>
                        <h3 className='text-6xl font-bold '>It is good
                            tea time at The Tea House</h3>
                        <p>Tea and Botanical Solutions Supplier Give Optimum Satisfaction To Your Taste Buds.</p>
                        <div>
                            <button className="btn btn-primary mr-4 bg-gradient-to-r from-[#e76767] to-[rgba(21, 21, 21, 0)]">Explore More<FiArrowUpRight></FiArrowUpRight></button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between text-center transform -translate-y-1/2 top-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center top-0 bottom-0 bg-gradient-to-r from-[#f1b3b3] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 mx-auto  text-center'>
                        <h3 className='text-6xl font-bold '>It is good
                            tea time at The Tea House</h3>
                        <p>Tea and Botanical Solutions Supplier Give Optimum Satisfaction To Your Taste Buds.</p>
                        <div>
                            <button className="btn btn-primary mr-4 bg-gradient-to-r from-[#e76767] to-[rgba(21, 21, 21, 0)]">Explore More<FiArrowUpRight></FiArrowUpRight></button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between items-center transform -translate-y-1/2  left-10 right-10 top-1/2 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center top-0 bottom-0 bg-gradient-to-r from-[#f1b3b3] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 mx-auto  text-center'>
                        <h3 className='text-6xl font-bold '>It is good
                            tea time at The Tea House</h3>
                        <p>Tea and Botanical Solutions Supplier Give Optimum Satisfaction To Your Taste Buds.</p>
                        <div>
                            <button className="btn btn-primary mr-4 bg-gradient-to-r from-[#e76767] to-[rgba(21, 21, 21, 0)]">Explore More<FiArrowUpRight></FiArrowUpRight></button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between items-center transform -translate-y-1/2  left-10 right-10 top-1/2 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
                
            
        </div>
    );
};

export default Banner;