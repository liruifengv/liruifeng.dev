/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

const colors = [
  "#ff80ed",
  "#065535",
  "#ff0000",
  "#008080",
  "#ffc0cb",
  "#b0e0e6",
  "#ffc3a0",
  "#66cdaa",
  "#3399ff",
  "#a0db8e",
  "#808080"
] as readonly string[];

export default function Home() {
  return (
    <div
      class={tw`flex flex-col items-center justify-center w-full h-screen`}
      style="background-image:url('https://dash.deno.com/assets/background-pattern.svg')"
    >
      <h1 class={tw`text-4xl font-bold`}>Hello <span style={ `color: ${colors[crypto.getRandomValues(new Uint32Array(1))[0] % colors.length]}` }>liruifeng</span>!</h1>
    </div>
  );
}
