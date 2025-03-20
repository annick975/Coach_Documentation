interface CodeBlockProps {
  language: string;
  children: React.ReactNode;
}

export default function CodeBlock({ language, children }: CodeBlockProps) {
  return (
    <div className="my-4 rounded-md overflow-hidden">
      <div className="bg-slate-800 px-4 py-2 text-xs text-slate-400">
        {language}
      </div>
      <pre className="bg-slate-900 p-4 overflow-x-auto">
        <code className="text-sm text-slate-200">{children}</code>
      </pre>
    </div>
  );
}
