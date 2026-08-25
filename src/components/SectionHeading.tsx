export function SectionHeading({
  tag,
  title,
  children,
  id,
}: {
  tag: string;
  title: string;
  children: string;
  id: string;
}) {
  return (
    <div id={id} className="max-w-107.5 mx-auto mb-12.5 text-center">
      <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#171717] text-[#9b9b9b] uppercase tracking-wider text-[10px] font-bold">
        {tag}
      </span>
      <h2 className="font-light tracking-tighter mt-4.5 mb-3 text-[32px]">{title}</h2>
      <p className="text-[#858585] text-[17px] font-semibold leading-[1.55]">{children}</p>
    </div>
  );
}