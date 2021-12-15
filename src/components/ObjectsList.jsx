const ObjectsList = ({ name, length, liStyle }) => (
  <ul className={name}>
    {[...Array(length)].map((o, i) => (
      <li key={i + name} style={liStyle} />
    ))}
  </ul>
);

export default ObjectsList;
