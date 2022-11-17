import Gallery from "./Gallery.js";

export default function StateIsolatedAndPrivate() {
  return (
    <div className="Page">
      <Gallery />
      <Gallery />
    </div>
  );
}
