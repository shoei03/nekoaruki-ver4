import CircularWithValueLabel from "../../components/CircularWithValueLabel";
import TodaysCat from "../../components/TodaysCat";

export default function stepPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CircularWithValueLabel />
      <TodaysCat />
    </main>
  );
}
