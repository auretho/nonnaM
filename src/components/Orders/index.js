import './style.scss';

const OrderForm = () => (
    <div className="order">
        <form action="" className="order-form">
            <h1 className="order-form-title">
                Bon de commande
            </h1>
            <div className="order-form-div">
                Nom<input type="text" className="order-form-input" placeholder="Nom de famille" />
            </div>
            <div className="order-form-div">
                Prénom<input type="text" className="order-form-input" placeholder="Prénom" />
            </div>
            <div className="order-form-div">
                Email<input type="email" className="order-form-input" placeholder="Email" />
            </div>
            <button className="order-form-button">
                Valider ma commande
            </button>
        </form>
    </div>
)

export default OrderForm;