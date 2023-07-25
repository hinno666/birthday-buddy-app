
const People = ({ id, name, age, image, deletePerson }) => {

    return (
        <article key={id} className='person'>
            <img src={image} alt={name} className='img' />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
            <button onClick={deletePerson} type="button" className="btn">delete</button>
        </article>
    );
}

export default People;