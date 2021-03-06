import React from 'react'
import {Link} from 'react-router-dom'
import {routes} from '../../config/route'
import {connect} from 'react-redux'
import {logout as logoutAction} from '../../actions/user'

class Header extends React.PureComponent {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <Link className="nav-link" to={routes.home}>Chợ xe</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                  aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              {this.props.user.id ? (
                <React.Fragment>
                  <li className="nav-item">
                    <Link to={routes.product.create}>Rao bán oto</Link>
                  </li>
                  <li className="nav-item ml-2">
                    <Link to={routes.changePassword}>Đổi mật khẩu</Link>
                  </li>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to={routes.register}>Đăng ký</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={routes.login}>Đăng nhập</Link>
                  </li>
                </React.Fragment>
              )}
            </ul>
            {this.props.user.id && (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" onClick={this.props.logout}>Đăng xuất</a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({user})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)