import React, { Component } from 'react';
import { Heading, Paragraph, Card } from "@microsoft/fast-components-react-msft";
import { DesignSystemDefaults } from '@microsoft/fast-components-styles-msft';
import { DesignSystemProvider } from '@microsoft/fast-jss-manager-react';
import { AnimateFrom, AnimateGroup } from '@microsoft/fast-animation';

import styles from './BioSection.module.css';

class BioSection extends Component{
  constructor(props) {
    super(props);
    this.backColor = this.props.backColor;
    this.designSystem = {
      ...DesignSystemDefaults
    };
    
    this.designSystemOverrides = {
      ...this.designSystem,
      backgroundColor: this.backColor
    };
  }

  componentDidMount() {
    const headEl = document.querySelector('h4');
    const sectionNodes = document.querySelectorAll('section');
    const sectionEl = sectionNodes.item(0);
    console.log('sectionEl', sectionEl);
    const animation1 = new AnimateFrom(headEl, { x: "100%", scale: [0, 1], opacity: 0 }, { duration: 1000 });
    const animation2 = new AnimateFrom(sectionEl, { scale: [1, 0], transformOrigin: 'top' }, { duration: 1000 });
    const mySequence = new AnimateGroup([
      animation1,
      animation2
    ]);
    mySequence.play();
  }
  
  render() {
    return(
      <DesignSystemProvider designSystem={this.designSystem}>
        <div>
          <DesignSystemProvider designSystem={this.designSystemOverrides}>
            <div style={{backgroundColor: this.designSystemOverrides.backgroundColor}}>
              <Heading
                className={styles.heading}
                tag={"h4"}
                size={4}>
                {this.props.heading}
              </Heading>
            </div>
          </DesignSystemProvider>
          <Card
            tag={"section"}>
            {this.props.text.map((p, i) => {
              return <Paragraph className={styles.text} key={i}>{p}</Paragraph>
            })}
          </Card>
      </div>
      </DesignSystemProvider>
    )
  }
};

export default BioSection;