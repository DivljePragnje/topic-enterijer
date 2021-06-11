import "./Button.scss"

export const Button = (props:any) => {
    const {text, onClickCallback, style} = props;

    let styleLocal = style;
    if (!styleLocal) {
        styleLocal = "light1";
    }
    return <div className={`button-wrapper ${styleLocal}`} onClick={()=> onClickCallback()}>
        <span>{text}</span>
    </div>
}