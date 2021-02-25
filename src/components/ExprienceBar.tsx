export function ExperienceBar() {
    return (
        <header className="experienceBar">
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%'}} id="experienceBarStatus">
                    <span className="currentExpirience" style={{ left: '50%'}}>
                        500 pts
                    </span>
                </div>
            </div>
            <span>1000 xp</span>
        </header>
    );
}