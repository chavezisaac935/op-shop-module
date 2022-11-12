
export default function InlineImage(props){
    let text = props.text as string;
    return <div>{text.replace(props.regex, props.url)}</div>
}
