

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <div className="container mt-4 prose prose-slate dark:prose-invert slide-enter-content space-y-4">{children}</div>
}