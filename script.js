document.addEventListener('DOMContentLoaded', () => {
    let rankingData = [
        { classe: 'Bárbaro', build: 'Bash/Bleed', nome: 'Shelby', tier: 119, tempo: '7:54', video: 'https://www.youtube.com/watch?v=Gwu-mZ2iHqQ' },       
        { classe: 'Bárbaro', build: 'Thorns(Espinhos)', nome: 'Tanure', tier: 114, tempo: '9:57', video: 'https://youtu.be/NPQvHUZcEpI' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Junin', tier: 113, tempo: '14:19', video: 'https://youtu.be/kTVMPcm7IV4' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Veloso', tier: 110, tempo: '7:15', video: 'https://youtu.be/sAZwc2cc8t0?si=Efck8qAbZL-KYstU' },
        { classe: 'Druída', build: 'Wind Shear', nome: 'Junin', tier: 105, tempo: '12:28', video: 'https://youtu.be/LFjy_89r1uc?si=pkB15t1EBXu0Ew1f' },

    ];

    rankingData.sort((a, b) => {
        // Ordena pelo tier, se o tier for igual, ordena pelo tempo
        if (a.tier !== b.tier) {
            return b.tier - a.tier; // Maior tier vem primeiro
        } else {
            // Se o tier for igual, ordena pelo tempo mais rápido
            const aTime = parseTime(a.tempo);
            const bTime = parseTime(b.tempo);
            return aTime - bTime; // Menor tempo vem primeiro
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
                <td><a href="${row.video}" target="_blank">Link</a></td>
            `;
            tbody.appendChild(tr);
        });
    }

    populateTable(rankingData);

    window.filterTable = function(classe) {
        if (classe === '') {
            tbody.innerHTML = ''; // Limpa o conteúdo da tabela
            populateTable(rankingData);
        } else {
            const filteredData = rankingData.filter(row => row.classe === classe);
            tbody.innerHTML = ''; // Limpa o conteúdo da tabela
            populateTable(filteredData);
        }
    }

    function parseTime(timeString) {
        const [minutes, seconds] = timeString.split(':').map(Number);
        return minutes * 60 + seconds;
    }
});
