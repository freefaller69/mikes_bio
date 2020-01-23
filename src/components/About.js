import React from 'react';
import { Page, Grid, Column } from '@microsoft/fast-layouts-react';
import { DesignSystemDefaults } from '@microsoft/fast-components-styles-msft';
import { DesignSystemProvider } from '@microsoft/fast-jss-manager-react';

import ProfileImage from './ProfileImage';
import BioSection from './BioSection';

import data from '../data';

import { JSSManager } from "@microsoft/fast-jss-manager-react";
import { create } from "jss";

const jssInstance = create();

JSSManager.jss = jssInstance;


const About = (props) => {
    const sections = data.sections;
    const designSystemOverrides = {
        backgroundColor: "#000",
        color: "#fff"
    };
    console.log('JSSManager.jss', JSSManager.jss)
    

    return(
        <DesignSystemProvider designSystem={DesignSystemDefaults}>
            <Page>
                <Grid gutter={24}>
                    <DesignSystemProvider designSystem={designSystemOverrides}>
                        <div>
                            Hellowwwww
                        </div>
                    </DesignSystemProvider>
                    <Column
                        span={data.image.span}
                        position={data.image.position}>
                        <ProfileImage imageDetail={data.image} />
                    </Column>
                    {sections.map((section) =>
                    <Column
                    key={section.id}
                    span={section.span}
                    position={section.position}>
                        <BioSection
                            heading={section.heading}
                            text={section.text} />
                    </Column>
                    )}
                </Grid>
            </Page>
        </DesignSystemProvider>
    )
}

export default About;