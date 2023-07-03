import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo'

export default () => {
    return (
        <div>
            <Layout> 
                <p>Panacloud develops internet scale global apps using JAMstack and multi-cloud </p>
            </Layout>
        </div>
    );
}
export const Head = () => <Seo title="About" />
