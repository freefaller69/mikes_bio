import React from 'react';
import { Heading, Paragraph, Card } from "@microsoft/fast-components-react-msft";
import { DesignSystemDefaults } from '@microsoft/fast-components-styles-msft';
import { DesignSystemProvider } from '@microsoft/fast-jss-manager-react';
import styles from './BioSection.module.css';

const designSystem = {
  ...DesignSystemDefaults
};

let designSystemOverrides;

const BioSection = ({heading, text, backColor}) => {
  {designSystemOverrides = {
    designSystemOverrides,
    backgroundColor: backColor
  }}
  return(
    <DesignSystemProvider designSystem={designSystem}>
      <div>
        <DesignSystemProvider designSystem={designSystemOverrides}>
          <div style={{backgroundColor: designSystemOverrides.backgroundColor}}>
            <Heading
              className={styles.heading}
              tag={"h4"}
              size={4}>
              {heading}
            </Heading>
          </div>
        </DesignSystemProvider>
        <Card
          tag={"section"}>
          {text.map((p, i) => {
            return <Paragraph className={styles.text} key={i}>{p}</Paragraph>
          })}
        </Card>
    </div>
    </DesignSystemProvider>
  )
};

export default BioSection;