import React from 'react';
import {ProjectsItems} from "../../components";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export const ProjectsGridPage = ({testing, objects, size}) => {
    const [items, setItems] = React.useState(objects);
    const {height, width} = useWindowDimensions() || {size};

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
        <div style={{paddingLeft: (width < 960 ? 0 : width * 0.22), paddingTop: (height * 0.1)}}>
            <ProjectsItems projects={items}/>
        </div>

    );
}
