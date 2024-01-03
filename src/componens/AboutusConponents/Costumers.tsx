import styled from "styled-components";

const Costumers = () => {
  return (
    <ConstumersContainer>
      <Wrapper>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque
          imperdiet faucibus.
        </p>
        <h2>Joy Kim </h2>
        <h3>explorer</h3>
      </Wrapper>
      <Wrapper>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque
          imperdiet faucibus.
        </p>
        <h2>Joy Kim </h2>
        <h3>explorer</h3>
      </Wrapper>
      <Wrapper>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque
          imperdiet faucibus.
        </p>
        <h2>Joy Kim </h2>
        <h3>explorer</h3>
      </Wrapper>
    </ConstumersContainer>
  );
};

export default Costumers;

const ConstumersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  width: 349px;
  height: 471px;
  flex-shrink: 0;
  padding: 61px 46px 52px 33px;
  border-radius: 30px;
  background: #fff;

  /* gg */
  box-shadow: 0px 2.767px 6.226px 0px rgba(0, 0, 0, 0.02),
    0px 6.65px 14.963px 0px rgba(0, 0, 0, 0.03), 0px 12.522px 28.173px 0px rgba(0, 0, 0, 0.04),
    0px 22.336px 50.257px 0px rgba(0, 0, 0, 0.04), 0px 41.778px 94px 0px rgba(0, 0, 0, 0.05),
    0px 100px 225px 0px rgba(0, 0, 0, 0.07);
  p {
    width: 250px;
    height: 280px;
    flex-shrink: 0;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 222.222% */
    letter-spacing: 0.27px;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 83.333% */
    letter-spacing: 0.36px;
    margin-bottom: 15px;
  }
  h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.27px;
  }
`;
