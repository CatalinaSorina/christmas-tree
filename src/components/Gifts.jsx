import Emoji from "./Emoji";

const emojiName = "gift";
const emojiIcon = "🎁";

const Gifts = () => (
  <>
    <Emoji
      name={emojiName}
      icon={emojiIcon}
      style={{ left: "calc(50% - 40px)", fontSize: "45px" }}
    />
    <Emoji
      name={emojiName}
      icon={emojiIcon}
      style={{ left: "calc(50% + 40px)", fontSize: "30px" }}
    />
    <Emoji
      name={emojiName}
      icon={emojiIcon}
      style={{ left: "50%", fontSize: "50px" }}
    />
  </>
);

export default Gifts;
