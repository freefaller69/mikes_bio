import React from 'react';
import { Heading, Paragraph } from "@microsoft/fast-components-react-msft";

const BioSection = ({heading, text}) => {
    
  return(
    <div>
      <Heading
        tag={"h4"}
        size={4}>
        {heading}
      </Heading>
      {text.map((p) =>
        <Paragraph>{p}</Paragraph>
        )}
    </div>
  )
};

export default BioSection;