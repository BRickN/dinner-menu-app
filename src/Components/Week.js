import '../Styles/Week.css'

function Week({ key, weekNmbr, dinnerlist, searchText }) {
    
    return (
        <tr key={key}>
            <td>{weekNmbr}</td>
            <td className="table-align-left">
                {dinnerlist.days.map(day => (
                    <div>
                        <span>{day.date}</span>
                        <span>{day.day}</span>
                    </div>
                ))}
            </td>
            <td className="table-align-left">
                {dinnerlist.days.map(day => (
                    <div>{day.dish}</div>
                ))}
            </td>
        </tr>
    );
}

export default Week;