import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Grid>
          <Row between="md" middle="xs">
            <Col md={3} lg={2}>
              <Link to='/'>
                <div className={styles.logo}>
                  <span className={styles.name}>Pizza Portal Inside</span>
                </div>
              </Link>
            </Col>
            <Col md={6}>
              <nav>
                <NavLink to={`/Login`} activeClassName='active'>Login</NavLink>
                <NavLink to={`/tables`} activeClassName='active'>Tables</NavLink>
                <NavLink to={`/tables/booking/:id`} activeClassName='active'>BookedTable</NavLink>
                <NavLink to={`/tables/event/:id`} activeClassName='active'>BookedEvent</NavLink>
                <NavLink to={`/ordering`} activeClassName='active'>OrderForm</NavLink>
                <NavLink to={`/ordering/new`} activeClassName='active'>CreateOrder</NavLink>
                <NavLink to={`/ordering/order/:id`} activeClassName='active'>TableOrder</NavLink>
                <NavLink to={`/kitchen`} activeClassName='active'>Kitchen</NavLink>
              </nav>
            </Col>
            <Col md={3} lg={2}>
              <div className={styles.contact}>
              </div>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}

export default Header;
