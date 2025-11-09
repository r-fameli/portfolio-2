import './FloatingBox.scss'

type Props = {
    title: string,
    subtitle: string,
    datesString: string,
    content: string,
}

const FloatingBox = ({ title, subtitle, datesString, content }: Props) => {
    return <div className="FloatingBox">
        <div className="box-heading-flex">
            <span>
                <h2>{title}</h2>
                <h2>{subtitle}</h2>
            </span>
            <span>{datesString}</span>
        </div>
        <div>
            {content}
        </div>
    </div>
}

export default FloatingBox;