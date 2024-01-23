const parsePathname = (url: string) => url.split("/").filter(Boolean);
const formatPath = (...paths: string[]) => `/${paths.join("/")}`;

export { parsePathname, formatPath };
