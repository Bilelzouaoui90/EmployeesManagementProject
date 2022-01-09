import { Component } from "react";
import { Carousel } from "react-bootstrap";
export default class Carocomp extends Component{

    render(){
        return(
            <div>
          <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.axens-audit.fr/wp-content/uploads/2018/05/accident-travail-consequences-employeur.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://us.123rf.com/450wm/choreograph/choreograph1602/choreograph160200143/52459401-journ%C3%A9e-de-travail-dans-le-bureau-deux-hommes-d-affaires-au-travail-.jpg?ver=6"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://us.123rf.com/450wm/lightfieldstudios/lightfieldstudios1911/lightfieldstudios191112433/134202626-mise-au-point-s%C3%A9lective-du-courtier-tapant-sur-un-clavier-d-ordinateur-portable-pr%C3%A8s-d-une-femme-au-.jpg?ver=6"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
             </div>
        );

        }

}