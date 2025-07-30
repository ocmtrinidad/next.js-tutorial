import { serverFunction } from "@/utils/server-utils";
import ImageSlider from "../components/slider";

// Using server side (serverFunction) AND client side (ImageSlider) code.
export default function ServerRoutePage() {
  const result = serverFunction();
  return (
    <>
      <h1>Server route {result}</h1>
      <ImageSlider />
    </>
  );
}
