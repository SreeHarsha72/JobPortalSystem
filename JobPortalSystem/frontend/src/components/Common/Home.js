import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar'
import { ReactComponent as Logo } from "../../logo.svg";

import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img3.jpg'

export default class Home extends Component {

  componentDidMount() {
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="./">UNC Job Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mr-auto">
              <Nav.Link href="./">Home</Nav.Link>
              <Nav.Link href="./Login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br></br>
        <h1 style={{ justifyContent:"center" ,display:"flex" }}>Welcome to UNC Job Searching Portal</h1>
        <div class="/home_content" style={{ display: 'flex' }}>
          <div class="container-fluid" style={{ margin: "30px" }}>
            <div class="row">

              <div class="card mb-3"><a href='https://www.wsj.com/articles/jpmorgan-jeffrey-epstein-525febe3'>
                <img src={img3} class="card-img-top" alt="..." /></a>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>

            </div>
          </div>
          <div class="container-fluid" style={{ margin: '30px' }}>
            <div class="row">
              <div class="card mb-3">
                <a href='https://www.wsj.com/articles/jpmorgan-jeffrey-epstein-525febe3'>
                  <img src={img1} class="card-img-top" alt="..." /></a>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="card-horizontal mb-3" style={{ display: 'flex', margin: '10px' }} >
          <div class="row card-horizontal-g-0">
            <div class="col-md-4">
              <img src={img2} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div class="row card-horizontal-g-0">
            <div class="col-md-4">
              <img src={img4} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>  <div class="row card-horizontal-g-0">
            <div class="col-md-4">
              <a href='https://www.wsj.com/articles/jpmorgan-jeffrey-epstein-525febe3'>
                < img src={img1} class="img-fluid rounded-start" alt="..." />
              </a>

            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}
