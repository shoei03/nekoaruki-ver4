import CircularWithValueLabel from "../../components/CircularWithValueLabel";
import TodaysCat from "../../components/TodaysCat";

export default function stepPage() {
  return (
    <main className="flex flex-col items-center justify-around px-4">
      <CircularWithValueLabel />
      <TodaysCat />
    </main>
  );
}
