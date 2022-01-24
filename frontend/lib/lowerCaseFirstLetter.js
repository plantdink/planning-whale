export default function lowerCaseFirstLetter(string) {
  const lowerCaseString = string.toLowerCase();
  const titleString = lowerCaseString.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (letter) => letter.toUpperCase()
  );
  const noWhiteSpaceString = titleString.replaceAll(/\s/g, '');
  const finalLink =
    noWhiteSpaceString.charAt(0).toLowerCase() + noWhiteSpaceString.slice(1);
  return finalLink;
}
