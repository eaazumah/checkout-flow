import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import { useSubscriptionPlans } from "../_shared/services/api";
import PlanItem from "./Components/PlanItem";

interface Props {}

const Plans = (props: Props) => {
  const history = useHistory();
  const { loading, error, plans, getPlans } = useSubscriptionPlans();

  const onNext = () => {
    history.push("/payment");
  };

  if (loading) {
    return (
      <StledContainer>
        <Spinner animation="border" variant="primary" />
      </StledContainer>
    );
  }

  if (error) {
    return (
      <Alert variant="danger">
        {error + "  "}
        <Button onClick={getPlans}>Retry</Button>
      </Alert>
    );
  }

  return (
    <StledContainer>
      <Title className={"mx-auto"}>Select Your Plan</Title>
      <Row>
        {plans.map((item, index) => (
          <Col md={4} key={index}>
            <PlanItem plan={item} />
          </Col>
        ))}
      </Row>
      <Nav onNext={onNext} />
    </StledContainer>
  );
};

const Title = styled.h2`
  opacity: 0.7;
  margin-bottom: 30px;
  color: ${(pros) => pros.theme.textColor};
`;

const StledContainer = styled(Container)`
  display: grid;
  justify-content: center !important;
`;

export default Plans;
