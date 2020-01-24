import React from 'react';
import { Heading, Paragraph } from "@microsoft/fast-components-react-msft";
import { DesignSystemDefaults } from '@microsoft/fast-components-styles-msft';
import { DesignSystemProvider } from '@microsoft/fast-jss-manager-react';

const designSystem = {
  ...DesignSystemDefaults
};

const designSystemOverrides = {
  ...designSystem,
  backgroundColor: "#000",
};

const BioSection = ({heading, text}) => {
    
  return(
    <DesignSystemProvider designSystem={designSystem}>
      <div>
        <DesignSystemProvider designSystem={designSystemOverrides}>
          <div style={{backgroundColor: designSystemOverrides.backgroundColor}}>
            <Heading
              tag={"h4"}
              size={4}>
              {heading}
            </Heading>
          </div>
        </DesignSystemProvider>
        {text.map((p, i) =>
          <Paragraph key={i}>{p}</Paragraph>
          )}
    </div>
    </DesignSystemProvider>
  )
};

export default BioSection;