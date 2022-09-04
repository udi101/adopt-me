const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{animal}</h3>
      <h3>{breed}</h3>
    </div>
  );
};

export default Pet;
