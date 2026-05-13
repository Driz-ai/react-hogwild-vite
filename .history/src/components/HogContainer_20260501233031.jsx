import HogCard from "./HogCard";

export default function HogContainer({ hogs, onHideHog }) {
  return (
    <div>
      {hogs.map((hog) => (
        <HogCard key={hog.name} hog={hog} onHideHog={onHideHog} />
      ))}
    </div>
  );
}

HogContainer;