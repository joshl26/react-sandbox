import { ShowProfile } from "./ImportExportComponent";

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function FirstComponent() {
  return (
    <section>
      <h1>First Component</h1>
      <Profile />
      <Profile />
      <Profile />
      <h1>Imported Function</h1>
      <ShowProfile />
    </section>
  );
}
