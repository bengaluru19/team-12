import React from 'react';
import history from './../../history';



class Logout extends React.Component {
    componentWillMount() {
        localStorage.removeItem('token');
        //   window.location.reload();
        history.push('/');
    }
    render() {
        return (
            <p>Login again</p>
        );
    }
}

export default Logout;