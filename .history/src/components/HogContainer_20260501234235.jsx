import HogCard from "./HogCard";

function HogContainer({ hogs, onHideHog }) {
  return (
    <div>
      {hogs.map((hog) => (
        <HogCard
          key={hog.name}
          hog={hog}
          onHideHog={onHideHog}
        />
      ))}
    </div>
  );
}

export default HogContainer;h