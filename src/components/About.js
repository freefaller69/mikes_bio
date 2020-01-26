import React, { Component } from "react";
import { Page, Grid, Column } from "@microsoft/fast-layouts-react";

import ProfileImage from "./ProfileImage";
import BioSection from "./BioSection";

import data from "../data";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: []
        }
    }

    componentDidMount() {
        this.setState({
            sections: data.sections
        })
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
};

export default About;
