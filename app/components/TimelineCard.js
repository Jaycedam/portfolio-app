export default function TimelineCard(props) {
  // use with a ul wrapper
  return (
    <div className="theme-card" id={props.id}>
      <p className="font-light text-sm">{props.type}</p>
      <div className="flex items-center gap-2">
        <h2 className="font-extrabold text-lg">{props.title}</h2>
        <p className="text-sm font-light">{props.date}</p>
      </div>
      <p>{props.desc}</p>
    </div>
  );
}
