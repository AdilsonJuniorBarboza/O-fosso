document.addEventListener('DOMContentLoaded', () => {
    const rankingData = [
        { posicao: 1, classe: 'Rogue', build: 'Heartseeker', nome: 'Junin', tier: 113, tempo: '14:19', video: 'https://youtu.be/kTVMPcm7IV4' },
        { posicao: 2, classe: 'Rogue', build: 'Heartseeker', nome: 'Veloso', tier: 110, tempo: '7:15', video: 'https://youtu.be/sAZwc2cc8t0?si=Efck8qAbZL-KYstU' },
        { posicao: 3, classe: 'Druída', build: 'Wind Shear', nome: 'Junin', tier: 105, tempo: '12:28', video: 'https://youtu.be/LFjy_89r1uc?si=pkB15t1EBXu0Ew1f' },
        { posicao: 4, classe: 'Bárbaro', build: 'Bash/Bleed', nome: 'Shelby', tier: 99, tempo: '2:50', video: 'https://www.youtube.com/watch?v=NGLTw6bELRI' },

    ];

    const tbody = document.getElementById('ranking-body');

    function populateTable(data) {
        tbody.innerHTML = '';
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.posicao}</td>
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
            populateTable(rankingData);
        } else {
            const filteredData = rankingData.filter(row => row.classe === classe);
            populateTable(filteredData);
        }
    }
});
