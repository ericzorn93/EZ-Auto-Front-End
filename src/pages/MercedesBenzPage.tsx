import React, { Component } from 'react'

import Layout from './Layout';
import MercedesBenz from '../components/mercedezBenz/MercedesBenz';

export class MercedesBenzPage extends Component {
    render() {
        return (
            <Layout>
                <MercedesBenz />
            </Layout>
        )
    }
}

export default MercedesBenzPage
