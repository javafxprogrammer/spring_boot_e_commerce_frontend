const URL = "http://localhost:9091/e_commerce_api/v1/";

const getCustomer = async (phone) => {
    const link = phone !== undefined ? `${URL}customer/select/phone/${phone}` : `${URL}customer`;
    const request = await fetch(link);
    const data = await request.json();
    if (request.status !== 200) {
        throw new Error(JSON.stringify(data));
    }
    return data;
}

const addCustomer = async (customer) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(customer)
    };
    const request = await fetch(`${URL}customer/create`, options);
    const data = await request.json();
    if (request.status !== 201) {
        throw new Error(JSON.stringify(data));
    }
    return data;
}

const deleteCustomer = async (phone) => {
    const options = {
        method: "DELETE"
    };
    const request = await fetch(`${URL}customer/delete/phone/${phone}`, options);
    const data = await request.json();
    if (request.status !== 200) {
        throw new Error(JSON.stringify(data));
    }
    return data;
}

const editCustomer = async (phone, customer) => {
    const options = {
        method: "PUT",
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body:JSON.stringify(customer)
    }
    const response = await fetch(`${URL}customer/update/phone/${phone}`, options);
    const data = await request.json();
    if(response.status !== 200){
        throw new Error(JSON.stringify(data));
    }
    return data;
}

const customer = {
    firstName: "kane",
    lastName: "philip",
    phoneNumber: "0957003441",
    account: { balance: 3001 }
};

const customer1 = {
    firstName: "Taz",
    lastName: "Ramsey",
    phoneNumber: "0966003441",
    account: { balance: 7000 }
};

// addCustomer(customer)
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// deleteCustomer("0957003441")
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

getCustomer()
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error.message));



const old_phone = "0957003441";
// editCustomer(old_phone, customer1);

