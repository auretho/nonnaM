import { Menu } from 'semantic-ui-react';
import {Link, Redirect} from 'react-router-dom';
import './style.scss';

const MenuBar = ({activeMenuItem, handleChange}) => {

    const handleMenuItemChange = (evt, {name}) => {
        handleChange({activeMenuItem: name})
    }
    
    return(
    <div className="menu">
        <Menu pointing>
          <Link to="/backoffice">
            <Menu.Item
              name='home'
              active={activeMenuItem === 'home'}
              onClick={handleMenuItemChange}
            />
          </Link>

          {/* <Link to="/backoffice/produits"> */}
            <Menu.Item
              name='produits'
              active={activeMenuItem === 'produits'}
              onClick={handleMenuItemChange}
            />
          {/* </Link> */}

          {/* <Link to="/backoffice/stock"> */}
            <Menu.Item
              name='stock'
              active={activeMenuItem === 'stock'}
              onClick={handleMenuItemChange}
            />
          {/* </Link> */}

          {/* <Link to="/backoffice/photos"> */}
            <Menu.Item
              name='photos'
              active={activeMenuItem === 'photos'}
              onClick={handleMenuItemChange}
            />
          {/* </Link> */}
        </Menu>
    </div>
)}

export default MenuBar;