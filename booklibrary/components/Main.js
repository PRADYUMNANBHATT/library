export default function Main(params) {
  const { children } = params;
  return <main className="flex-1 max-w-[1024px]">{children}</main>;
}
