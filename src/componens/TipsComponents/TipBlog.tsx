import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import React from "react";

const TipsBlog = () => {
  return (
    <TipsContainer>
      <h1>
        Maintaining your <span>privacy </span> during travels.
      </h1>
      <p>
        Molestie aliquam sit lacus, sem vulputate sed magnis eu. Non nec at lobortis enim, feugiat
        fermentum lobortis gravida in. Tellus tincidunt amet, egestas sit. Feugiat faucibus eu magna
        dolor, turpis dignissim. Facilisis purus nibh vitae arcu. In tellus in amet nulla. Rutrum
        orci purus neque blandit cursus volutpat nisl morbi egestas. Adipiscing porta quis turpis ut
        nulla morbi. Varius id tempor, ipsum leo. vivamus rhoncus, augue risus. Ornare posuere
        scelerisque a at. Ut nunc neque at commodo nulla egestas eros. Ullamcorper a eu nulla diam
        nec pulvinar sit dui nec. Mauris sed vestibulum vitae massa. Ac morbi ut velit ac suscipit
        id. Venenatis scelerisque tortor integer. Odio ullamcorper rutrum <span>read more</span>
      </p>
    </TipsContainer>
  );
};

export default TipsBlog;

const TipsContainer = styled.div`
  margin-top: 450px;
  display: flex;
  align-items: top;
  justify-content: center;
  margin-bottom: 88px;
  h1 {
    width: 466px;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.28px;
    color: ${defaultTheme.colors.darkblue};
    font-family: ${defaultTheme.fonts.secondary};
    margin-right: 200px;
    span {
      color: ${defaultTheme.colors.orange};
    }
  }
  p {
    width: 711px;
    text-align: justify;
    color: ${defaultTheme.colors.darkblue};
    font-family: ${defaultTheme.fonts.secondary};
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    span {
      color: ${defaultTheme.colors.orange};
    }
  }
`;
