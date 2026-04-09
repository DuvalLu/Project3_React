import SithCard from "./SithCard";

function SithList({ sith }) {
  return (
    <div>
      {sith.map((oneSith) => (
        <SithCard key={oneSith.id} sith={oneSith} />
      ))}
    </div>
  );
}

export default SithList;
