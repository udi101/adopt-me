import Pet from "./Pet";

const PetList = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h3>No Pets Found</h3>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default PetList;
