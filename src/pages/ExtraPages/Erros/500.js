import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

import error from '~/assets/images/error.png';

function Error500() {
  return (
    <>
      <div className="ex-pages">
        <div className="content-center">
          <div className="content-desc-center">
            <Container>
              <Card className="mo-mt-2">
                <CardBody>
                  <Row className="row align-items-center">
                    <Col lg={{ size: 4, offset: 1 }}>
                      <div className="ex-page-content">
                        <h1 className="text-dark">500</h1>
                        <h4 className="mb-4">Internal Server Error</h4>
                        <p className="mb-5">
                          It will be as simple as Occidental in fact, it will be
                          Occidental to an English person
                        </p>
                        <Link
                          className="btn btn-primary mb-5 waves-effect waves-light"
                          to="/dashboard"
                        >
                          <i className="mdi mdi-home" /> Back to Dashboard
                        </Link>
                      </div>
                    </Col>
                    <Col lg={{ size: 5, offset: 1 }}>
                      <img
                        src={error}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Error500);
