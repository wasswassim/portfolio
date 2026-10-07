/** Isolates a Latin term (brand, acronym, product name) inside RTL text. */
export default function Ltr({ children }: { children: React.ReactNode }) {
  return (
    <bdi dir="ltr" className="blog-ltr">
      {children}
    </bdi>
  );
}
