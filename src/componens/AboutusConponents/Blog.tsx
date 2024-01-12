import center from "../../assets/aboutus/center.png";
import styled from "styled-components";
import React from "react";

const Blog = () => {
  return (
    <div>
      <Image src={center} alt="center" />
      <Info>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet
          faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus
          pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor
          pharetra vitae rhoncus. Nisl quam massa sapien tempor semper. Hac tempus pellentesque nibh
          duis ultrices. Senectus sagittis id ullamcorper mi eget pellentesque egestas. In ut
          sollicitudin ut orci volutpat egestas fermentum. Sit turpis diam risus leo bibendum neque,
          quis in vitae.
        </p>
        <p>
          Praesent enim augue tellus vitae placerat purus pretium at massa. Aliquet a malesuada eget
          posuere. Pellentesque euismod nulla praesent rhoncus.
        </p>
      </Info>
    </div>
  );
};
export default Blog;

const Image = styled.img`
  width: 100%;
  height: 472px;
  margin-bottom: 55px;
`;

const Info = styled.div`
  p {
    text-align: justify;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 222.222% */
    letter-spacing: 0.27px;
  }
`;
