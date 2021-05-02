import React from 'react';
import {ProjectsGrid} from "../../components";

export const ProjectsGridPage = () => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const data = await fetch(`${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}/api/v1/projects`).then(res => {
                return res.json();
            });

            setItems(data);
            console.log(data);
        }

        fetchData();
    }, []);

    return (
        <ProjectsGrid projects={items}/>
    );
}
