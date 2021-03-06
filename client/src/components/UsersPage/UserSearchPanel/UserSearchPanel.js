import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersWithParams } from '../../../actions/users';
import PropTypes from 'prop-types';
import _ from 'lodash';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './UsersSearchPanel.scss';
import SearchIcon from '@material-ui/icons/Search';

class UserSearchPanel extends Component {
  static propTypes = {
    getUsersWithParams: PropTypes.func.isRequired,
  };
  state = {
    search: '',
  };

  handleOnInputChange = _.debounce((search) => {
    this.setState({ search: search });
    this.props.getUsersWithParams({ search });
  }, 700);

  render() {
    return (
      <div className={s.searchPanel}>
        <div className={s.searchPanelDiv}>
          <input
            className={s.searchPanelInput}
            type="text"
            value={this.state.query}
            placeholder="SearchSearch..."
            onChange={(e) => this.handleOnInputChange(e.target.value)}
          />
          <SearchIcon />
        </div>
      </div>
    );
  }
}

UserSearchPanel.whyDidYouRender = true;
export default connect(
  ({ users: { data, error, isLoading } }) => ({
    data,
    error,
    isLoading,
  }),
  { getUsersWithParams },
)(withStyles(s)(React.memo(UserSearchPanel)));

{
  /* <button className={s.searchPanelIcon} onClick={this.fetchData}>
<SearchIcon style={{ color: 'white' }} />
</button> */
}
