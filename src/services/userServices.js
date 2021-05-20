
export const postUser = async(user) => {
    const url = `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}/api/v1/users`;
    const data = JSON.stringify(user)

    await fetch(url, {
        method: 'POST',
        body: data,
        headers:{
            'Content-Type': 'application/json'
        }
    })

};

export const postProject = async(project) => {
    const url = `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}/api/v1/projects`;
    const data = JSON.stringify(project)
    console.log(data)

    await fetch(url, {
        method: 'POST',
        body: data,
        headers:{
            'Content-Type': 'application/json'
        }
    })

};

export const getUserByEmail = async(email) => {
    const url = `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}/api/v1/users/search/${email}`;
    const response = await fetch(url);
    if (response.ok){
        return response.json();
    }else{
        return null;
    }

};


