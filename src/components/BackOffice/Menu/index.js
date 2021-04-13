import { NavHashLink } from 'react-router-hash-link';
import { Menu } from 'semantic-ui-react';
import './style.scss';

const MenuBar = ({activeMenuItem, handleChange}) => {

    const handleMenuItemChange = (evt, {name}) => {
      console.log(name);
        handleChange({activeMenuItem: name})
    }
    
    return(
    <div className="menu">
        <Menu pointing>
          <NavHashLink smooth to="/backoffice">
            <Menu.Item
              // href="/backoffice"
              name='home'
              active={activeMenuItem === 'home'}
              onClick={handleMenuItemChange}
            />
          </NavHashLink>
          <NavHashLink smooth to="/backoffice/produits">
            <Menu.Item
              // href="/backoffice/produits"
              name='produits'
              active={activeMenuItem === 'produits'}
              onClick={handleMenuItemChange}
            />
          </NavHashLink>
          <NavHashLink smooth to="/backoffice/stock">
            <Menu.Item
              // href="/backoffice/stock"
              name='stock'
              active={activeMenuItem === 'stock'}
              onClick={handleMenuItemChange}
            />
          </NavHashLink>
          <NavHashLink smooth to="/backoffice/photos">
            <Menu.Item              
              // href="/backoffice/photos"
              name='photos'
              active={activeMenuItem === 'photos'}
              onClick={handleMenuItemChange}
            />
          </NavHashLink>
        </Menu>
    </div>
)}

export default MenuBar;