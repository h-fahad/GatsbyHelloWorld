import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image'

export default () => {
    return (
        <div>
            <Layout>
                <Header text="This is a heading" subtext="The is the sub heading"></Header>
                <p>This is my home page</p>
                <StaticImage
                    alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                    src="../images/E1oMV3QVgAIr1NT.webp"
                />
            </Layout>
        </div>
    );
}