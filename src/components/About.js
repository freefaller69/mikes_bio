import React, { Component } from "react";
import { Page, Grid, Column } from "@microsoft/fast-layouts-react";
import { Select, SelectOption } from "@microsoft/fast-components-react-msft";

import ProfileImage from "./ProfileImage";
import BioSection from "./BioSection";

import data from "../data";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
      activeSection: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      sections: data.sections,
      activeSection: 1
    });
  }

  handleChange(event) {
    // this.setState({activeSection: event.target.value});
    console.log('event', event);
  }

  handleSubmit(event) {
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Page>
        <Grid gutter={24}>
          <Column
            span={data.image.span}
          // position={data.image.position}
          >
            <ProfileImage imageDetail={data.image} />
          </Column>
          <Column span={7}>
            <form onSubmit={this.handleSubmit}>
              <Select
                placeholder={"Select a section"}
                onChange={this.handleChange}
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

            </form>
          </Column>
          {/* <Column>
            <BioSection heading={section.heading} text={section.text} />
          </Column> */}
          {this.state.sections.map(section => {
            return (
              <Column
                key={section.id}
                span={section.span}
              // position={section.position}
              >
                <BioSection heading={section.heading} text={section.text} />
              </Column>
            );
          })}
        </Grid>
      </Page>
    );
  }
}

export default About;
