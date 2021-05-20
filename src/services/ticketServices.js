export const getAllTickets = async() => {
    const url = `http://localhost:8080/api/v1/support/tickets`;
    const response = await fetch(url);
    if (response.ok){
        return await response.json()
    }else{
        return null;
    }
};
export const getAllReceptor = async() => {
    const url = `http://localhost:8080/api/v1/support/tickets/receptor`;
    const response = await fetch(url);
    if (response.ok){
        return await response.json();
    }else{
        return null;
    }
};