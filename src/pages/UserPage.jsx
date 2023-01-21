import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
    const params = useParams();

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then((response) => response.json())
            .then((data) => setUser(data))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return (
            <h2>Идет загрузка пользователя с номером {params.id}</h2>
        )
    }

    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    )
}

export default UserPage;