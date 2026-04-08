import { Status } from "@/Classes/Status"
import { DeveloperInfo } from "@/Info"

function Header() {
    DeveloperInfo.DeveloperName = "imnotlycky"
    const status = new Status("unavailable")

    DeveloperInfo.DeveloperStatus = status.getCurState()

    const status_label = status.getLabel()
    const status_color = status.getColor()

    return (
        <header className="site-header">
            <div className="header-block">
                <button className="lycky available" type="button" aria-label="imnotlycky - Available for work">
                    <span className="status-dot" aria-hidden="true" style={{backgroundColor: status_color.color, boxShadow: status_color.shadow}}></span>
                    <span>{DeveloperInfo.DeveloperName}</span>
                    <span className="status-tooltip">{status_label}</span>
                </button>
            </div>
        </header>
    )
}

export default Header