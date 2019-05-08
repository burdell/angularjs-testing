export function camelCaseToDash(str: string) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
}

export const getComponentTemplate = (componentName: string, props: any) => {
  let propString = "";
  const propNames = Object.keys(props);
  propNames.forEach(propName => {
    propString += ` ${camelCaseToDash(propName)}="$ctrl.${propName}"`;
  });

  const dashedName = camelCaseToDash(componentName);
  return `<${dashedName} ${propString}></${dashedName}>`;
};
