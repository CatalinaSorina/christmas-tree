const Emoji = ({ name, icon, style }) => (
  <span style={style} role="img" aria-label={name} className={name}>
    {icon}
  </span>
);

export default Emoji;
