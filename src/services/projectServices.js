export const postProject = async(project) => {
    const url = 'http://localhost:8080/api/v1/users'; const data = JSON.stringify(project)
    console.log(data)

    await fetch(url, {
        method: 'POST',
        body: data,
        headers:{
            'Content-Type': 'application/json'
        }
    })

};
