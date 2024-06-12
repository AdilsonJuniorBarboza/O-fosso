document.addEventListener('DOMContentLoaded', () => {
    let rankingData = [
        { classe: 'Bárbaro', build: 'Bash/Bleed', nome: 'Shelby', tier: 119, tempo: '7:54', modo: 'SC', video: 'https://www.youtube.com/watch?v=Gwu-mZ2iHqQ' },
        { classe: 'Bárbaro', build: 'Thorns(Espinhos)', nome: 'Tanure', tier: 118, tempo: '10:00', modo: 'SC', video: 'https://www.youtube.com/watch?v=zGLs7OGUdYA' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Junin', tier: 113, tempo: '14:19', modo: 'SC', video: 'https://youtu.be/kTVMPcm7IV4' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Veloso', tier: 110, tempo: '7:15', modo: 'SC', video: 'https://youtu.be/sAZwc2cc8t0?si=Efck8qAbZL-KYstU' },
        { classe: 'Druída', build: 'Wind Shear', nome: 'Junin', tier: 105, tempo: '12:28', modo: 'SC', video: 'https://youtu.be/LFjy_89r1uc?si=pkB15t1EBXu0Ew1f' },
        { classe: 'Necromante', build: 'Shadow Mage', nome: 'Offo_hc', tier: 79, tempo: '5:03', modo: 'HC', video: 'https://clips.twitch.tv/OptimisticKindHippoNotATK-N-8D1qH9x4N2rbo_' },
        { classe: 'Bárbaro', build: 'Bash', nome: 'Meganord', tier: 122, tempo: '10:08', modo: 'SC', video: 'https://youtu.be/W7omv2NMSVQ?si=g3aO8YjDGWMHs9fU' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Winester', tier: 70, tempo: '4:44', modo: 'HC', video: 'https://www.youtube.com/watch?v=DXBKPXSnM6k' },
        { classe: 'Bárbaro', build: 'Bash/Bleed', nome: 'Try', tier: 122, tempo: '11:15', modo: 'SC', video: 'https://youtu.be/r4bXK-DmDz8?si=hiAwWZwfoSA7oOWB' },
    ];

    rankingData.sort((a, b) => {
        if (a.tier !== b.tier) {
            return b.tier - a.tier;
        } else {
            const aTime = parseTime(a.tempo);
            const bTime = parseTime(b.tempo);
            return aTime - bTime;
        }
    });

    const tbody = document.getElementById('ranking-body');

    function populateTable(data) {
        data.forEach((row, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${row.classe}</td>
                <td>${row.build}</td>
                <td>${row.nome}</td>
                <td>${row.tier}</td>
                <td>${row.tempo}</td>
                <td class="${row.modo === 'HC' ? 'modo-hc' : ''}">${row.modo}</td> <!-- Adicionando a classe condicionalmente -->
                <td><a href="${row.video}" target="_blank">Link</a></td>
            `;
            tbody.appendChild(tr);
        });
    }

    populateTable(rankingData);

    window.filterTable = function(classe) {
        if (classe === '') {
            tbody.innerHTML = '';
            populateTable(rankingData);
        } else if (classe === 'HC') {
            const filteredData = rankingData.filter(row => row.modo === 'HC');
            tbody.innerHTML = '';
            populateTable(filteredData);
        } else {
            const filteredData = rankingData.filter(row => row.classe === classe);
            tbody.innerHTML = '';
            populateTable(filteredData);
        }
    }

    function parseTime(timeString) {
        const [minutes, seconds] = timeString.split(':').map(Number);
        return minutes * 60 + seconds;
    }
});
