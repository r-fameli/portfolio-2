import './FloatingBox.scss'

type Props = {
    title: string,
    subtitle: string,
    datesString: string,
    content: React.ReactNode,
}

const FloatingBox = ({ title, subtitle, datesString, content }: Props) => {
    return <div className="FloatingBox">
        <div className="box-heading-flex">
            <span className="FloatingBox-titling">
                <h2>{title}</h2>
                <h2 className="FloatingBox-subtitle">{subtitle}</h2>
            </span>
            <h2>{datesString}</h2>
        </div>
        <div>
            {content}
        </div>
    </div>
}

export default FloatingBox;