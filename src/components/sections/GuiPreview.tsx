export function GuiPreview() {
  return (
    <div className="absolute right-0 top-16 translate-x-1/2 hover:translate-x-0 transition-transform duration-500 ease-out z-10 w-[600px] h-[600px] border border-border rounded-lg overflow-hidden bg-background shadow-2xl">
      <iframe
        src="/gui/index.html"
        className="w-full h-full"
        title="Skill Flow GUI"
      />
    </div>
  );
}
