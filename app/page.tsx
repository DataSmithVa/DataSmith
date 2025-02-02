import UnderMaint from "./ui/under_maint";

// DEV
import PunchClock from "./ui/punch_clock";

export default function Home() {
  return (
    <div>
      <PunchClock />
      <UnderMaint />
    </div>
  );
}
