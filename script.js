document.addEventListener('DOMContentLoaded', () => {
    let rankingData = [
        { classe: 'Bárbaro', build: 'Bash/Bleed', nome: 'Shelby', tier: 123, tempo: '8:10', modo: 'SC', video: 'https://www.youtube.com/watch?v=A-cyRXJVhl4' },
        { classe: 'Bárbaro', build: 'Thorns(Espinhos)', nome: 'Tanure', tier: 118, tempo: '10:00', modo: 'SC', video: 'https://www.youtube.com/watch?v=zGLs7OGUdYA' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Junin', tier: 113, tempo: '14:19', modo: 'SC', video: 'https://youtu.be/kTVMPcm7IV4' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Veloso', tier: 110, tempo: '7:15', modo: 'SC', video: 'https://youtu.be/sAZwc2cc8t0?si=Efck8qAbZL-KYstU' },
        { classe: 'Druída', build: 'Wind Shear Glass Cannon', nome: 'Junin', tier: 107, tempo: '12:25', modo: 'SC', video: 'https://youtu.be/HbFJ8V7eXkI?si=nOaNd98nloTT4sGr' },
        { classe: 'Necromante', build: 'Shadow Golem', nome: 'Offo_hc', tier: 109, tempo: '06:11', modo: 'HC', video: 'https://clips.twitch.tv/HeadstrongGeniusPheasantPJSalt-_dLsYXrID0h4t9lS' },
        { classe: 'Bárbaro', build: 'Bash', nome: 'Meganord', tier: 122, tempo: '10:08', modo: 'SC', video: 'https://youtu.be/W7omv2NMSVQ?si=g3aO8YjDGWMHs9fU' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Winester', tier: 112, tempo: '10:26', modo: 'HC', video: 'https://www.youtube.com/watch?v=kU5EMzA9v20' },
        { classe: 'Bárbaro', build: 'Flay/Bleed', nome: 'Try', tier: 132, tempo: '11:23', modo: 'SC', video: 'https://youtu.be/Ci_r7PwxS_4?si=JBQylwYzEtQjS8K6' },
        { classe: 'Necromante', build: 'Bone spear minion', nome: 'Fleezao', tier: 112, tempo: '9:22', modo: 'SC', video: 'https://www.youtube.com/watch?v=jVecyhfYsro&t=22s&ab_channel=Fleezao' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Shineray', tier: 137, tempo: '12:58', modo: 'SC', video: 'https://youtu.be/GgBNAKusGas' },
        { classe: 'Necromante', build: 'Shadow Golem', nome: 'ViTiN', tier: 130, tempo: '14:10', modo: 'SC', video: 'https://www.youtube.com/watch?v=FDiUrSIuQR8&ab_channel=VitorQueiroz' },
        { classe: 'Bárbaro', build: 'Bash/Bleed/HotA', nome: 'Gripp', tier: 133, tempo: '14:30', modo: 'SC', video: 'https://youtu.be/eKFN9dv2xhI' },
        { classe: 'Rogue', build: 'Andariel Flurry', nome: 'Seonuk', tier: 130, tempo: '11:00', modo: 'SC', video: 'https://www.youtube.com/watch?v=c08bgi1d8UY&feature=youtu.be' },
        { classe: 'Mago', build: 'Nevasca(Blizzard)', nome: 'Léo Quixeré', tier: 100, tempo: '9:32', modo: 'SC', video: 'https://www.youtube.com/watch?v=1yoMvTQz9iA&t=8s' },
        { classe: 'Mago', build: 'Immortal Frozen Orb', nome: 'Hisoka', tier: 113, tempo: '10:06', modo: 'SC', video: 'https://www.youtube.com/watch?v=k7nyM1uwOeQ' },
        { classe: 'Necromante', build: 'Shadow Golem', nome: 'VilasBoas', tier: 136, tempo: '14:05', modo: 'SC', video: 'https://youtu.be/XsJ2NrKO3VM' },
        { classe: 'Bárbaro', build: 'Tyrael bash ', nome: 'xLordByKoNx', tier: 132, tempo: '13:53', modo: 'SC', video: 'https://www.youtube.com/watch?v=dNRUb6WjeXQ' },
        { classe: 'Mago', build: 'Firekuna Shatter (Versão com inferno)', nome: 'Shineray', tier: 133, tempo: '13:03', modo: 'SC', video: 'https://youtu.be/hMJGPUCxEM0' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'JahIthBer', tier: 108, tempo: '14:20', modo: 'SC', video: 'https://youtu.be/kuRYPC5qCzw' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'defreshXD', tier: 124, tempo: '14:45', modo: 'SC', video: 'https://www.youtube.com/watch?v=JSPxisCxlrM' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'DECO', tier: 100, tempo: '9:14', modo: 'SC', video: 'https://youtu.be/vLPwkz6D4sY?si=vFTlLvvioCD4uMdH' },
        { classe: 'Bárbaro', build: 'Bleed Bash (Versão Própria)', nome: 'Bocca', tier: 144, tempo: '12:33', modo: 'SC', video: 'https://youtu.be/ojHs1UwsrN0' },
        { classe: 'Bárbaro', build: 'Bash', nome: 'Winester', tier: 92, tempo: '6:20', modo: 'HC', video: 'https://www.youtube.com/watch?v=kpSU0GuKLtI' },
        { classe: 'Necromante', build: 'Minions Golem', nome: 'gouggwww', tier: 129, tempo: '5:02', modo: 'SC', video: 'https://www.youtube.com/watch?v=jvBFIeUj0cs' },
        { classe: 'Bárbaro', build: 'Flay/Rupture', nome: 'Shineray', tier: 116, tempo: '14:42', modo: 'SC', video: 'https://youtu.be/8smwKrSHelk' },
        { classe: 'Necromante', build: 'Shadow Golem', nome: 'Lit', tier: 85, tempo: '4:18', modo: 'HC', video: 'https://www.youtube.com/watch?v=lkEgKuYvQKQ' },
        { classe: 'Bárbaro', build: 'Espinhos (Sem Uber)', nome: 'BBzAUM', tier: 58, tempo: '4:15', modo: 'HC', video: 'https://youtu.be/X5qWjiV4dgM' }, 
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Yago', tier: 86, tempo: '4:17', modo: 'HC', video: 'https://youtu.be/DdkDny4pP0U' },
        { classe: 'Druída', build: 'Pulverize', nome: 'DECO', tier: 80, tempo: '11:20', modo: 'SC', video: 'https://youtu.be/X0xsWH8Njq8?si=fyvNfIqBqkhMPorj' },
        { classe: 'Necromante', build: 'Infinimist', nome: 'Lit', tier: 100, tempo: '06:17', modo: 'HC', video: 'https://www.youtube.com/watch?v=6AtaYGfQ_qo' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'CASALE', tier: 130, tempo: '12:37', modo: 'SC', video: 'https://youtu.be/20KwWZHwGFk?si=SgxOsNmS8Ut5_EES' },
        { classe: 'Bárbaro', build: 'Bleed Bash / Tyrael ', nome: 'MTZ', tier: 128, tempo: '14:45', modo: 'SC', video: 'https://youtu.be/3xqohngwtzw?si=6pEBYOnKUzlKEVeC' },
        { classe: 'Druída', build: 'PULVERIZE Envenom + Pets', nome: 'Junin', tier: 115, tempo: '14:19', modo: 'SC', video: 'https://youtu.be/eI2iyEe9Ak0?si=crbmyXRhIEbFlgjo' },
        { classe: 'Mago', build: 'Fire Bolt / Inferno', nome: 'Immanewbie', tier: 147, tempo: '12:02', modo: 'SC', video: 'https://youtube.com/clip/UgkxTiV_AOzw1wxgFJsw3ZTKArlGg0KQ3aoZ?si=1YlMGWjo6ZeDEx91' },
        { classe: 'Bárbaro', build: 'WhirlWind', nome: 'Veloso', tier: 120, tempo: '5:54', modo: 'SC', video: 'https://youtu.be/SAvIgVhiHvE' },
        { classe: 'Necromante', build: 'Blight', nome: 'Serjão', tier: 100, tempo: '9:16', modo: 'SC', video: 'https://youtu.be/z4kJOF76eaE?si=LgB5LnIp_LN-nTq9' },
        { classe: 'Necromante', build: 'Bone Spirit', nome: 'Serjão', tier: 100, tempo: '10:12', modo: 'SC', video: 'https://youtu.be/TXd1keqp6Gg?si=RCY0PEMEkrzD594O' },
    
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
