import { useFormik } from "formik";
import hexToRgba from "hex-to-rgba";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import PlanItem from "../Plans/Components/PlanItem";
import usePaymentInfo from "../_shared/hooks/usePaymentInfo";
import useSelectedPlan from "../_shared/hooks/useSelectedPlan";
import { IPaymentInfo } from "../_shared/types";
import { paymentSchema } from "./__helpers__/schema";

interface Props {}

const Payment = (props: Props) => {
  const history = useHistory();
  const { paymentInfo, updatepaymentInfo } = usePaymentInfo();
  const { duration, pricePerGB } = useSelectedPlan();

  const handleSubmit = (value: IPaymentInfo) => {
    updatepaymentInfo(value);
    history.push("/confirmation");
  };
  console.log(paymentInfo);

  const form = useFormik({
    onSubmit: handleSubmit,
    initialValues: paymentInfo,
    validationSchema: paymentSchema,
  });

  const onPrevious = () => {
    history.goBack();
  };

  useEffect(() => {
    if (!pricePerGB) {
      history.goBack();
    }
  }, [pricePerGB]);

  return (
    <StledContainer>
      <Row>
        <Col md={4} className={"order-2 order-md-1"}>
          <PlanItem
            preview
            plan={{
              duration_months: duration,
              price_usd_per_gb: pricePerGB!,
            }}
          />
        </Col>
        <Col md={8} className={"order-1 order-md-2"}>
          <Card>
            <Card.Header>
              <Card.Title>Your payment info</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={form.values.email}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    isInvalid={Boolean(form.touched.email && form.errors.email)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {form.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Card number</Form.Label>
                  <Form.Control
                    name="cardNumber"
                    placeholder="Enter card number"
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    value={form.values.cardNumber}
                    isInvalid={Boolean(
                      form.touched.cardNumber && form.errors.cardNumber
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {form.errors.cardNumber}
                  </Form.Control.Feedback>
                </Form.Group>
                <Row className="mb-2">
                  <Form.Group as={Col}>
                    <Form.Label>Expiration date</Form.Label>
                    <Form.Control
                      name="expirationDate"
                      placeholder="Enter expiration date"
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      value={form.values.expirationDate}
                      isInvalid={Boolean(
                        form.touched.expirationDate &&
                          form.errors.expirationDate
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {form.errors.expirationDate}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      name="cvv"
                      placeholder="Enter card security code"
                      value={form.values.cvv}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      isInvalid={Boolean(form.touched.cvv && form.errors.cvv)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {form.errors.cvv}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Nav onPrevious={onPrevious} onNext={form.handleSubmit} />
    </StledContainer>
  );
};

const StledContainer = styled(Container)`
  .form-label {
    opacity: 0.7;
    color: ${(props) => props.theme.textColor} !important;
  }
  .form-control {
    opacity: 0.7;
    color: ${(props) => props.theme.textColor} !important;
    background-color: ${(props) => props.theme.surface};
    border: 1px solid
      ${(pros) => {
        return hexToRgba(pros.theme.textColor, "0.4");
      }};
  }
  .card-header {
  }
  .card {
    margin: 0 auto;
    max-width: 40rem;
    background-color: ${(props) => props.theme.surface};
  }
  .h5 {
    opacity: 0.7;
    color: ${(pros) => pros.theme.textColor};
  }
  .text-muted {
    opacity: 0.6;
    color: ${(props) => props.theme.textColor} !important;
  }
  .form-check-label {
    opacity: 0.7;
    color: ${(props) => props.theme.textColor} !important;
  }
`;

export default Payment;
