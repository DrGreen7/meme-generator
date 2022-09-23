import memesData from "../memesData";

export default function Meme() {
  function handleOnClick() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    console.log(url);
  }
  return (
    <div className="form">
      <div className="container">
        <input type="text" placeholder="Top text" />
        <input type="text" placeholder="Bottom text" />
      </div>
      <button onClick={handleOnClick} className="btn">
        Get new meme image
      </button>
    </div>
  );
}
