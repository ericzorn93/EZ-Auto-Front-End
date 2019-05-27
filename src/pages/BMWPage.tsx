import React, { Component } from 'react'
import Layout from './Layout';
import { BMW } from '../components/bmw/BMW';

export class BMWPage extends Component {
    render() {
        return (
            <Layout>
                <BMW />
            </Layout>
        )
    }
}

export default BMWPage
