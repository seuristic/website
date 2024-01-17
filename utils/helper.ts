const parseFirstPath = (url: string) => `/${url.split("/")[1] || ""}`;

export { parseFirstPath };
