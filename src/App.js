import { Segment, Container } from "semantic-ui-react";

const App = (props) => {
  return (
    <Container>
      <Segment stacked>
        Nombre: {props.name} - Pais: Mexico - Edad: 30 años.
      </Segment>
    </Container>
  );
};

export default App;
