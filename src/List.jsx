import People from "./People";

const List = ({ people, deletePerson }) => {
    return (
        <section>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <People deletePerson={deletePerson} key={id} name={name} age={age} image={image} />
                )
            })}
        </section>
    )
}

export default List;