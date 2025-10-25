import React from 'react';
import styled from 'styled-components';

const Title = styled.h4`
  color: #3877ee;
  font-size: 25px;
`;
const Paragraph = styled.div`
  margin-top: 15px;
  color: #42567a;
  font-size: 20px;
`;

const TimeCard = styled.div`
  width: 320px;
  padding: 3px;
`;

const Timecard = ({
  year,
  description
}: {
  year: number;
  description: string;
}): React.JSX.Element => {
  return (
    <TimeCard>
      <Title>{year}</Title>
      <Paragraph>{description}</Paragraph>
    </TimeCard>
  );
};

export default Timecard;
