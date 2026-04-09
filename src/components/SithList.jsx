import SithCard from "./SithCard";

function SithList({ sith }) {
  return (
    <div>
      {sith.map((oneSith) => (
        <p key={oneSith.id}>{oneSith.name}</p>
      ))}
    </div>
  );
}

export default SithList;
