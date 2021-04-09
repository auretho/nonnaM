import { Menu } from 'semantic-ui-react';
import './style.scss';

const MenuBar = ({activeMenuItem, handleChange}) => {

    const handleMenuItemChange = (evt, {name}) => {
        handleChange({activeMenuItem: name})
    }
    
    return(
    <div className="menu">
        <Menu pointing>
            <Menu.Item
              href="/backoffice"
              name='home'
              active={activeMenuItem === 'home'}
              onClick={handleMenuItemChange}
            />

            <Menu.Item
              href="/backoffice/produits"
              name='produits'
              active={activeMenuItem === 'produits'}
              onClick={handleMenuItemChange}
            />

            <Menu.Item
              href="/backoffice/stock"
              name='stock'
              active={activeMenuItem === 'stock'}
              onClick={handleMenuItemChange}
            />

            <Menu.Item              
              href="/backoffice/photos"
              name='photos'
              active={activeMenuItem === 'photos'}
              onClick={handleMenuItemChange}
            />
        </Menu>
    </div>
)}

export default MenuBar;