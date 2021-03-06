/**
 * Created by 叶子 on 2017/7/31.
 */
import { Component } from 'react';
import { connect } from 'react-redux';

class AuthWidget extends Component {
    render() {
        return this.props.children(this.props.auth.data || {});
    }
}

const mapStateToProps = state => {
    const { auth = {data: {}} } = state.httpData;
    console.log(state)
    console.log(auth)
    return { auth };
};

export default connect(mapStateToProps)(AuthWidget);