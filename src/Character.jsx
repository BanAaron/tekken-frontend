const Character = (props) => {
  return (
    <div>
      <p>{props.id}, {props.full_name}, {props.sex}</p>
    </div>
  );
};

export default Character;
