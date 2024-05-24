import { React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import tirupati from '../assets/tirupati.mp4';

const Video4 = () => {
    return (
        <Container>
            <p><a href="/">Home</a> / <a href="/Login">Logout</a></p>
            <div style={{ margin: "10px" }}>
                <h2><b>Puranas</b></h2>
                <p>
                    According to Varaha Purana, during Treta Yuga, Rama resided here along with Sita and Lakshmana on his
                    return from Lankapuri.

                    As per the Purana, a loan of one crore and 11.4 million gold coins was sought by Balaji from Kubera
                    for his marriage with Padmavathi. To pay back the loan, devotees from all over India visit the temple
                    and donate money
                </p>
                <h2>Ancient history</h2>
                <p>
                    Tirupati was developed by Pallava Kings from 6th century onwards.[citation needed] The city became a great
                    Vaishnava centre during the time of Ramanujacharya in 11th century, from where Srivaishnavism spread to other
                    parts of Andhra Desa. Srikurmam Temple in Srikakulam district of Andhra Pradesh bears the inscription saying
                    Tirupati Srivaishnavula Raksha. Tirupati survived the Muslim invasions by accepting to pay Jizya to the
                    Muslims. During the early 1300s Muslim invasion of South India, the deity of Sri Ranganathaswamy Temple,
                    Srirangam was brought to Tirupati for safekeeping.
                    <p>
                        The temple town for most of the medieval era part of Vijayanagara Empire until the 17th century and its
                        rulers contributed considerable resources and wealth notable by Krishna Deva Raya and Achyuta Deva Raya,
                        Sadasiva Raya and Tirumala Deva Raya.
                    </p>
                    <p>
                        The city has many historical temples including the Venkateswara Temple which bears 1,150 inscriptions in the
                        Sanskrit, Tamil, Telugu and Kannada languages. Out of 1150 inscriptions 236 belong to Pallava, Chola and
                        Pandya dynasties, 169 belonged to Saluva dynasty, 251 belonged to Achyuta Deva Raya period, 130 belonged to
                        Sadasiva Raya period and another 135 originated in Aravidu dynasty. which specify the contributions of the
                        Pallava Kingdom around the ninth century CE, Chola Kingdom around the tenth century CE and the Vijayanagara
                        Empire in the 14th century CE. During the 15th century, Sri Tallapaka Annamacharya sung many songs in
                        praise of the holy town in Telugu. He compared it to be divine, including the rocks, streams, trees, animals,
                        and adds that it is heaven on the earth.
                    </p>
                </p>
                <br />
            </div>
            <div>
                {<video controls autoPlay loop muted className='c6'>
                    <source
                        src={tirupati}
                        type="video/mp4"
                    />
                </video>}
            </div>
        </Container>
    );
};
export default Video4;