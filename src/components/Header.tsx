type HeaderProps = {
  title?: string;
  subTitle?: string;
  align?: "start" | "end" | "center";
  close?: boolean;
  back?: boolean;
};
export function Header({
  title = "",
  subTitle = "",
  align = "center",
  close = false,
  back = false,
}: HeaderProps) {
  return (
    <header className="h-14 relative">
      {title && (
        <hgroup className="h-full flex items-end p-4 space-x-4">
          <h1 className="text-xl">{title}</h1>

          {subTitle && <h2 className="text-xs py-px">{subTitle}</h2>}
        </hgroup>
      )}
    </header>
  );
}
