function Przyklad({ isActive, isDisabled }) {
    const btnClass = `btn ${isActive ? 'btn-active' : ''} ${isDisabled ? 'btn-disabled' : ''}`;

    return <button className={btnClass}>Przycisk</button>
}

export default Przyklad;