import React from 'react';
import { Accordion, Card, Button, Container } from 'react-bootstrap';
import MyNavBar from '../../components/MyNavBar';
import MyFooter from '../../components/MyFooter';

function Calendario() {
  return (
    <>
      <MyNavBar />
      <Container className="p-5 w-50 mb-5">
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                2020.1
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div>
                  <p>04/01/2021 à 11/01/2021</p>
                  <p>→ Matrícula para o período 2020.1.</p>
                </div>

                <div>
                  <p>18/01/2021 à 19/01/2021</p>
                  <p>→ Re-matrícula para o período 2020.1.</p>
                </div>

                <div>
                  <p>18/01/2021</p>
                  <p>→ Início do período letivo 2020.1.</p>
                </div>

                <div>
                  <p>25/01/2021</p>
                  <p>→ Início do período trancamento de turma 2020.1.</p>
                </div>

                <div>
                  <p>19/02/2021</p>
                  <p>→ Término do período trancamento de turma 2020.1.</p>
                </div>

                <div>
                  <p>30/04/2021</p>
                  <p>→ Término do período letivo 2020.1.</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                2020.2
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div>
                  <p>04/01/2021 à 11/01/2021</p>
                  <p>→ Matrícula para o período 2020.2.</p>
                </div>

                <div>
                  <p>18/01/2021 à 19/01/2021</p>
                  <p>→ Re-matrícula para o período 2020.2.</p>
                </div>

                <div>
                  <p>18/01/2021</p>
                  <p>→ Início do período letivo 2020.2.</p>
                </div>

                <div>
                  <p>25/01/2021</p>
                  <p>→ Início do período trancamento de turma 2020.2.</p>
                </div>

                <div>
                  <p>19/02/2021</p>
                  <p>→ Término do período trancamento de turma 2020.2.</p>
                </div>

                <div>
                  <p>30/04/2021</p>
                  <p>→ Término do período letivo 2020.2.</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
      <div className="fixed-bottom">
        <MyFooter />
      </div>
    </>
  );
}

export default Calendario;
