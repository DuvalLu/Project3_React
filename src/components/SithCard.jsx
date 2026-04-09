function SithCard({ sith }) {
  return (
    <div>
      <img
        src={sith.vanquished ? sith.jediImage : sith.sithImage}
        alt={sith.name}
        width="250"
      />
      <h2>{sith.name}</h2>
      <button>Vanquish</button>
      <button>Delete</button>
    </div>
  );
}

export default SithCard;
