import image from '../../../assets/images/person.jpg'

const About = () => {
    return (
        <div className='my-24'>
            <h2 className='text-5xl my-12 font-bold text-center'>About 
            section</h2>
            <div  className='flex justify-evenly items-center'>
            <img className='h-96' src={image} alt="" />
            <div className='w-1/2'>
                <h3 className='text-3xl my-4 font-bold'>My failures of previous year</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</p>

                <ul>
                    <li>Contrary to popular belief, is not simply.</li>
                    <li>Contrary to popular belief.</li>
                    <li>Contrary to popular , is not simply.</li>
                    <li>Contrary to popular belief, is not simply.</li>
                    <li>Contrary to popular simply.</li>
                </ul>
            </div>
            </div>
        </div>

    );
};

export default About;