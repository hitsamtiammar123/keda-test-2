import React, { useState } from 'react';
import Option from '../../svg/options.svg';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, 
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import './style.scss';

export default function Header(){
  const [modalShow, setModalShow] = useState(false);

  function toggle(){
    setModalShow(!modalShow);
  }

    return (
      <div className="d-flex flex-row align-items-center px-4 header">
        <a href="/" className="bold main-title">Home</a>
        <div className="bg-absolute" />
        <div className="flex-row justify-content-end flex-1 tabs">
            <a href="#about" className="tab">ABOUT</a>
            <a href="#pricing" className="tab">PRICING</a>
            <a href="#contact" className="tab">CONTACT</a>
            <button onClick={() => setModalShow(true)} className="btn btn-login">Login</button>
        </div>
        <div className="flex-row justify-content-end flex-1 dropdown">
            <UncontrolledDropdown direction="start" >
              <DropdownToggle color="transparent" >
                <img alt="Option" className="img-option" src={Option} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <a href="#about">ABOUT</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#pricing">PRICING</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#contact">CONTACT</a>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <span onClick={() => setModalShow(true)} className="cursor-pointer">Login</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        </div>
        <Modal backdrop="static" toggle={toggle} isOpen={modalShow}>
          <ModalHeader toggle={toggle} >Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <FormGroup floating>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="input-login"
                />
                <Label for="email">
                  Email
                </Label>
              </FormGroup>
              {' '}
              <FormGroup floating>
                <Input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="input-login"
                />
                <Label for="password">
                  Password
                </Label>
              </FormGroup>
              {' '}
              <Button color="success">
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
}