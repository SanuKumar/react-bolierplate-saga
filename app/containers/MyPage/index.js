import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';

import { bindActionCreator } from 'redux';
import { connect } from 'react-redux';
import messages from './messages';
import { requestApiData } from './actions';

class MyPage extends Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    {
      console.log(this.props);
    }
    return (
      <div>
        <Helmet>
          <title>My Page</title>
          <meta
            name="description"
            content="My page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myPageReducer: state.users,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreator(
//     {
//       requestApiData,
//     },
//     dispatch,
//   );

export default connect(
  mapStateToProps,
  //
  { requestApiData },
)(MyPage);
