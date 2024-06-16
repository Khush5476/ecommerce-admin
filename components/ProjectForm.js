
import {useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";


export default function ProjectForm ({_id,Title:existingTitle,Description:existingDescription,Price:existingPrice}) {

    const [Title, setTitle] = useState(existingTitle || '');
    const [Description, setDescription] = useState(existingDescription || '');
    const [Price, setPrice] = useState(existingPrice || '');
    const [GoToProjects, setGoToProjects] = useState(false);
    const router = useRouter();
    async function saveProject(ev) {
        ev.preventDefault();
        const data = {Title,Description,Price};
        if (_id) {
            await axios.put('/api/projects', {...data,_id});
        }
        else{
            await axios.post('/api/projects', data);
        }
        setGoToProjects(true);

    }
    if(GoToProjects){
        router.push('/projects');
    }
    return (

            <form onSubmit={saveProject}>
                <label>Project Name</label>
                <input type="text" placeholder="Project name" value={Title} onChange={ev => setTitle(ev.target.value)} />
                <label>Description</label>
                <textarea placeholder="Description" value={Description} onChange={ev => setDescription(ev.target.value)} />
                <label>Price (CAD)</label>
                <input type="number" placeholder="Price" value={Price} onChange={ev => setPrice(ev.target.value)} />
                <button type="submit" className="btn-primary">Save</button>
            </form>
    );

}