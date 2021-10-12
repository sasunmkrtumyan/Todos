import "./App.css";
import Description from "./components/Description";
import ImageSection from "./components/ImageSection";

export default function App() {
  return (
    <div className="card">
      <ImageSection />
      <Description />
    </div>
  );
}
