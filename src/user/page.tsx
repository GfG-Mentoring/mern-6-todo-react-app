import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';


const UsersPage = () => {
    const [people, setPeople] = useState([
        { name: "shikhar", age: 23, designation: 'Engg' },
        { name: "Ram", age: 23, designation: 'Engg' },
        { name: undefined, age: 23, designation: undefined },
        { name: "Ram 1", age: 23, designation: 'Engg' },
        { name: "Abc", age: 23, designation: 'Engg' },
        { name: "AB", age: 23, designation: 'Engg' },
        { name: "VC", age: 23, designation: 'Engg' },
    ]);


    const deletePerson = (index: number) => {
        const newPeople = people.filter((_, i) => i !== index);
        setPeople(newPeople);
    }

    console.log('UsersPage')

    return <>
        {people.map((person, index) =>
            <Card
                key={index}
                title={person.name}
                designation={person.designation}
                className="card"
            >
                <button onClick={() => deletePerson(index)}>Delete</button>
            </Card>
        )}
        <Outlet />
    </>
}





const Card = ({ title = 'Unknown', designation = 'Unknown', children, className }: any) => {

    console.log(children)

    return <a href={`/user/${title}`}>
        <div className={className} style={{
            border: '1px solid gray',
            padding: "0.5rem 2rem"
        }}>

            <h2>{title}</h2>
            <p>{designation}</p>
            {children}
        </div>
    </a>
}

export default UsersPage