import React from 'react';
import { Page, Grid, Column } from '@microsoft/fast-layouts-react';

import ProfileImage from './ProfileImage';
import BioSection from './BioSection';

import data from '../data';

const About = (props) => {
    const sections = data.sections;

    return(
        <Page>
            <Grid gutter={24}>
                <Column
                    span={data.image.span}
                    // position={data.image.position}
                    >
                    <ProfileImage imageDetail={data.image} />
                </Column>
                {sections.map((section) =>
                <Column
                key={section.id}
                span={section.span}
                // position={section.position}
                >
                    <BioSection
                        heading={section.heading}
                        text={section.text} />
                </Column>
                )}
            </Grid>
        </Page>
    )
}

export default About;