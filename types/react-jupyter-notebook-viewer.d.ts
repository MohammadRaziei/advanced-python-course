declare module 'react-jupyter-notebook-viewer' {
  import { FC, ReactNode } from 'react';
  
  export interface JupyterNotebookViewerProps {
    filePath: string;
    notebookInputLanguage: string;
    [key: string]: any;
  }
  
  export const JupyterNotebookViewer: FC<JupyterNotebookViewerProps>;
}