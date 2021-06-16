import hexRgb from "hex-rgb";
import ListGroup from "react-bootstrap/ListGroup";
import { BsCheckCircle } from "react-icons/bs";
import styled from "styled-components";
import useSelectedPlan from "../../_shared/hooks/useSelectedPlan";
import { ISize } from "../../_shared/types";

interface Props {
  size: ISize;
  isParentSelected?: Boolean;
}

const SizeItem = (props: Props) => {
  const { size, updatePlan } = useSelectedPlan();

  const isSelected = props.isParentSelected
    ? size == props.size
    : 5 === props.size;

  const setSize = () => {
    if (!props.isParentSelected) return;
    updatePlan({ size: props.size });
  };

  return (
    <Container onClick={setSize}>
      {`${props.size} Gigabites Storage`}
      {isSelected && <BsCheckCircle color={"green"} />}
    </Container>
  );
};

const Container = styled(ListGroup.Item)`
  cursor: pointer;
  display: flex !important;
  color: ${(pros) => pros.theme.textColor};
  justify-content: space-between !important;
  background-color: ${(pros) => pros.theme.surface};
  border: 1px solid
    ${(pros) => {
      return hexRgb(pros.theme.textColor, { format: "css", alpha: 0.4 });
    }};
`;

export default SizeItem;
