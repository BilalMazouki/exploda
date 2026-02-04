import ServiceRow from "./ServiceRow";

export default function ServicesList() {
  return (
    <div className="border-t border-gray-200">
      <ServiceRow
        index="01"
        title="UIUX DESIGN"
        active
      />

      <ServiceRow
        index="02"
        title="WEB DESIGN"
      />

      <ServiceRow
        index="03"
        title="MOBILE APP"
      />

      <ServiceRow
        index="04"
        title="DEVELOPMENT"
      />
    </div>
  );
}
