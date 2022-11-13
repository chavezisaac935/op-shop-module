export default function InlineImage(props) {
  const text = props.text as string;
  return <div>{text.replace(props.regex, props.url)}</div>;
}
