import Container from "react-bootstrap/Container";
import { AiOutlineCheckCircle } from "react-icons/ai";
import styled from "styled-components";
interface Props {}

const Success = (props: Props) => {
  return (
    <StledContainer>
      <AiOutlineCheckCircle color={"green"} size={60} />
      <div className={"msg"}>Completed successfully</div>
    </StledContainer>
  );
};

const StledContainer = styled(Container)`
  display: grid;
  place-items: center;
  justify-content: center !important;
  .msg {
    color: ${(props) => props.theme.textColor};
  }
`;

export default Success;
