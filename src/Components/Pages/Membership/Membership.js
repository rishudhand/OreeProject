import React from "react";
import Loginbanner from "../../../Assets/image/loginbanner.png";
import { Tab, Nav, Card, Col, Row, Button } from "react-bootstrap";
import "../Login/Login.scss";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import List_check from "../../../Assets/icon/list_check.png";
import Header from "../../Layout/Header";
export default function Membership() {
  return (
    <div>
      <Header />
      <div
        className="login_banner p-4"
        style={{
          backgroundImage: `url(${Loginbanner})`,

          backgroundSize: "100%",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#F6F6F6",
        }}
      >
        <div className="container">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="login_form">
              <Row className="mb-3">
                <Col xs={4}>
                  <Link
                    to="/"
                    className="text-decoration-none text-dark font_bold"
                  >
                    <BsArrowLeft />
                    &nbsp; Back
                  </Link>
                </Col>
                <Col xs={4} className="text-center">
                  <p className="text-dark h4 font_bolder">Membership</p>
                </Col>
                <Col xs={4} className="text-end">
                  <Nav
                    variant="pills"
                    className="flex-rows align-items-center justify-content-end"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Monthly</Nav.Link>
                    </Nav.Item>
                    |
                    <Nav.Item>
                      <Nav.Link eventKey="second">Yearly</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col md={3}>
                      <Card className="shadow p-3 mb-5 bg-body rounded">
                        <Card.Body>
                          <Card.Title className="navyColor">Trial</Card.Title>
                          <Card.Subtitle className="yellow mb-3">
                            <p className="h2 font_bolder">
                              $00/ <span className="h6">14 days</span>
                            </p>
                          </Card.Subtitle>
                          <Card.Text>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-5 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <Button
                              className="bigbutton rounded-pill border-0 w-100 p-3"
                              type="submit"
                            >
                              Choose Plan
                            </Button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card className="shadow p-3 mb-5 bg-body rounded">
                        <Card.Body>
                          <Card.Title className="navyColor">Silver</Card.Title>
                          <Card.Subtitle className="yellow mb-3">
                            <p className="h2 font_bolder">
                              $79/ <span className="h6">month</span>
                            </p>
                          </Card.Subtitle>
                          <Card.Text>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-5 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <Button
                              className="bigbutton rounded-pill border-0 w-100 p-3"
                              type="submit"
                            >
                              Choose Plan
                            </Button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card className="shadow p-3 mb-5 bg-body rounded">
                        <Card.Body>
                          <Card.Title className="navyColor">Gold </Card.Title>
                          <Card.Subtitle className="yellow mb-3">
                            <p className="h2 font_bolder">
                              $239/ <span className="h6">month</span>
                            </p>
                          </Card.Subtitle>
                          <Card.Text>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-5 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <Link to="/carddetail">
                              <Button
                                className="bigbutton rounded-pill border-0 w-100 p-3"
                                type="submit"
                              >
                                Choose Plan
                              </Button>
                            </Link>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card className="shadow p-3 mb-5 bg-body rounded">
                        <Card.Body>
                          <Card.Title className="navyColor">
                            Platinum{" "}
                          </Card.Title>
                          <Card.Subtitle className="yellow mb-3">
                            <p className="h2 font_bolder">
                              $559/ <span className="h6">month</span>
                            </p>
                          </Card.Subtitle>
                          <Card.Text>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-5 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <Button
                              className="bigbutton rounded-pill border-0 w-100 p-3"
                              type="submit"
                            >
                              Choose Plan
                            </Button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <Col md={3}>
                      <Card className="shadow p-3 mb-5 bg-body rounded">
                        <Card.Body>
                          <Card.Title className="navyColor">Trial</Card.Title>
                          <Card.Subtitle className="yellow mb-3">
                            <p className="h2 font_bolder">
                              $00/ <span className="h6">14 days</span>
                            </p>
                          </Card.Subtitle>
                          <Card.Text>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-5 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <Button
                              className="bigbutton rounded-pill border-0 w-100 p-3"
                              type="submit"
                            >
                              Choose Plan
                            </Button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card className="shadow p-3 mb-5 bg-body rounded">
                        <Card.Body>
                          <Card.Title className="navyColor">Silver</Card.Title>
                          <Card.Subtitle className="yellow mb-3">
                            <p className="h2 font_bolder">
                              $79/ <span className="h6">month</span>
                            </p>
                          </Card.Subtitle>
                          <Card.Text>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-5 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <Button
                              className="bigbutton rounded-pill border-0 w-100 p-3"
                              type="submit"
                            >
                              Choose Plan
                            </Button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card className="shadow p-3 mb-5 bg-body rounded">
                        <Card.Body>
                          <Card.Title className="navyColor">Gold </Card.Title>
                          <Card.Subtitle className="yellow mb-3">
                            <p className="h2 font_bolder">
                              $739/ <span className="h6">month</span>
                            </p>
                          </Card.Subtitle>
                          <Card.Text>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-5 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <Link to="/carddetail">
                              <Button
                                className="bigbutton rounded-pill border-0 w-100 p-3"
                                type="submit"
                              >
                                Choose Plan
                              </Button>
                            </Link>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card className="shadow p-3 mb-5 bg-body rounded">
                        <Card.Body>
                          <Card.Title className="navyColor">
                            Platinum{" "}
                          </Card.Title>
                          <Card.Subtitle className="yellow mb-3">
                            <p className="h2 font_bolder">
                              $779/ <span className="h6">month</span>
                            </p>
                          </Card.Subtitle>
                          <Card.Text>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-3 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <div className="d-flex mb-5 align-items-center">
                              <img
                                src={List_check}
                                alt=""
                                style={{ width: "20px", height: "20px" }}
                              />
                              &nbsp;
                              <p className="navyColor m-0">
                                Unlimited Access to our Deals
                              </p>
                            </div>
                            <Button
                              className="bigbutton rounded-pill border-0 w-100 p-3"
                              type="submit"
                            >
                              Choose Plan
                            </Button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
}
