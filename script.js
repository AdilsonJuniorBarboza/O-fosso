document.addEventListener('DOMContentLoaded', () => {
    let rankingData = [
        { classe: 'Bárbaro', build: 'Bash/Bleed', nome: 'Shelby', tier: 123, tempo: '8:10', modo: 'SC', video: 'https://www.youtube.com/watch?v=A-cyRXJVhl4' },
        { classe: 'Bárbaro', build: 'Thorns(Espinhos)', nome: 'Tanure', tier: 118, tempo: '10:00', modo: 'SC', video: 'https://www.youtube.com/watch?v=zGLs7OGUdYA' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Junin', tier: 113, tempo: '14:19', modo: 'SC', video: 'https://youtu.be/kTVMPcm7IV4' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Veloso', tier: 110, tempo: '7:15', modo: 'SC', video: 'https://youtu.be/sAZwc2cc8t0?si=Efck8qAbZL-KYstU' },
        { classe: 'Druída', build: 'Wind Shear Glass Cannon', nome: 'Junin', tier: 107, tempo: '12:25', modo: 'SC', video: 'https://youtu.be/HbFJ8V7eXkI?si=nOaNd98nloTT4sGr' },
        { classe: 'Necromante', build: 'Shadow Golem', nome: 'Offo_hc', tier: 82, tempo: '5:03', modo: 'HC', video: 'https://clips.twitch.tv/MoldyFuriousAnacondaDatBoi-L3BzBiwpWDM58m3R' },
        { classe: 'Bárbaro', build: 'Bash', nome: 'Meganord', tier: 122, tempo: '10:08', modo: 'SC', video: 'https://youtu.be/W7omv2NMSVQ?si=g3aO8YjDGWMHs9fU' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Winester', tier: 85, tempo: '4:51', modo: 'HC', video: 'https://www.youtube.com/watch?v=bafY1MbNIPg' },
        { classe: 'Bárbaro', build: 'Bash/Bleed', nome: 'Try', tier: 127, tempo: '12:30', modo: 'SC', video: 'https://youtu.be/gjPg_i54IdM?si=eE1GuGP5XFW2gBs5' },
        { classe: 'Necromante', build: 'Bone spear minion', nome: 'Fleezao', tier: 112, tempo: '9:22', modo: 'SC', video: 'https://www.youtube.com/watch?v=jVecyhfYsro&t=22s&ab_channel=Fleezao' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Shineray', tier: 128, tempo: '14:24', modo: 'SC', video: 'https://www.youtube.com/watch?v=-TiyNQhV99g' },
        { classe: 'Necromante', build: 'Shadow Golem', nome: 'ViTiN', tier: 130, tempo: '14:10', modo: 'SC', video: 'https://www.youtube.com/watch?v=FDiUrSIuQR8&ab_channel=VitorQueiroz' },
        { classe: 'Bárbaro', build: 'Bash/Bleed/HotA', nome: 'Gripp', tier: 133, tempo: '14:30', modo: 'SC', video: 'https://youtu.be/eKFN9dv2xhI' },
        { classe: 'Rogue', build: 'Andariel Flurry', nome: 'Seonuk', tier: 110, tempo: '4:49', modo: 'SC', video: 'https://www.youtube.com/watch?v=hq848TPtRiQ' },
        { classe: 'Mago', build: 'Nevasca(Blizzard)', nome: 'Léo Quixeré', tier: 100, tempo: '9:32', modo: 'SC', video: 'https://www.youtube.com/watch?v=1yoMvTQz9iA&t=8s' },
        { classe: 'Mago', build: 'Immortal Frozen Orb', nome: 'Hisoka', tier: 113, tempo: '10:06', modo: 'SC', video: 'https://www.youtube.com/watch?v=k7nyM1uwOeQ' },
        { classe: 'Necromante', build: 'Shadow Golem', nome: 'VilasBoas', tier: 129, tempo: '10:21', modo: 'SC', video: 'https://www.youtube.com/watch?v=uxHNILGEDVM' },
        { classe: 'Bárbaro', build: 'Tyrael bash + bleed (frankestein hibrido)', nome: 'xLordByKoNx', tier: 122, tempo: '10:12', modo: 'SC', video: 'https://www.youtube.com/watch?v=zoOtF69-oZo' },
        { classe: 'Mago', build: 'Firekuna Shatter (Versão com inferno)', nome: 'Shineray', tier: 132, tempo: '12:54', modo: 'SC', video: 'https://youtu.be/Jk-QNVGniz4' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'JahIthBer', tier: 102, tempo: '08:28', modo: 'SC', video: 'https://www.youtube.com/watch?v=wBpcKvlMS9U' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'defreshXD', tier: 124, tempo: '14:45', modo: 'SC', video: 'https://www.youtube.com/watch?v=JSPxisCxlrM' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'DECO', tier: 100, tempo: '9:14', modo: 'SC', video: 'https://youtu.be/vLPwkz6D4sY?si=vFTlLvvioCD4uMdH' },
        { classe: 'Bárbaro', build: 'Bleed Bash', nome: 'Bocca', tier: 136, tempo: '14:30 ', modo: 'SC', video: 'https://youtu.be/drofwZiqLnQ' },
    ];
// { classe: '', build: '', nome: '', tier: 0, tempo: '', modo: 'SC', video: '' },
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
