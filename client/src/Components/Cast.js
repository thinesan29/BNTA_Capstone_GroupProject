const Cast = ({cast,onDelete}) => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      const pics = importAll(require.context('../pics/Cast', false, /\.(png|jpg|svg)$/));
    return (
        <div className="cast">
            <img id="image" src={pics[`${cast.name}.jpg`]} alt={cast.name}/>
            <h3>{cast.name}</h3>
            <p>Actor's Age: {cast.age}</p>
            <p>Actor's Bio: {cast.bio}</p>
            
            <button onClick={() => onDelete(cast.id)}>Remove Actor</button>
        </div>
    )


}

export default Cast;