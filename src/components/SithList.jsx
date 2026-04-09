import SithCard from "./SithCard";

function SithList({ sith }) {
  return (
    <div>
      {sith.map((oneSith) => (
        <div key={oneSith.id}>
          <p>{oneSith.name}</p>
          <img src={oneSith.sithImage} alt={oneSith.name} width="200" />
        </div>
      ))}
    </div>
  );
}

export default SithList;
