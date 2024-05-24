import { React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

const Video2 = () => {
    return (
        <Container>
            <p><a href="/">Home</a> / <a href="/Login">Logout</a></p>
            <div style={{margin:"10px"}}>
                <h2><b>Golden Temple</b></h2>
                <p>
                The man-made pool on the site of the temple was completed by the fourth Sikh Guru, Guru Ram Das, in 1577.
                 In 1604, Guru Arjan placed a copy of the Adi Granth in Harmandir Sahib. The Gurdwara was repeatedly rebuilt
                  by the Sikhs after it became a target of persecution and was destroyed several times by the Mughal and invading 
                  Afghan armies. Maharaja Ranjit Singh, after founding the Sikh Empire, rebuilt it in marble and copper in 1809, 
                  and overlaid the sanctum with gold leaf in 1830. This has led to the name the Golden Temple.
                </p>
                <h2>The Temple</h2>
                <p>
                The Golden Temple is spiritually the most significant shrine in Sikhism. It became a centre of the Singh Sabha 
                Movement between 1883 and 1920s, and the Punjabi Suba movement between 1947 and 1966. In the early 1980s, the Gurdwara 
                became a centre of conflict between the Indian government and a movement led by Jarnail Singh Bhindranwale. 
                In 1984, Prime Minister Indira Gandhi sent in the Indian Army as part of Operation Blue Star, leading to deaths 
                of over 1,000 soldiers and civilians, as well as causing much damage to the Gurdwara and the destruction of Akal 
                Takht. The Gurdwara complex was rebuilt again after the 1984 damage.
                </p>
            </div>
            <div class="ratio ratio-16x9">
                <iframe width="1536" height="703" src="https://www.youtube.com/embed/A5YdinFdV54" title="Mahakaleshwar Jyothirlinga Temple" frameborder="0" allow="accelerometer;gyroscope;" allowfullscreen></iframe>
            </div>
        </Container>
    );
};
export default Video2;