function HogGrid({ hogs = [], onHide }) {
  return (
    <>
      {hogs.map((hog) => (
        <div key={hog.name} className="ui eight wide column">
          <HogCard hog={hog} onHide={onHide} />
        </div>
      ))}
    </>
  );
}




