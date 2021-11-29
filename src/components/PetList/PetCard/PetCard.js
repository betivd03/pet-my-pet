const PetCard = ({
    pet
}) => {
    return (
        <li className="otherPet">
            <h3>Name: {pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p className="img"><img src={pet.imageUrl} alt="img" /></p>
            <a className="button" href="a">Details</a>
        </li>
    );
};

export default PetCard;
;