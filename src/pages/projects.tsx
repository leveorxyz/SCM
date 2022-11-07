import firefly from "../lib/firefly";

export default function ProjectPage() {
  return (
    <div>
      <h1>Project</h1>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await firefly.queryContractAPI("SCProtocol", "getProjects", {});
  console.log(data.output);

  return {
    props: {},
  };
}
