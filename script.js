document.addEventListener('DOMContentLoaded', () => {
    let rankingData = [
        { classe: 'Bárbaro', build: 'Thorns(Espinhos)', nome: 'Tanure', tier: 118, tempo: '10:00', modo: 'SC', video: 'https://www.youtube.com/watch?v=zGLs7OGUdYA' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Junin', tier: 113, tempo: '14:19', modo: 'SC', video: 'https://youtu.be/kTVMPcm7IV4' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Veloso', tier: 110, tempo: '7:15', modo: 'SC', video: 'https://youtu.be/sAZwc2cc8t0?si=Efck8qAbZL-KYstU' },
        { classe: 'Druída', build: 'Wind Shear Glass Cannon', nome: 'Junin', tier: 120, tempo: '13:37', modo: 'SC', video: 'https://youtu.be/S3mVfE_banU' },
        { classe: 'Necromante', build: 'Shadow Golem', nome: 'Offo_hc', tier: 109, tempo: '06:11', modo: 'HC', video: 'https://clips.twitch.tv/HeadstrongGeniusPheasantPJSalt-_dLsYXrID0h4t9lS' },
        { classe: 'Bárbaro', build: 'Bash', nome: 'Meganord', tier: 122, tempo: '10:08', modo: 'SC', video: 'https://youtu.be/W7omv2NMSVQ?si=g3aO8YjDGWMHs9fU' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Winester', tier: 112, tempo: '10:26', modo: 'HC', video: 'https://www.youtube.com/watch?v=kU5EMzA9v20' },
        { classe: 'Bárbaro', build: 'Flay/Bleed', nome: 'Try', tier: 140, tempo: '13:45', modo: 'SC', video: 'https://youtu.be/eOdhBpqUFFM?si=1Fj50bLdj8y6O-pj' },
        { classe: 'Necromante', build: 'Bone spear', nome: 'Fleezao', tier: 126, tempo: '13:54', modo: 'SC', video: 'https://www.youtube.com/watch?v=-M-YrNJoDJM&t=754s&ab_channel=Fleezao' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Shineray', tier: 137, tempo: '12:58', modo: 'SC', video: 'https://youtu.be/GgBNAKusGas' },
        { classe: 'Necromante', build: 'Shadow Golem', nome: 'ViTiN', tier: 130, tempo: '14:10', modo: 'SC', video: 'https://www.youtube.com/watch?v=FDiUrSIuQR8&ab_channel=VitorQueiroz' },
        { classe: 'Bárbaro', build: 'Bash/Bleed/HotA', nome: 'Gripp', tier: 133, tempo: '14:30', modo: 'SC', video: 'https://youtu.be/eKFN9dv2xhI' },
        { classe: 'Rogue', build: 'Andariel Flurry', nome: 'Seonuk', tier: 135, tempo: '13:22', modo: 'SC', video: 'https://www.youtube.com/watch?v=X6WHgDuEKnc' },
        { classe: 'Mago', build: 'Nevasca(Blizzard)', nome: 'Léo Quixeré', tier: 100, tempo: '9:32', modo: 'SC', video: 'https://www.youtube.com/watch?v=1yoMvTQz9iA&t=8s' },
        { classe: 'Mago', build: 'Immortal Frozen Orb', nome: 'Hisoka', tier: 120, tempo: '10:14', modo: 'SC', video: 'https://youtu.be/UV0x3ytZRFA' },
        { classe: 'Necromante', build: 'Shadow Golem', nome: 'VilasBoas', tier: 136, tempo: '14:05', modo: 'SC', video: 'https://youtu.be/XsJ2NrKO3VM' },
        { classe: 'Bárbaro', build: 'Tyrael bash bleed ', nome: 'xLordByKoNx', tier: 134, tempo: '14:33', modo: 'SC', video: 'https://www.youtube.com/watch?v=k2YaD8P9QAI' },
        { classe: 'Mago', build: 'Firekuna Shatter (Versão com inferno)', nome: 'Shineray', tier: 133, tempo: '13:03', modo: 'SC', video: 'https://youtu.be/hMJGPUCxEM0' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'JahIthBer', tier: 108, tempo: '14:20', modo: 'SC', video: 'https://youtu.be/kuRYPC5qCzw' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'defreshXD', tier: 133, tempo: '13:47', modo: 'SC', video: 'https://www.youtube.com/watch?v=aV0qUzmZ8EQ' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'DECO', tier: 100, tempo: '9:14', modo: 'SC', video: 'https://youtu.be/vLPwkz6D4sY?si=vFTlLvvioCD4uMdH' },
        { classe: 'Bárbaro', build: 'Bleed Bash (Versão Própria)', nome: 'Bocca', tier: 144, tempo: '12:33', modo: 'SC', video: 'https://youtu.be/ojHs1UwsrN0' },
        { classe: 'Bárbaro', build: 'Bash', nome: 'Winester', tier: 92, tempo: '6:20', modo: 'HC', video: 'https://www.youtube.com/watch?v=kpSU0GuKLtI' },
        { classe: 'Necromante', build: 'Minions Golem', nome: 'gouggwww', tier: 129, tempo: '5:02', modo: 'SC', video: 'https://www.youtube.com/watch?v=jvBFIeUj0cs' },
        { classe: 'Bárbaro', build: 'Flay/Rupture', nome: 'Shineray', tier: 116, tempo: '14:42', modo: 'SC', video: 'https://youtu.be/8smwKrSHelk' },
        { classe: 'Necromante', build: 'Shadow Golem', nome: 'Lit', tier: 85, tempo: '4:18', modo: 'HC', video: 'https://www.youtube.com/watch?v=lkEgKuYvQKQ' },
        { classe: 'Bárbaro', build: 'Espinhos (Sem Uber)', nome: 'BBzAUM', tier: 76, tempo: '4:09', modo: 'HC', video: 'https://youtu.be/IaYZgXVT-P8' }, 
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Yago', tier: 86, tempo: '4:17', modo: 'HC', video: 'https://youtu.be/DdkDny4pP0U' },
        { classe: 'Druída', build: 'Pulverize', nome: 'LUAN', tier: 80, tempo: '11:20', modo: 'SC', video: 'https://youtu.be/X0xsWH8Njq8?si=fyvNfIqBqkhMPorj' },
        { classe: 'Necromante', build: 'Infinimist', nome: 'Lit', tier: 100, tempo: '06:17', modo: 'HC', video: 'https://www.youtube.com/watch?v=6AtaYGfQ_qo' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'CASALE', tier: 131, tempo: '13:10', modo: 'SC', video: 'https://youtu.be/1D-2cwip4PI' },
        { classe: 'Bárbaro', build: 'Bleed Bash / Tyrael ', nome: 'MTZ', tier: 128, tempo: '14:45', modo: 'SC', video: 'https://youtu.be/3xqohngwtzw?si=6pEBYOnKUzlKEVeC' },
        { classe: 'Druída', build: 'PULVERIZE Envenom + Pets', nome: 'Junin', tier: 115, tempo: '14:19', modo: 'SC', video: 'https://youtu.be/eI2iyEe9Ak0?si=crbmyXRhIEbFlgjo' },
        { classe: 'Mago', build: 'Fire Bolt / Inferno', nome: 'Immanewbie', tier: 151, tempo: '10:35', modo: 'SC', video: 'https://youtu.be/0VeaJTdf0Ng?si=RQ-QXWJ404rjUMhj' },
        { classe: 'Bárbaro', build: 'WhirlWind', nome: 'Veloso', tier: 120, tempo: '5:54', modo: 'SC', video: 'https://youtu.be/SAvIgVhiHvE' },
        { classe: 'Necromante', build: 'Blight', nome: 'Serjão', tier: 100, tempo: '9:16', modo: 'SC', video: 'https://youtu.be/z4kJOF76eaE?si=LgB5LnIp_LN-nTq9' },
        { classe: 'Necromante', build: 'Bone Spirit', nome: 'Serjão', tier: 100, tempo: '10:12', modo: 'SC', video: 'https://youtu.be/TXd1keqp6Gg?si=RCY0PEMEkrzD594O' },
        { classe: 'Druída', build: 'Lightning Storm (Grizzly Rage)', nome: 'Junin', tier: 100, tempo: '4:45', modo: 'SC', video: 'https://youtu.be/FbfRsKhNNwQ?si=EviyoGfaBEK8Qoio' },
        { classe: 'Bárbaro', build: 'WW Bleed Tyrael', nome: 'DJLada', tier: 104, tempo: '4:32', modo: 'HC', video: 'https://youtu.be/yXndPcPhC6E' },
        { classe: 'Mago', build: 'Firebolt', nome: 'pogg', tier: 126, tempo: '14:28', modo: 'SC', video: 'https://youtu.be/Qvm42-1IEYw' },
        { classe: 'Bárbaro', build: 'Tyrael Bash Bleed', nome: 'xLordByKoNx', tier: 136, tempo: '13:20', modo: 'SC', video: 'https://www.youtube.com/watch?v=yZ8AxX97VEE' },
        { classe: 'Bárbaro', build: 'Bash Bleed Rupture', nome: 'xixStres', tier: 135, tempo: '14:18', modo: 'SC', video: 'https://youtu.be/e3DdQsyCr1U?si=4IGPSWzG3ngi8oj1' },
        { classe: 'Rogue', build: 'Andariel Flurry', nome: 'Felipe', tier: 143, tempo: '14:04', modo: 'SC', video: 'https://youtu.be/B-zVLa0dYBs' },
        { classe: 'Rogue', build: 'Pen Shot + Imbuing', nome: 'Serjão', tier: 100, tempo: '9:37', modo: 'SC', video: 'https://youtu.be/qoKm7RZZ0UA?si=UqpJr9Aj44Xp61pj' },
        { classe: 'Necromante', build: 'Golem + Blood Mist', nome: 'BBzAUM', tier: 82, tempo: '5:59', modo: 'HC', video: 'https://youtu.be/FJFrwgVZkd4' },
        { classe: 'Bárbaro', build: 'Whirlwind', nome: 'LUAN', tier: 103, tempo: '4:51', modo: 'SC', video: 'https://youtu.be/EERhBHTAA4k' }, 
        { classe: 'Rogue', build: 'Heartseeker', nome: 'val4dao', tier: 142, tempo: '14:44', modo: 'SC', video: 'https://www.youtube.com/watch?v=MVroT71EzP8&ab_channel=vaL4dao' },
        { classe: 'Bárbaro', build: 'Bleed Bash', nome: 'Keven', tier: 130, tempo: '13:57', modo: 'HC', video: 'https://www.youtube.com/watch?v=nvgl4xhyQtw' },
        { classe: 'Rogue', build: 'Heartseeker', nome: 'Arwen', tier: 136, tempo: '14:54', modo: 'SC', video: 'https://youtu.be/ayfJv3XU8DE' },
        { classe: 'Bárbaro', build: 'Bleed Bash', nome: 'Zaibaonehit', tier: 131, tempo: '12:57', modo: 'SC', video: 'https://youtu.be/lASD_xKa40s' },
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

// Função para rolar suavemente até o elemento especificado
function searchAndScroll() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const rows = document.querySelectorAll('#ranking-body tr');

    // Verifica se o campo de pesquisa está vazio
    if (searchInput === '') {
        alert('Digite um nome para pesquisar.');
        return;
    }

    let found = false;

    rows.forEach(row => {
        const nomeCell = row.querySelector('td:nth-child(4)');
        const nome = nomeCell.textContent.trim().toLowerCase();
        if (nome.includes(searchInput)) { // Verifica se o nome contém o texto pesquisado
            // Scroll para o elemento encontrado com animação
            row.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Destaque somente o texto encontrado em amarelo
            const texto = nomeCell.innerHTML;
            const textoDestacado = texto.replace(new RegExp(`(${searchInput})`, 'gi'), '<span style="background-color: yellow">$1</span>');
            nomeCell.innerHTML = textoDestacado;

            // Remover o destaque após alguns segundos (opcional)
            setTimeout(() => {
                nomeCell.innerHTML = texto; // Restaura o texto original
            }, 3000); // 3000 milissegundos = 3 segundos

            found = true;
        }
    });

    // Se nenhum nome correspondente foi encontrado
    if (!found) {
        alert('Nome não encontrado na tabela.');
    }
}

// Seleciona o elemento de input de pesquisa
const searchInput = document.getElementById('searchInput');

// Adiciona um event listener para o evento 'keydown' no input
searchInput.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é 'Enter'
    if (event.key === 'Enter') {
        // Chama a função de pesquisa ao pressionar 'Enter'
        searchAndScroll();
    }
});


