import { Header } from './Header';

// Вариант с connect

// import { connect } from 'react-redux';
// import { clearUserAC } from '../../../store/actions/user.actions';

// const mapStateToProps = (state) => ({
//   user: state.user.user,
// });
//
// const mapDispatchToProps = {
//   clearUser: clearUserAC,
// };
//
// const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
//
// export { ConnectedHeader as Header };
export { Header };
