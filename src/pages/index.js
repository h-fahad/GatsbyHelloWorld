import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

export default () => {
    return (
        <div>
            <Layout>
                <p>This is my home page</p>
                <StaticImage
                    alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                    src="../images/E1oMV3QVgAIr1NT.webp"
                />
            </Layout>
        </div>
    );
}

export const Head = () => <Seo title="Home Page" />