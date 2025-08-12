import type { CMSData } from "../cmsData";

interface Props {
  cmsData: CMSData;
}

export default function CMSViewer({ cmsData }: Props) {
  return (
    <div style={{ background: "#f5f5f5", padding: "1rem", marginTop: "1rem" }}>
      <h3>CMS JSON Data</h3>
      <pre>{JSON.stringify(cmsData, null, 2)}</pre>
    </div>
  );
}
