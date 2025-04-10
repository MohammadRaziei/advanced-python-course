/**
 * Converts a GitHub URL of a Jupyter notebook to an nbviewer URL.
 * 
 * @param githubUrl - The original GitHub URL of the Jupyter notebook
 * @returns The nbviewer URL
 */
export function convertToNbviewerUrl(githubUrl: string): string {
  const baseUrl = "https://nbviewer.org/github/";
  // Remove the "https://github.com/" part from the GitHub URL
  const path = githubUrl.replace("https://github.com/", "");
  // Return the nbviewer URL
  return `${baseUrl}${path}`;
}