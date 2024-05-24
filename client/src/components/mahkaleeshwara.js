import { React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import tirupati2 from '../assets/tirupati2.mp4';

const Video1 = () => {
    return (
        <Container>
            <p><a href="/">Home</a> / <a href="/Login">Logout</a></p>
            <div style={{ margin: "10px" }}>
                <h2>About Jyotirlingas</h2>
                <p>
                    As per the Shiva Purana, Brahma and Vishnu once had an argument over who was supreme in the creation.
                    To test them, Shiva pierced the three worlds as an endless pillar of light, the jyotirlinga. Vishnu and
                    Brahma decide to travel along the pillar downwards and upwards respectively, to find the end of the light.
                    Brahma lied that he had found the end, while Vishnu conceded his defeat. Shiva appeared as a second pillar
                    of light and cursed Brahma that he would have no place in ceremonies while Vishnu would be worshipped till
                    the end of eternity. The jyotirlinga is the supreme partless reality, out of which Shiva partly appears.
                    The jyotirlinga shrines, thus are places where Shiva appeared as a fiery column of light. There are 64
                    forms of Shiva, not to be confused with Jyotirlingas. Each of the twelve jyotirlinga sites take the name
                    of the presiding deity - each considered different manifestation of Shiva. At all these sites, the
                    primary image is lingam representing the beginningless and endless Stambha pillar, symbolizing the
                    infinite nature of Shiva.
                    <p>The twelve jyotirlinga are <i>Somnath in Gujarat, Mallikarjuna at Srisailam in
                        Andhra Pradesh, Mahakaleswar at Ujjain in Madhya Pradesh, Omkareshwar in Madhya Pradesh, Kedarnath in Himalayas
                        in Uttrakhand State, Bhimashankar in Maharashtra, Viswanath at Varanasi in Uttar Pradesh, Triambakeshwar in
                        Maharashtra, Baidyanath Temple, Deoghar in Jharkhand, Nageswar at Dwarka in Gujarat, Rameshwar at Rameswaram
                        in Tamil Nadu and Grishneshwar at Aurangabad in Maharashtra.</i></p>
                </p>
                <h2>The Temple</h2>
                <p>
                    The presiding deity of time, Shiva, in all his splendor, reigns eternally in the city of Ujjain.
                    The temple of Mahakaleshwar, its shikhar soaring into the sky, an imposing façade against the skyline,
                    evokes primordial awe and reverence with its majesty. The Mahakal dominates the life of the city and its people,
                    even in the midst of the busy routine of modern preoccupations, and provides an unbreakable link with ancient Hindu traditions.
                </p>
            </div>
            <div>
                {<video controls autoPlay loop muted className='c6'>
                    <source
                        src={tirupati2}
                        type="video/mp4"
                    />
                </video>}
            </div>
        </Container>
    );
};
export default Video1;