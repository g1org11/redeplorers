import styled from "styled-components";

const Stories = () => {
  return (
    <Container>
      <div>
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus
          pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor
          pharetra vitae rhoncus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus
          pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor
          pharetra vitae rhoncus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero.
        </p>
      </div>
      <div>
        <h1>Who Are Red Explorers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus
          pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor
          pharetra vitae rhoncus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus
          pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor
          pharetra vitae rhoncus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus. Mi arcu, nunc imperdiet sit.
        </p>
      </div>
      <div>
        <h1>About Our Cameraman</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus
          pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor
          pharetra vitae rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at
          malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae
          magna. Pharetra, tortor pharetra vitae rhoncus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus
          pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor
          pharetra vitae rhoncus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus
          pulvinar dolor tellus.
        </p>
      </div>
      <div>
        <h1>What you’ll Learn Here</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus
          pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor
          pharetra vitae rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at
          malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae
          magna. Pharetra, tortor pharetra vitae rhoncus.
        </p>
        <h3>On Our Website You’ll find:</h3>
        <ul>
          <li>&gt; Lorem ipsum dolor sit amet, consectetur.</li>
          <li>&gt; Lorem ipsum dolor sit amet, consectetur.</li>
          <li>&gt; Lorem ipsum dolor sit amet, consectetur.</li>
          <li>&gt; Lorem ipsum dolor sit amet, consectetur.</li>
          <li>&gt; Lorem ipsum dolor sit amet, consectetur.</li>
        </ul>
      </div>
    </Container>
  );
};

export default Stories;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  align-items: baseline;
  row-gap: 60px;
  column-gap: 47px;
  margin-top: 100px;
  h1 {
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 111.111% */
    letter-spacing: 0.54px;
    margin-bottom: 37px;
  }
  p {
    width: 640px;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 222.222% */
    letter-spacing: 0.27px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 166.667% */
    letter-spacing: 0.36px;
    margin-bottom: 38px;
  }
  li {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 10px; /* 55.556% */
    letter-spacing: 0.27px;
    list-style-type: none;
    margin-bottom: 25px;
  }
`;
