import React, { useEffect, useState, useMemo } from 'react';
import { Container, Row, Col, Card, CardBody, Table, Button } from 'reactstrap';

import api_user from '~/services/user-service';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api_user.get('/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const renderListUsers = useMemo(
    () =>
      users.map((user) => (
        <tr key={user.id}>
          <th>{user.name}</th>
          <td>{user.cpf}</td>
          <td>{user.email}</td>
          <td>{user.deleted_at ? 'Desativado' : 'Ativo'}</td>
          <td>
            <Button
              type="button"
              color="primary"
              className="waves-effect waves-light m-r-10"
              onClick={() => {}}
            >
              <i className="fas fa-eye" />
            </Button>

            <Button
              type="button"
              color="danger"
              className="waves-effect waves-light"
              onClick={() => {}}
            >
              <i className="far fa-trash-alt" />
            </Button>
          </td>
        </tr>
      )),
    [users]
  );

  return (
    <Container fluid>
      <div className="page-title-box">
        <Row className="align-items-center">
          <Col sm="6">
            <h4 className="page-title">Usuários</h4>
          </Col>
        </Row>
      </div>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <p className="text-muted m-b-30">
                Aqui estão os usuários cadastrados no APP.
              </p>

              <div className="table-rep-plugin">
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th data-priority="1">CPF</th>
                      <th data-priority="3">Email</th>
                      <th data-priority="1">Status</th>
                      <th data-priority="3">Ações</th>
                    </tr>
                  </thead>
                  <tbody>{renderListUsers}</tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
