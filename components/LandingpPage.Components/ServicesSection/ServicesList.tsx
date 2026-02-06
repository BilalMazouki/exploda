import ServiceRow from "./ServiceRow";

type Props = {
  activeIndex: number | null;
  onChange: (index: number | null) => void;
};

export default function ServicesList({ activeIndex, onChange }: Props) {
  return (
    <div className="border-t border-gray-200 w-full">
      <ServiceRow
        index="01"
        title="UIUX DESIGN"
        isOpen={activeIndex === 0}
        onClick={() =>
          onChange(activeIndex === 0 ? null : 0)
        }
      />

      <ServiceRow
        index="02"
        title="WEB DESIGN"
        isOpen={activeIndex === 1}
        onClick={() =>
          onChange(activeIndex === 1 ? null : 1)
        }
      />

      <ServiceRow
        index="03"
        title="MOBILE APP"
        isOpen={activeIndex === 2}
        onClick={() =>
          onChange(activeIndex === 2 ? null : 2)
        }
      />

      <ServiceRow
        index="04"
        title="DEVELOPMENT"
        isOpen={activeIndex === 3}
        onClick={() =>
          onChange(activeIndex === 3 ? null : 3)
        }
      />
    </div>
  );
}
