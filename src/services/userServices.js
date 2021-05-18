
export const postUser = async(user) => {
    const url = 'http://localhost:8080/api/v1/users';
    const data = JSON.stringify(user)
    console.log(user);
    
    await fetch(url, {
        method: 'POST', 
        body: data, 
        headers:{
            'Content-Type': 'application/json'
        }
    })
    
};

export const getUserByEmail = async(email) => {
    const url = `http://localhost:8080/api/v1/users/search/${email}`;
    const response = await fetch(url);
    if (response.ok){
        return response.json();
    }else{
        return null;
    }

};


 