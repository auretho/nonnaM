import './style.scss';

const OrderForm = ({details, handleSubmit}) => {
    console.log(details);
    
    const handleOrderSubmit = (evt) => {
        evt.preventDefault();

        const data = {
            lastname: details.lastname,
            firstname: details.firstname,
            email: details.email,
        }
        handleSubmit();
    }
    
    return(
    <div className="order">
        <form action="" className="order-form" onSubmit={handleOrderSubmit}>
            <h1 className="order-form-title">
                Bon de commande
            </h1>
            <div className="order-form-div">
                Nom<input type="text" className="order-form-input" id="subject" placeholder="Nom de famille" value={details.lastname}/>
            </div>
            <div className="order-form-div">
                Prénom<input type="text" className="order-form-input" id="text" placeholder="Prénom" value={details.firstname}/>
            </div>
            <div className="order-form-div">
                Email<input type="email" className="order-form-input" id="email" placeholder="Email" value={details.email}/>
            </div>
            <button type="submit" className="order-form-button">
                Valider ma commande
            </button>
        </form>
    </div>
)}

export default OrderForm;