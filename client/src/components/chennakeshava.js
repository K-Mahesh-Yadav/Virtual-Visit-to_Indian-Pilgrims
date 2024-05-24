import { React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import tirupati3 from '../assets/tirupati3.mp4';

const Video3 = () => {
    return (
        <Container>
            <p><a href="/">Home</a> / <a href="/Login">Logout</a></p>
            <div style={{margin:"10px"}}>
                <h2>History</h2>
                <p>
                The Somanathapura town was founded in the 13th century by a general named Somanatha (Someya Dandanayaka 
                in some inscriptions). He was working for the Hoysala King Narasimha III.Somanatha created an Agrahara, 
                that is granted land to Brahmins and dedicated resources to build and maintain temples therein.The town 
                (pura) became known after the name of the patron, Somanatha-pura. The location is also referred by alternate 
                spellings, such as Somnathpur.
                </p>
                <h2>Chennakeśava temple</h2>
                <p>
                Keshava, Janardhana and Venugopala are names found in the Bhagavad Gita, all in the context of Krishna.
                 The term Chennakeśava means "handsome Keshava". The Keshava temple at the Somanathapura is a temple of 
                 the Vaishnavism tradition within Hinduism, and one of many Keshava temples built in or before the 13th 
                 century in different parts of India, as well as in Belur in 1117 CE about 170 kilometres (110 mi) away.
                 Stambha before the gate of the temple (left); the view of the temple from the mantapa with inscription rocks.
                <p>
                The Keshava temple at Somanathapura faces east and is enclosed in a walled courtyard with a major gate (mahadvara).
                Outside the walls before the gate stands a tall pillar, which once had a Garuda statue on top, now missing. 
                Inside the gate, to the left are vertical standing inscription stones. These stones have the form of the hero stones,
                 with the top decorated with Hindu iconography as well as miniature reliefs of Keshava, Janardhana and Venugopala. 
                 The inscription is in old Kannada. The small entrance mandapa is supported by lathe-carved soapstone pillars.
                  The temple is carved from soapstone, a green-grey chloritic schist material that is soft in quarry but hardens 
                  when exposed to air. This is not locally available and must have been imported from another part of South India. 
                  It enabled the artists to shape and carve out intricate details for the artwork.
                  </p>
                </p>
            </div>
            <div>
                {<video controls autoPlay loop muted className='c6'>
                    <source
                        src={tirupati3}
                        type="video/mp4"
                    />
                </video>}
            </div>
        </Container>
    );
};
export default Video3;