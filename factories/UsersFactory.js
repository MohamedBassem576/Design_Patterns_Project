import Customer from "../users/Customer.js";
import CustomerService from "../users/CustomerService.js";
import ProductSeller from "../users/ProductSeller.js";

const userTypes = {CUSTOMER : "CUSTOMER", CUSTOMER_SERVICE : "CUSTOMER_SERVICE", PRODUCT_SELLER : "PRODUCT_SELLER"};

class UsersFactory {

    createUser(type)
    {
        if(type === userTypes.CUSTOMER)
            return new Customer();
        if(type === userTypes.CUSTOMER_SERVICE)
            return new CustomerService();
        if(type === userTypes.PRODUCT_SELLER)
            return new ProductSeller();        
    }

}

export default UsersFactory;

