import './style.scss';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const BackOffice = ({stock, handleStockEdit}) => {
    
    const handleEdit = (e) => {
        console.log(stock)
        handleStockEdit('12');

        //TEST
        const el = document.querySelector('.row-stock > span');
        const input = document.createElement("input");
        input.setAttribute("value", el.textContent);
        el.replaceWith(input);
    }

    return(
    <div className="backOffice">
        <div className="backOffice-container">
            <h1 className="backOffice-title">
                Liste de tous les produits disponibles:
            </h1>
            <div className="backOffice-row">
                <h2>Tomates</h2>
                <p className="row-stock">
                    Stock: <span>12</span>
                </p>
                <div className="backOffice-row-icons">
                    <EditIcon 
                        className="backOffice-row-icon" 
                        id="edit"
                        style={{fontSize: '40'}}
                        onClick={handleEdit}
                    />
                    <DeleteIcon 
                    className="backOffice-row-icon" 
                    id="delete"
                    style={{fontSize: '40'}}
                    />
                </div>
            </div>
        </div>
    </div>
)}

export default BackOffice;