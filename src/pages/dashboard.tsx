import { Container } from "../components/Container";

import Summary from "../components/dashboard/Summary";
import Analytics from "../components/dashboard/Analytics";

export default function Dashboard() {
  return (
    <Container>
      <Summary />
      <Analytics />
    </Container>
  );
}
