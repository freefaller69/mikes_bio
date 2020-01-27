import React, { Component } from "react";
import { Page, Grid, Column } from "@microsoft/fast-layouts-react";
import { Select, SelectOption } from "@microsoft/fast-components-react-msft";
import Heading from "@microsoft/fast-components-react-msft/dist/heading/heading";

import ProfileImage from "./ProfileImage";
import BioSection from "./BioSection";
import styles from './About.module.css';

import data from "../data";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [],
      selectedSection: 1,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      sections: data.sections,
    });
  }

  handleChange(event) {
    this.setState({
      selectedSection: event
    });
  }

  render() {
    return (
      <Page>
        <Grid gutter={24}>
          <Column
            span={data.image.span}
          >
            <ProfileImage imageDetail={data.image} />
          </Column>
          <Column
            className={styles.mainHeader}
            span={7}
          >
            <Heading
              tag={'h1'}
              size={1}
            >
              Meet Mike
            </Heading>
              <Select
                placeholder={"Early Years"}
                onValueChange={this.handleChange}
              >
                {this.state.sections.map(section => {
                  return (
                    <SelectOption
                      key={section.id}
                      id={section.id}
                      value={section.id}
                      displayString={section.heading}
                    />
                  );
                })}
              </Select>
          </Column>
          {this.state.sections.map(section => {
            if (section.id === this.state.selectedSection) {
              return (
                <Column
                  key={section.id}
                  span={section.span}
                >
                  <BioSection heading={section.heading} text={section.text} />
                </Column>
              );
            }
          })}
        </Grid>
      </Page>
    );
  }
}

export default About;
