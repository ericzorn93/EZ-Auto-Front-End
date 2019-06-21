import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

export class BMW extends Component {
    render() {
        return (
            <div>
                <h1>BMW</h1>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    bmwData: state.cars.bmw
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BMW)
