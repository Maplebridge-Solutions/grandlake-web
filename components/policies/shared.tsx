export const PolicyContent = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-content-primary mb-12 sm:text-4xl lg:text-5xl tracking-tight leading-tight">
      {title}
    </h1>
    <div className="prose prose-slate max-w-none text-content-secondary leading-relaxed space-y-6">
      {children}
    </div>
  </div>
);

export const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-content-primary mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
);

export const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-6 pl-4 border-l-2 border-brand-subtle">
    <h3 className="text-lg font-bold text-content-primary mb-3">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

export const ContactCard = ({ icon, title, value, link }: { icon: React.ReactNode, title: string, value: string, link?: string }) => (
  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm ring-1 ring-black/5">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold uppercase tracking-wider text-content-muted mb-1">{title}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-brand hover:underline">{value}</a>
      ) : (
        <p className="text-lg font-semibold text-content-primary">{value}</p>
      )}
    </div>
  </div>
);
