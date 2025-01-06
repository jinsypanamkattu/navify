import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/UserListing.css';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Loading users...</p>
      </Container>
    );
  }

  return (


<div className="users-page content">
      <h1 className="page-title"> Users</h1>
      <p className="page-description">
        Welcome to the users page! Here you can find a list of our community members and their roles.
      </p>
      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-role">{user.email}</p>
            <Link to={`/user/${user.id}`}>
                  <Button className="btn">View Details</Button>
                </Link>
          </div>
        ))}
      </div>
    </div>


  );
};

export default UserPage;
