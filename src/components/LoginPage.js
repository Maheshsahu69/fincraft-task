import {
  Form,
  Card,
  CardHeader,
  Label,
  CardBody,
  FormGroup,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

const LoginPage = () => {
    const [username, setUsername]= useState("");
    const [password, setPassword] =useState("");
    const navigate =useNavigate();
  const submitLogin = () => {
  if(username==="fincraft" && password==='123'){
    // alert("Login successful");
    navigate('/dashboard')
    setUsername("");
    setPassword("");
  }else{
    alert("username and password not match");
    setUsername("");
    setPassword("");
  }
  };
 const resetLogin = ()=>{
    setUsername("");
    setPassword("");
  }
  return (
    <div>
      <Container fluid className="h-100 mt-5">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="4">
            <Card>
              <CardHeader className="bg-primary text-center">
                <Label className="h2 text-white">Login here</Label>
              </CardHeader>
              <CardBody className="p-4 m-1">
                <Form>
                  <FormGroup>
                    <Label htmlFor="email">Username</Label>
                    <div className="password-input-wrapper d-flex align-item-center">
                      <input type="text" placeholder="Enter username as fincraft" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <div className="password-input-wrapper d-flex align-item-center">
                      <input type="password" placeholder="Enter password as 123" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Button type="button" color="primary" className="me-2" onClick={submitLogin}>
                      Login
                    </Button>
                    <Button type="button" color="secondary" className="me-2" onClick={resetLogin}>
                      Reset
                    </Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
