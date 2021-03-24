import './style.scss';

const Orders = ({form, handleChange, handleSubmit}) => {
    
    const handleInputChange = (evt) => {
        const {name, value} = evt.target;
        handleChange({
            [name] : value,
        })
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        handleSubmit();
    }


    return(
    <div className="order">
        <form action="" className="order-form" onSubmit={handleFormSubmit}>
            <h1 className="order-form-title">
                Bon de commande
            </h1>
            <div className="order-form-div">
                Nom<input type="text" 
                          name="lastname" 
                          className="order-form-input" 
                          placeholder="Nom de famille" 
                          value={form.lastname}
                          onChange={handleInputChange} />
            </div>
            <div className="order-form-div">
                Prénom<input type="text" 
                          name="firstname" 
                          className="order-form-input" 
                          placeholder="Prénom" 
                          value={form.firstname}
                          onChange={handleInputChange} />
            </div>
            <div className="order-form-div">
                Email<input type="email" 
                          name="email" 
                          className="order-form-input" 
                          placeholder="Email" 
                          value={form.email}
                          onChange={handleInputChange} />
            </div>
            <button className="order-form-button">
                Valider ma commande
            </button>
        </form>
    </div>
)}

export default Orders;