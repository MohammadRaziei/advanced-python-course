/**
 * Handles path prefixing for resources
 * Prepends process.env.prefixPath to local paths but leaves absolute URLs unchanged
 * 
 * @param path - The path to process
 * @returns The processed path with appropriate prefix
 */
export const handlePath = (path: string): string => {
  // If path is an absolute URL (starts with http:// or https://), return it unchanged
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Otherwise, prepend the environment prefix path
  const prefixPath = process.env.PREFIX_PATH || '';
  return `${prefixPath}${path}`;
};