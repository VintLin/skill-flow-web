export function GuiPreview() {
  return (
    <div className="hidden lg:block absolute right-0 top-16 translate-x-[40%] hover:translate-x-0 transition-transform duration-500 ease-out z-10 w-full max-w-[600px] h-[600px] border border-border rounded-lg overflow-hidden bg-background shadow-2xl">
      <iframe
        src="/gui/index.html"
        className="w-full h-full"
        title="Skill Flow GUI"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}
