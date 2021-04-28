import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import MyNavBar from '../../components/MyNavBar';
import MyFooter from '../../components/MyFooter';

// import { Container } from './styles';

function Contato() {
  return (
    <>
      <MyNavBar />
      <Container className="p-5 d-flex justify-content-center">
        <Card style={{ width: '35rem' }}>
          <Card.Body>
            <Card.Title>Fale Conosco</Card.Title>
            <Form>
              <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Ex.: Filipe Maia" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Assunto</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Setor</Form.Label>
                <Form.Control as="select">
                  <option>Ouvidoria</option>
                  <option>Agência de Comunicação</option>
                  <option>ASCOM - Reitoria</option>
                  <option>Comperve - Processos seletivos</option>
                  <option>SISU/UFRN</option>
                </Form.Control>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>

      <MyFooter />
    </>
  );
}

export default Contato;
