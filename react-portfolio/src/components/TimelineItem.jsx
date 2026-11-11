function TimelineItem({ entry }) {
  return (
    <div className="tl-item">
      <div className="tl-when">{entry.when}</div>
      <div className="tl-what">{entry.what}</div>
      <div className="tl-where">{entry.where}</div>
    </div>
  );
}

export default TimelineItem;
