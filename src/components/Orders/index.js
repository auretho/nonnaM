import './style.scss';

const OrderForm = () => (
    <div className="order">
        <form action="" className="order-form">
            <div className="order-form-div">
                Nom<input type="text" className="order-form-item" placeholder="Coucou" />
            </div>
            <div className="order-form-div">
                Prénom<input type="text" className="order-form-item" placeholder="Coucou" />
            </div>
            <div className="order-form-div">
                Email<input type="text" className="order-form-item" placeholder="Coucou" />
            </div>
        </form>
    </div>
)

export default OrderForm;