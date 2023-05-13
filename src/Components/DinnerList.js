import { dinners } from '../dinners'
import Week from './Week'

import '../Styles/DinnerList.css'

function DinnerList({ searchText }) {
    const weeks = [];
    dinners?.forEach((week) => {
        const filteredDinnerlist = filterDinnerList(week.dinnerlist, searchText);

        weeks.push(
            <Week
                key={week.weeknumber}
                weekNmbr={week.weeknumber}
                dinnerlist={filteredDinnerlist}
                searchText={searchText}
            />
        );
    })

    return (
        <div className="dinner-week-wrapper" >
            <table>
                <thead>
                    <tr>
                        <th>Weeknumber</th>
                        <th>Date</th>
                        <th>Dishes</th>
                    </tr>
                </thead>
                <tbody>{weeks}</tbody>
            </table>
        </div>
    )
}

function filterDinnerList(dinnerlist, searchText) {
    const filteredDinnerlist = {
        days: []
    }

    dinnerlist.days.forEach((day, idx) => {
        if (day.dish.toLowerCase().includes(searchText.toLowerCase())) {
            filteredDinnerlist.days.push(day)
        }
    })

    return filteredDinnerlist;
}

export default DinnerList