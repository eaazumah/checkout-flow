import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import { BsCheckBox } from "react-icons/bs";
import styled from "styled-components";
import useSelectedPlan from "../../_shared/hooks/useSelectedPlan";
import { IPlanServerResponse } from "../../_shared/types";
import SizeItem from "./SizeItem";

interface Props {
  plan: IPlanServerResponse;
  preview?: boolean;
}

const sizes: Array<5 | 10 | 50> = [5, 10, 50];

const PlanItem = (props: Props) => {
  const { plan, preview } = props;

  const { duration, size, upfrontPayment, updatePlan } = useSelectedPlan();

  const isSelected = duration === plan.duration_months;

  const selectedPlan = () => {
    if (isSelected) return;
    updatePlan({
      size: 5,
      upfrontPayment: false,
      duration: plan.duration_months,
      pricePerGB: plan.price_usd_per_gb,
    });
  };

  const calculatePrice = () => {
    if (isSelected) {
      return upfrontPayment
        ? plan.price_usd_per_gb * size * 0.9
        : plan.price_usd_per_gb * size;
    }
    return plan.price_usd_per_gb * 5;
  };

  const handleUpfrontPaymentChange = () => {
    if (!isSelected) return;
    updatePlan({
      upfrontPayment: !upfrontPayment,
    });
  };

  useEffect(() => {
    if (!isSelected || preview) return;
    updatePlan({
      pricePerGB: plan.price_usd_per_gb,
    });
  }, []);

  return (
    <StyledCard selected={preview ? false : isSelected}>
      <StyledCard.Header>
        <StyledCard.Title>{`${plan.duration_months} months`}</StyledCard.Title>
        {isSelected && <BsCheckBox color={"green"} size={30} />}
      </StyledCard.Header>

      <StyledCard.Body>
        <PriceContainer>
          <h2>${calculatePrice().toFixed(2)}</h2>
        </PriceContainer>
        <StyledCard.Text>{`Get your cloud storage solution for ${plan.duration_months} months`}</StyledCard.Text>
      </StyledCard.Body>
      <ListGroup variant="flush">
        {sizes.map((size, index) => (
          <SizeItem size={size} key={index} isParentSelected={isSelected} />
        ))}
      </ListGroup>

      <StyledCard.Body>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Pay upfront"
            onClick={handleUpfrontPaymentChange}
            checked={isSelected && upfrontPayment}
          />
        </Form.Group>
        {!preview && (
          <Button variant="primary" onClick={selectedPlan}>
            Select
          </Button>
        )}
      </StyledCard.Body>
    </StyledCard>
  );
};

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.primary} !important;
`;

const StyledCard = styled(Card)<{ selected: boolean }>`
  max-width: 300px;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 50px;
  .card-header {
    opacity: 0.7;
    width: 100% !important;
    display: flex !important;
    align-item: center !important;
    border-radius: 10px;
    justify-content: space-between !important;
    background-color: ${(props) => props.theme.surface};
    border-bottom: 0px solid ${(props) => props.theme.primary} !important;
  }

  h2 {
    color: ${(props) => props.theme.textColor};
  }

  .h5 {
    color: ${(props) => props.theme.textColor};
  }

  p {
    opacity: 0.7;
    margin-top: 20px;
    margin-bottom: 40px;
    color: ${(props) => props.theme.textColor};
  }

  .form-check-label {
    color: ${(props) => props.theme.textColor};
  }

  .btn-primary {
    width: 100%;
  }

  background-color: ${(props) => props.theme.surface};

  transition: all 0.2s ease-in-out;

  transform: ${(props) => `scale(${props.selected ? 1.1 : 1.0})`};
`;

export default PlanItem;
