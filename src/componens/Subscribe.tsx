import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";

const Subscribe = () => {
  return (
    <div>
      <SubscribeContainer>
        <div>
          <Text>
            Join <span>98,641</span> Monthly Readers. Subscribe Today!
          </Text>
        </div>
        <Inputs>
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </Inputs>
      </SubscribeContainer>
    </div>
  );
};

export default Subscribe;

const SubscribeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 177px;
  margin-top: 133px;
`;
const Text = styled.p`
  width: 474px;
  flex-shrink: 0;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  span {
    color: ${defaultTheme.colors.blue};
  }
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    border-radius: 8px;
    border: 1px solid #c4c4c4;
    width: 330px;
    height: 70px;
    margin-right: 20px;
    &:focus {
      border: 0;
    }

    &::placeholder {
      padding: 22px 0 22px 23px;
    }
  }

  button {
    all: unset;
    cursor: pointer;
    color: ${defaultTheme.colors.white};
    background-color: ${defaultTheme.colors.blue};
    padding: 21px 15px 29px 14px;
    border-radius: 8px;
  }
`;
