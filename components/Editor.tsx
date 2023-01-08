import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "prismjs/themes/prism.css";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { EditorPlugin } from "@toast-ui/editor/types/editor";
import { useEffect, useState } from "react";
import Prism from "prismjs";

const ToastEditor = dynamic(
  async () => (await import("@toast-ui/react-editor")).Editor,
  {
    ssr: false,
  }
);

const Editor = () => {
  const [SyntaxHighlighter, setSyntaxHighlighter] = useState<EditorPlugin>();
  useEffect(() => {
    import("@toast-ui/editor-plugin-code-syntax-highlight").then(
      ({ default: plugin }) => {
        setSyntaxHighlighter([plugin, { highlighter: Prism }]);
      }
    );
  }, []);

  if (!SyntaxHighlighter) return null;

  return (
    <EditorLayout>
      <ToastEditor
        previewStyle="vertical"
        height="100%"
        initialValue={`\`\`\`js
        console.log('foo')
\`\`\``}
        plugins={[SyntaxHighlighter]}
      />
    </EditorLayout>
  );
};

export default Editor;

const EditorLayout = styled.div`
  height: 100%;
`;
