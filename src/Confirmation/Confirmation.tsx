import hexToRgba from "hex-to-rgba";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import usePaymentInfo from "../_shared/hooks/usePaymentInfo";
import useSelectedPlan from "../_shared/hooks/useSelectedPlan";
import { useMakeSubscription } from "../_shared/services/api";

interface Props {}

const Confirmation = (props: Props) => {
  const history = useHistory();
  const { paymentInfo } = usePaymentInfo();
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { duration, pricePerGB, size, upfrontPayment } = useSelectedPlan();
  const { makeSubscription, loading, error, data } = useMakeSubscription();

  const calculatePrice = () => {
    return upfrontPayment ? pricePerGB! * size * 0.9 : pricePerGB! * size;
  };

  const onPrevious = () => {
    history.goBack();
  };

  const handleSubmit = () => {
    if (!acceptTerms) {
      alert("Please accept terms and conditions");
      return;
    }
    makeSubscription({
      paymentInfo,
      subscription: {
        size,
        duration,
        upfrontPayment,
      },
    });
  };

  useEffect(() => {
    if (!paymentInfo.email) {
      history.push("/landing");
    }
  }, [paymentInfo.email, history]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
    if (data) {
      history.push("/completed");
    }
  }, [error, data, history]);

  return (
    <StledContainer>
      <Card>
        <Card.Header>
          <Card.Title>Subscription Confirmation</Card.Title>
        </Card.Header>
        <Card.Body>
          <TextItemContainer>
            <Label>Duration</Label>
            <Value>{`${duration} months`}</Value>
          </TextItemContainer>
          <TextItemContainer>
            <Label>Storage </Label>
            <Value>{`$${size} Gigabytes`}</Value>
          </TextItemContainer>
          <TextItemContainer>
            <Label>Cost Per GB</Label>
            <Value>{`$ ${pricePerGB!.toFixed(2)}`}</Value>
          </TextItemContainer>

          <TextItemContainer>
            <Label>Total cost</Label>
            <Value>{`$ ${calculatePrice().toFixed(2)}`}</Value>
          </TextItemContainer>
        </Card.Body>
        <Card.Body>
          <TextItemContainer>
            <Label>Email</Label>
            <Value>{paymentInfo.email}</Value>
          </TextItemContainer>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Terms and Conditions"
              onClick={() => setAcceptTerms(!acceptTerms)}
              defaultChecked={acceptTerms}
            />
          </Form.Group>
          <Button onClick={handleSubmit}>
            {loading ? (
              <Spinner size="sm" variant="light" animation="border" />
            ) : (
              "Comfirm"
            )}
          </Button>
        </Card.Body>
      </Card>
      <Nav onPrevious={onPrevious} />
    </StledContainer>
  );
};

const Label = styled.div`
  color: ${(pros) => {
    return hexToRgba(pros.theme.textColor, "0.7");
  }} !important;
`;

const Value = styled.div`
  color: ${(props) => props.theme.textColor};
`;

const TextItemContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const StledContainer = styled(Container)`
  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .card {
    margin: 0 auto;
    max-width: 30rem;
    background-color: ${(props) => props.theme.surface};
  }
  .h5 {
    opacity: 0.7;
    color: ${(pros) => pros.theme.textColor};
  }
  .form-check-label {
    color: ${(props) => props.theme.textColor};
  }
`;

export default Confirmation;
