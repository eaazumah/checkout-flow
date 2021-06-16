import Button from "react-bootstrap/Button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

interface Props {
  onNext?: () => void;
  onPrevious?: () => void;
}

const Nav = (props: Props) => {
  const { onNext, onPrevious } = props;
  return (
    <Container>
      <div>
        {onPrevious && (
          <Button onClick={onPrevious}>
            <BsArrowLeft /> Back
          </Button>
        )}
      </div>
      <div>
        {onNext && (
          <Button onClick={onNext}>
            Next <BsArrowRight />
          </Button>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .btn {
    align-items: center;
    justify-content: space-between;
  }
  margin-top: 50px;
  width: 100% !important;
  display: flex !important;
  justify-content: space-between !important;
`;

export default Nav;
