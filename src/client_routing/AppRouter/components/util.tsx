export const reduceOriginalPathname = (routePath: string, urlPath: string) => {
  if (routePath === "/") return urlPath;
  const partsLength = routePath.split("/").filter(Boolean).length;
  const urlPathParts = urlPath.split("/").filter(Boolean).slice(0, partsLength);

  return "/" + urlPathParts.join("/");
};

export const replaceDynamicParts = (
  routePath: string,
  urlPath: string,
  params: { [key: string]: string }
) => {
  const firstParts = routePath.split("/").filter(Boolean);
  const secondParts = urlPath.split("/").filter(Boolean);

  let resultParts: string[] = [];

  let secondPartIndex = 0;

  for (const part of firstParts) {
    if (part.startsWith(":")) {
      const paramName = part.slice(1); // Extract the parameter name from ":param"
      if (secondPartIndex <= secondParts.length) {
        params[paramName] = secondParts[secondPartIndex];
      }
      resultParts.push(secondParts[secondPartIndex] ?? "nothing");
    } else {
      resultParts.push(part);
    }

    secondPartIndex++;
  }

  const resultString = "/" + resultParts.join("/");

  // Return the final transformed string
  const replacedUrl =
    resultString === "/" ? "/" : resultString.replace(/\/$/, "");

  const reducedPath = reduceOriginalPathname(routePath, urlPath);

  return { replacedUrl, urlParams: params, reducedPath };
};
