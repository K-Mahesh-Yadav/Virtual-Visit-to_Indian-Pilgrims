// import { Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
function BasicExample() {
  return (
    <>
      <br />
      <p style={{ margin: "20px" }}>
        <a href="/">Home</a> / <a href="/Login">Logout</a>
      </p>
      <h2 style={{ margin: "20px" }}>
        We welcome you here are some temples avilable for Virtual visit
      </h2>
      <div className="Cards">
        <div className="card">
          <Card style={{ width: "19rem", outerHeight: "100%" }}>
            <Card.Img
              variant="top"
              src="https://4.bp.blogspot.com/-jzKrUfpGJ4Y/WCwcgYZwOhI/AAAAAAAAOfk/YmIb3mulrAkc5DmgLueXcuu9pk-QCm6TwCLcB/s1600/41_big.jpg"
            />
            <Card.Body>
              <Card.Title>Mahakaleshwar Jyothirlinga Temple</Card.Title>
              <Card.Text>
                Mahakaleshwar Jyotirlinga is a Hindu temple dedicated to Shiva
                and is one of the twelve Jyotirlingas, shrines which are said to
                be the most sacred abodes of Shiva. It is located in the ancient
                city of Ujjain in the state of Madhya Pradesh, India . The idol
                of Mahakaleshwar is known to be dakshinamukhi, which means that
                it is facing the south.
              </Card.Text>
              <Button variant="primary" href="/Video1">
                Virtual tour
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card">
          <Card style={{ width: "19rem" }}>
            <Card.Img
              variant="top"
              height={"227px"}
              src="https://static.toiimg.com/thumb/61820954.cms?resizemode=75&width=1200&height=900"
            />
            <Card.Body>
              <Card.Title>The Golden Temple </Card.Title>
              <Card.Text>
                The Golden Temple also known as the Harmandir Sahib, abode of
                God , Punjabi pronunciation: , or the Darbār Sahib, 'exalted
                court', is a gurdwara located in the city of Amritsar, Punjab,
                India. It is the preeminent spiritual site of Sikhism. It is one
                of the holiest sites in Sikhism, alongside the Gurdwara Darbar
                Sahib Kartarpur in Kartarpur, and Gurdwara Janam Asthan in
                Nankana Sahib.
              </Card.Text>
              <Button variant="primary" href="/Video2">
                Virtual tour
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card">
          <Card style={{ width: "19rem" }}>
            <Card.Img
              variant="top"
              src="https://wallpapercave.com/wp/wp6076051.jpg"
            />
            <Card.Body>
              <Card.Title>Tirumala Tirupati</Card.Title>
              <Card.Text>
                Tirupati is a city in the Indian state of Andhra Pradesh. Its
                Sri Venkateswara Temple sits atop one of the the 7 peaks of
                Tirumala Hills, attracting scores of Hindu pilgrims. Sri
                Venkateswara National Park, home to the temple, also contains
                the Sri Venkateswara Zoological Park with lions and primates.
                Nearby, next to a waterfall and cave believed to be sacred, Sri
                Kapileswara Swamy Temple is dedicated to Lord Shiva.
              </Card.Text>
              <Button variant="primary" href="/Video4">
                Virtual tour
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="Cards">
        <div className="card">
          <Card style={{ width: "19rem" }}>
            <Card.Img
              variant="top"
              src="https://www.deccanherald.com/sites/dh/files/article_images/2019/11/01/file77jlqtdq7zm1g5dnm5c9-1572588342.jpg"
            />
            <Card.Body>
              <Card.Title>The Chennakesava Temple</Card.Title>
              <Card.Text>
                The Chennakesava Temple, also referred to as Chennakeshava
                Temple and Keshava Temple, is a Vaishnava Hindu temple on the
                banks of River <i>Kaveri</i> at Somanathapura, Karnataka, India.
                The temple was consecrated in 1258 CE by Somanatha Dandanayaka,
                a general of the Hoysala King Narasimha III. It is located 38
                kilometres (24 mi) east of Mysuru city (Karnataka).
              </Card.Text>
              <Button variant="primary" href="/Video3">
                Virtual tour
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="card">
          <Card style={{ width: "19rem" }}>
            <Card.Img
              variant="top"
              height={"227px"}
              src="https://static.toiimg.com/photo/msid-59593265,width-96,height-65.cms"
            />
            <Card.Body>
              <Card.Title>The Thousand Pillar Temple</Card.Title>
              <Card.Text>
                The Thousand Pillar Temple or Rudreswara Swamy Temple [ వేయి
                స్తంభాల గుడి]is a historic Hindu temple located in the town of
                Hanamakonda, Telangana State, India. It is dedicated to Lord
                Shiva, Vishnu and Surya. Thousand Pillar Temple, along with
                Warangal Fort, Kakatiya Kala Thoranam and Ramappa Temple are
                added to the tentative list of World Heritage sites recognised
                by UNESCO.
              </Card.Text>
              <Button variant="primary" href="/Video5">
                Virtual tour
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card">
          <Card style={{ width: "19rem" }}>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Badrinath.jpg"
            />
            <Card.Body>
              <Card.Title>Badrinath Temple</Card.Title>
              <Card.Text>
                Badrinath or Badrinarayana Temple is a Hindu temple dedicated to
                Vishnu. It is situated in the town of Badrinath in Uttarakhand,
                India. The temple is also one of the 108 Divya Desams dedicated
                to Vishnu . It is open for six months every year, because of
                extreme weather conditions in the Himalayan region. The temple
                is located in Garhwal hill tracks in Chamoli district along the
                banks of Alaknanda River.
              </Card.Text>
              <Button variant="primary" href="/Video6">
                Virtual tour
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default BasicExample;
