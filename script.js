const monthSelect = document.getElementById('month-select');
const tournamentList = document.querySelector('.tournament-list');
const tournaments = Array.from(document.querySelectorAll('.tournament'));

function compareDates(a, b) {
	const dateA = new Date(a.dataset.startdate);
	const dateB = new Date(b.dataset.startdate);
	return dateA - dateB;
}

tournaments.sort(compareDates);
tournaments.forEach(tournament => tournamentList.appendChild(tournament));

monthSelect.addEventListener('change', () => {
	const selectedMonth = monthSelect.value;
	tournaments.forEach(tournament => {
		const tournamentDate = new Date(tournament.dataset.startdate);
		const tournamentMonth = tournamentDate.getMonth() + 1;

		if (selectedMonth === 'all') {
			tournament.style.display = 'block';
		} else if (selectedMonth == tournamentMonth) {
			tournament.style.display = 'block';
		} else {
			tournament.style.display = 'none';
        }

	});
});