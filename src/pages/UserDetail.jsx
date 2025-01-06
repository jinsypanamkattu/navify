import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner, Card } from 'react-bootstrap';
import {  Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../css/UserDetail.css';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Loading user details...</p>
      </Container>
    );
  }

  if (!user) {
    return <p>User not found</p>;
  }

  return (

    <div className="user-detail-page">
      <div className="user-detail-card">
        
        <h1 className="user-detail-name">{user.name}</h1>
        <h2 className = "user-detail-bio">Company: {user.company.name}</h2>
        <h2 className = "user-detail-bio">Website: {user.website}</h2>
        <h2 className = "user-detail-bio">Phone: {user.phone}</h2>
        <h3 className="user-detail-role">Email: {user.email}</h3>
        
        <div>
           
        <Container className="mt-4">
      <h2 className="text-center mb-4">User Address</h2>
      <Card className="shadow-sm">
        <Card.Body>
          <Row>
            <Col xs={12} md={6}>
              <strong>Street:</strong> {user.address.street}
            </Col>
            <Col xs={12} md={6}>
              <strong>Suite:</strong> {user.address.suite}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} md={6}>
              <strong>City:</strong> {user.address.city}
            </Col>
            <Col xs={12} md={6}>
              <strong>Zipcode:</strong> {user.address.zipcode}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} md={6}>
              <strong>Latitude:</strong> {user.address.geo.lat}
            </Col>
            <Col xs={12} md={6}>
              <strong>Longitude:</strong> {user.address.geo.lng}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
        </div>
        
      </div>
    </div>




  );
};

export default UserDetail;
