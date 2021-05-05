import React from 'react';
import {ProjectsItems} from "../../components";

export const ProjectsGridPage = ({testing, objects}) => {
    const [items, setItems] = React.useState(objects);
    React.useEffect(() => {
        async function fetchData() {
            const data = testing ? objects : await fetch(`${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}/api/v1/projects`).then(res => {
                return res.json();
            });

            setItems(data);
            console.log(data);
        }

        fetchData();
    }, [testing, objects]);
    console.log(items)
    return (
        <ProjectsItems projects={items}/>
    );
}
